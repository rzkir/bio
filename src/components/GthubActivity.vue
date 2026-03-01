<script setup lang="ts">
import { computed } from "vue";
import { CalendarHeatmap } from "vue3-calendar-heatmap";
import "vue3-calendar-heatmap/dist/style.css";

import { formatCount } from "./ui/Calendar";

import {
  useStateGithub,
  YEAR_OPTIONS,
  INITIAL_REPOS,
} from "../services/useStateGithub";

const GITHUB_USERNAME = "rzkir";

const {
  selectedYear,
  setSelectedYear,
  totalContributions,
  repos,
  loading,
  error,
  showAllRepos,
  setShowAllRepos,
  calendarValues,
  yearLabel,
} = useStateGithub(GITHUB_USERNAME);

const displayedRepos = computed(() =>
  showAllRepos.value ? repos.value : repos.value.slice(0, INITIAL_REPOS)
);

const endDate = computed(() => {
  if (selectedYear.value === "last") {
    return new Date().toISOString().slice(0, 10);
  }
  return `${selectedYear.value}-12-31`;
});

const rangeColor = [
  "#0b1120", // null
  "#022c22", // 0
  "#16a34a", // low
  "#22c55e", // medium
  "#4ade80", // high
];
</script>

<template>
  <!-- Heatmap Header + Card -->
  <div class="flex flex-col gap-3">
    <div class="flex items-center justify-between px-1">
      <span class="text-sm font-medium text-neutral-700 dark:text-neutral-200">
        <template v-if="loading">Loading contributions...</template>
        <template v-else-if="error">{{ error }}</template>
        <template v-else>
          {{ formatCount(totalContributions) }} contributions in {{ yearLabel.toLowerCase() }}
        </template>
      </span>
      <div class="flex items-center gap-2">
        <label for="year-select" class="text-xs text-neutral-400">
          Year
        </label>
        <select id="year-select" :value="selectedYear" @change="(e) => {
          const v = (e.target as HTMLSelectElement).value;
          setSelectedYear(v === 'last' ? 'last' : Number(v));
        }"
          class="rounded-lg border border-neutral-200 bg-white px-2 py-1.5 text-xs font-medium text-neutral-800 shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
          aria-label="Select year">
          <option v-for="opt in YEAR_OPTIONS" :key="String(opt.value)" :value="opt.value">
            {{ opt.label }}
          </option>
        </select>
      </div>
    </div>

    <div
      class="bg-white border border-neutral-200 rounded-2xl p-4 shadow-[0_2px_4px_rgba(0,0,0,0.02)] dark:bg-neutral-900 dark:border-neutral-700 overflow-hidden">
      <div class="overflow-y-auto">
        <CalendarHeatmap v-if="!loading && !error" :values="calendarValues" :end-date="endDate" :round="2"
          :range-color="rangeColor" :tooltip-unit="'contributions'" class="w-full scale-[1] origin-top-left mx-auto" />
        <div v-else class="flex items-center justify-center text-sm text-neutral-400">
          <span v-if="loading">Loading calendar...</span>
          <span v-else-if="error">{{ error }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Contribution Activity Feed -->
  <div class="flex flex-col mt-4">
    <div class="flex items-center gap-4 mb-6">
      <h4 class="text-base font-bold text-neutral-800 dark:text-neutral-100">
        Contribution activity
      </h4>
      <div class="flex-1 h-px bg-neutral-100 dark:bg-neutral-800"></div>
    </div>

    <div v-if="loading" class="py-8 text-center text-sm text-neutral-400">
      Loading activity...
    </div>

    <div v-else-if="error" class="py-8 text-center text-sm text-red-500">
      {{ error }}
    </div>

    <div v-else-if="repos.length > 0" class="relative pb-8 pl-8 border-l border-neutral-100 dark:border-neutral-800">
      <div
        class="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-neutral-200 border-2 border-white dark:bg-neutral-700 dark:border-neutral-900">
      </div>

      <div class="mb-4">
        <span class="text-sm font-bold text-neutral-700 dark:text-neutral-200">
          {{ yearLabel }}
        </span>
      </div>

      <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <div
              class="w-7 h-7 flex items-center justify-center bg-neutral-50 rounded-lg border border-neutral-100 dark:bg-neutral-900 dark:border-neutral-700">
              <iconify-icon icon="lucide:git-commit" class="text-sm text-neutral-500" />
            </div>
            <span class="text-[13px] font-medium text-neutral-800 dark:text-neutral-100">
              Created {{ formatCount(totalContributions) }} commits in {{ repos.length }} repositories
            </span>
          </div>

          <ul class="ml-10 flex flex-col gap-2.5">
            <li v-for="repo in displayedRepos" :key="repo.nameWithOwner" class="flex items-center justify-between">
              <a :href="repo.url" target="_blank" rel="noopener noreferrer"
                class="text-xs text-blue-500 hover:underline">
                {{ repo.nameWithOwner }}
              </a>
              <span
                class="text-[10px] text-neutral-400 font-medium px-2 py-0.5 bg-neutral-50 rounded-full border border-neutral-100 dark:bg-neutral-900 dark:border-neutral-700">
                {{ repo.totalCount }} {{ repo.totalCount === 1 ? "commit" : "commits" }}
              </span>
            </li>
          </ul>

          <div class="ml-10 mt-4 flex flex-wrap gap-3">
            <button v-if="repos.length > INITIAL_REPOS && !showAllRepos" type="button" @click="setShowAllRepos(true)"
              class="rounded-lg bg-neutral-800 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200">
              Show more activity
            </button>
            <a v-if="showAllRepos || repos.length <= INITIAL_REPOS"
              :href="`https://github.com/${GITHUB_USERNAME}?tab=overview`" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center rounded-lg border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800">
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="py-8 text-center text-sm text-neutral-400">
      No contribution data yet.
    </div>
  </div>
</template>

<style scoped></style>
