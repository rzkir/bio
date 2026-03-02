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
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }
  return `${selectedYear.value}-12-31`;
});

const rangeColor = [
  "#0b1120", // null / no data
  "#022c22", // 0 contributions
  "#16a34a", // low
  "#22c55e", // medium
  "#4ade80", // high
  "#86efac", // max (library uses index 0–5)
];
</script>

<template>
  <!-- Heatmap Header + Card -->
  <div class="flex flex-col gap-3">
    <div class="flex items-center justify-between px-1">
      <span class="text-sm font-medium text-[#171717] dark:text-neutral-50">
        <template v-if="loading">Loading contributions...</template>
        <template v-else-if="error">{{ error }}</template>
        <template v-else>
          {{ formatCount(totalContributions) }} contributions in {{ yearLabel.toLowerCase() }}
        </template>
      </span>
      <div class="flex items-center gap-2">
        <label for="year-select" class="text-xs text-neutral-500 dark:text-neutral-400">
          Year
        </label>
        <select id="year-select" :value="selectedYear" @change="(e) => {
          const v = (e.target as HTMLSelectElement).value;
          setSelectedYear(v === 'last' ? 'last' : Number(v));
        }" class="rounded-lg px-2 py-1.5 text-xs font-medium shadow-sm"
          style="border: 1px solid var(--color-card-border); color: inherit;" aria-label="Select year">
          <option v-for="opt in YEAR_OPTIONS" :key="String(opt.value)" :value="opt.value">
            {{ opt.label }}
          </option>
        </select>
      </div>
    </div>

    <div class="rounded-2xl p-4 shadow-[0_2px_4px_rgba(0,0,0,0.02)]"
      style=" border: 1px solid var(--color-card-border);">
      <div class="min-h-[200px] overflow-y-auto">
        <CalendarHeatmap v-if="!loading && !error" :values="calendarValues" :end-date="endDate" :round="2"
          :range-color="rangeColor" :tooltip-unit="'contributions'"
          class="w-full scale-[1.5] origin-top-left mx-auto text-xs" />
        <div v-else class="flex items-center justify-center text-sm text-neutral-500 dark:text-neutral-400">
          <span v-if="loading">Loading calendar...</span>
          <span v-else-if="error">{{ error }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Contribution Activity Feed -->
  <div class="flex flex-col mt-4">
    <div class="flex items-center gap-4 mb-6">
      <h4 class="text-base font-bold text-[#171717] dark:text-neutral-50">
        Contribution activity
      </h4>
      <div class="flex-1 h-px bg-neutral-200 dark:bg-neutral-700"></div>
    </div>

    <div v-if="loading" class="py-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
      Loading activity...
    </div>

    <div v-else-if="error" class="py-8 text-center text-sm text-red-500">
      {{ error }}
    </div>

    <div v-else-if="repos.length > 0" class="relative pb-8 pl-8 border-l border-neutral-200 dark:border-neutral-700">
      <div
        class="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-neutral-300 border-2 border-white dark:bg-neutral-600 dark:border-neutral-900">
      </div>

      <div class="mb-4">
        <span class="text-sm font-bold text-[#171717] dark:text-neutral-50">
          {{ yearLabel }}
        </span>
      </div>

      <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <div
              class="w-7 h-7 flex items-center justify-center bg-neutral-50 rounded-lg border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700">
              <iconify-icon icon="lucide:git-commit" class="text-sm text-neutral-500 dark:text-neutral-400" />
            </div>
            <span class="text-[13px] font-medium text-[#171717] dark:text-neutral-50">
              Created {{ formatCount(totalContributions) }} commits in {{ repos.length }} repositories
            </span>
          </div>

          <ul class="ml-10 flex flex-col gap-2.5">
            <li v-for="repo in displayedRepos" :key="repo.nameWithOwner" class="flex items-center justify-between">
              <a :href="repo.url" target="_blank" rel="noopener noreferrer"
                class="text-base font-medium text-blue-500 hover:underline dark:text-blue-400">
                {{ repo.nameWithOwner }}
              </a>
              <span class="text-xs text-neutral-500 dark:text-neutral-400 font-medium px-2 py-0.5 rounded-full"
                style=" border: 1px solid var(--color-card-border);">
                {{ repo.totalCount }} {{ repo.totalCount === 1 ? "commit" : "commits" }}
              </span>
            </li>
          </ul>

          <div class="ml-10 mt-4 flex flex-wrap gap-3">
            <button v-if="repos.length > INITIAL_REPOS && !showAllRepos" type="button" @click="setShowAllRepos(true)"
              class="rounded-lg px-4 py-2 text-xs font-semibold shadow-sm hover:opacity-90 transition-opacity"
              style="background-color: var(--color-button); color: var(--color-button-text);">
              Show more activity
            </button>
            <a v-if="showAllRepos || repos.length <= INITIAL_REPOS"
              :href="`https://github.com/${GITHUB_USERNAME}?tab=overview`" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center rounded-lg px-4 py-2 text-xs font-medium transition-colors hover:opacity-90"
              style="border: 1px solid var(--color-card-border);  color: inherit;">
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="py-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
      No contribution data yet.
    </div>
  </div>
</template>

<style scoped>
:deep(.vch__legend__wrapper text) {
  font-size: 7px !important;
}
</style>
