<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import GitHubCalendar from "github-calendar";
import "github-calendar/dist/github-calendar-responsive.css";
import {
  useStateGithub,
  YEAR_OPTIONS,
  INITIAL_REPOS,
  MAX_DOTS,
} from "../services/useStateGithub";

const GITHUB_USERNAME = "rzkir";
const calendarRef = ref<HTMLElement | null>(null);
let calendarInitialized = false;

const {
  selectedYear,
  setSelectedYear,
  totalContributions,
  repos,
  loading,
  error,
  showAllRepos,
  setShowAllRepos,
  yearLabel,
} = useStateGithub(GITHUB_USERNAME);

const displayedRepos = computed(() =>
  showAllRepos.value ? repos.value : repos.value.slice(0, INITIAL_REPOS)
);

onMounted(() => {
  initCalendar();
});

function initCalendar() {
  if (!calendarRef.value || calendarInitialized) return;
  calendarInitialized = true;
  GitHubCalendar(calendarRef.value, GITHUB_USERNAME, {
    responsive: true,
    global_stats: false,
    tooltips: true,
    summary_text: "",
  });
}

function formatCount(n: number) {
  return n.toLocaleString();
}

function getDotCount(count: number) {
  return Math.min(count, MAX_DOTS);
}
</script>

<template>
  <!-- Heatmap Header + Card -->
  <div class="flex flex-col gap-3">
    <div class="flex items-center justify-between px-1">
      <span class="text-[13px] font-medium text-neutral-700 dark:text-neutral-200">
        <template v-if="loading">Loading contributions...</template>
        <template v-else-if="error">{{ error }}</template>
        <template v-else>
          {{ formatCount(totalContributions) }} contributions in {{ yearLabel.toLowerCase() }}
        </template>
      </span>
      <div class="flex items-center gap-2">
        <label for="year-select" class="text-[11px] text-neutral-400">
          Year
        </label>
        <select
          id="year-select"
          :value="selectedYear"
          @change="(e) => {
            const v = (e.target as HTMLSelectElement).value;
            setSelectedYear(v === 'last' ? 'last' : Number(v));
          }"
          class="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-[11px] font-medium text-neutral-800 shadow-sm dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
          aria-label="Select year"
        >
          <option
            v-for="opt in YEAR_OPTIONS"
            :key="String(opt.value)"
            :value="opt.value"
          >
            {{ opt.label }}
          </option>
        </select>
      </div>
    </div>

    <div
      class="bg-white border border-neutral-200 rounded-2xl p-4 shadow-[0_2px_4px_rgba(0,0,0,0.02)] overflow-hidden dark:bg-neutral-900 dark:border-neutral-700"
    >
      <div ref="calendarRef" class="github-calendar-container min-h-[120px]">
        Loading the calendar...
      </div>

      <div class="flex items-center justify-between mt-3 pt-3 border-t border-neutral-200 dark:border-neutral-700">
        <span class="text-[10px] text-neutral-500 dark:text-neutral-400">
          Learn how we count contributions
        </span>
        <div class="flex items-center gap-1.5">
          <span class="text-[10px] text-neutral-500 dark:text-neutral-400">Less</span>
          <div class="flex gap-[3px]">
            <div class="w-2.5 h-2.5 rounded-sm bg-[#ebedf0] dark:bg-[#161b22]"></div>
            <div class="w-2.5 h-2.5 rounded-sm bg-[#9be9a8] dark:bg-[#0e4429]"></div>
            <div class="w-2.5 h-2.5 rounded-sm bg-[#40c463] dark:bg-[#006d32]"></div>
            <div class="w-2.5 h-2.5 rounded-sm bg-[#30a14e] dark:bg-[#26a641]"></div>
            <div class="w-2.5 h-2.5 rounded-sm bg-[#216e39] dark:bg-[#39d353]"></div>
          </div>
          <span class="text-[10px] text-neutral-500 dark:text-neutral-400">More</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Contribution Activity Feed -->
  <div class="flex flex-col mt-4">
    <div class="flex items-center gap-4 mb-6">
      <h4 class="text-sm font-bold text-neutral-800 dark:text-neutral-100">
        Contribution activity
      </h4>
      <div class="flex-1 h-px bg-neutral-100 dark:bg-neutral-800"></div>
    </div>

    <div
      v-if="loading"
      class="py-8 text-center text-sm text-neutral-400"
    >
      Loading activity...
    </div>

    <div
      v-else-if="error"
      class="py-8 text-center text-sm text-red-500"
    >
      {{ error }}
    </div>

    <div
      v-else-if="repos.length > 0"
      class="flex flex-col gap-4"
    >
      <div class="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
        <p class="mb-4 text-[13px] font-medium text-neutral-800 dark:text-neutral-100">
          <span class="text-neutral-500 dark:text-neutral-400">Created</span>
          <span class="font-semibold text-blue-600 dark:text-blue-400">
            {{ formatCount(totalContributions) }}
          </span>
          commits in
          <span class="font-semibold text-blue-600 dark:text-blue-400">
            {{ repos.length }}
          </span>
          repositories
        </p>

        <ul class="flex flex-col gap-2.5">
          <li
            v-for="repo in displayedRepos"
            :key="repo.nameWithOwner"
            class="group flex flex-wrap items-center gap-x-3 gap-y-1.5 rounded-xl border border-transparent bg-neutral-50 px-3 py-2.5 text-sm transition-colors hover:border-neutral-200 hover:bg-neutral-100 dark:bg-neutral-800/50 dark:hover:border-neutral-700 dark:hover:bg-neutral-800"
          >
            <a
              :href="repo.url"
              target="_blank"
              rel="noopener noreferrer"
              class="min-w-0 flex-1 font-medium text-blue-500 underline decoration-blue-300 underline-offset-2 hover:text-blue-600 hover:decoration-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {{ repo.nameWithOwner }}
            </a>
            <span class="shrink-0 text-[11px] text-neutral-400">
              {{ repo.totalCount }} {{ repo.totalCount === 1 ? "commit" : "commits" }}
            </span>
            <span
              class="ml-auto flex shrink-0 items-center gap-0.5"
              aria-hidden
            >
              <span
                v-for="i in getDotCount(repo.totalCount)"
                :key="i"
                class="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/60 transition-colors group-hover:bg-blue-500/80"
              />
            </span>
          </li>
        </ul>

        <div class="mt-4 flex flex-wrap gap-3">
          <button
            v-if="repos.length > INITIAL_REPOS && !showAllRepos"
            type="button"
            @click="setShowAllRepos(true)"
            class="rounded-lg bg-neutral-800 px-4 py-2 text-[11px] font-semibold text-white shadow-sm hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            Show more activity
          </button>
          <a
            v-if="showAllRepos || repos.length <= INITIAL_REPOS"
            :href="`https://github.com/${GITHUB_USERNAME}?tab=overview`"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center rounded-lg border border-neutral-200 bg-white px-4 py-2 text-[11px] font-medium text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </div>

    <div
      v-else
      class="py-8 text-center text-sm text-neutral-400"
    >
      No contribution data yet.
    </div>
  </div>
</template>

<style scoped>
/* Hide library's built-in legend to avoid duplication */
.github-calendar-container :deep(.contrib-footer) {
  display: none;
}

/* Hide skip link for cleaner layout */
.github-calendar-container :deep(.float-right > a[href="#"]) {
  display: none;
}

.github-calendar-container :deep(.js-yearly-contributions) {
  margin: 0;
}

.github-calendar-container :deep(.contrib-column) {
  display: none;
}

/* GitHub-style colors for light mode */
.github-calendar-container :deep(.ContributionCalendar-day[data-level="0"]) {
  background-color: #ebedf0;
}

.github-calendar-container :deep(.ContributionCalendar-day[data-level="1"]) {
  background-color: #9be9a8;
}

.github-calendar-container :deep(.ContributionCalendar-day[data-level="2"]) {
  background-color: #40c463;
}

.github-calendar-container :deep(.ContributionCalendar-day[data-level="3"]) {
  background-color: #30a14e;
}

.github-calendar-container :deep(.ContributionCalendar-day[data-level="4"]) {
  background-color: #216e39;
}

/* Dark mode: GitHub dark contribution colors */
:global(.dark) .github-calendar-container :deep(.ContributionCalendar-day[data-level="0"]) {
  background-color: #161b22;
}

:global(.dark) .github-calendar-container :deep(.ContributionCalendar-day[data-level="1"]) {
  background-color: #0e4429;
}

:global(.dark) .github-calendar-container :deep(.ContributionCalendar-day[data-level="2"]) {
  background-color: #006d32;
}

:global(.dark) .github-calendar-container :deep(.ContributionCalendar-day[data-level="3"]) {
  background-color: #26a641;
}

:global(.dark) .github-calendar-container :deep(.ContributionCalendar-day[data-level="4"]) {
  background-color: #39d353;
}

/* Calendar labels for dark mode */
:global(.dark) .github-calendar-container :deep(.calendar-graph text.month),
:global(.dark) .github-calendar-container :deep(.calendar-graph text.wday) {
  fill: #8b949e;
}

:global(.dark) .github-calendar-container :deep(text.ContributionCalendar-label) {
  fill: #8b949e;
}

/* Remove default calendar border - we use our own card */
.github-calendar-container :deep(.calendar) {
  border: none;
  min-height: auto;
}
</style>
