<template>
  <!-- Heatmap Header + Card -->
  <div class="flex flex-col gap-3">
    <div class="flex items-center justify-between px-1">
      <span class="text-[13px] font-medium text-neutral-700 dark:text-neutral-200">
        1,199 contributions in the last year
      </span>
      <div class="flex items-center gap-1.5">
        <span class="text-[11px] text-neutral-400">
          Contribution settings
        </span>
        <iconify-icon icon="lucide:chevron-down" class="text-[10px] text-neutral-400" />
      </div>
    </div>

    <div
      class="bg-white border border-neutral-200 rounded-2xl p-4 shadow-[0_2px_4px_rgba(0,0,0,0.02)] overflow-hidden dark:bg-neutral-900 dark:border-neutral-700"
    >
      <div class="flex justify-between items-start mb-4 overflow-x-auto pb-2">
        <div class="flex flex-col gap-1 pr-3 border-r border-neutral-100 mr-3 dark:border-neutral-800">
          <div class="text-[9px] text-neutral-400 font-bold h-2.5 flex items-center">
            Mon
          </div>
          <div class="text-[9px] text-neutral-400 font-bold h-2.5 flex items-center mt-2">
            Wed
          </div>
          <div class="text-[9px] text-neutral-400 font-bold h-2.5 flex items-center mt-2">
            Fri
          </div>
        </div>
        <div class="flex-1">
          <div class="flex justify-between mb-2 px-1">
            <span class="text-[9px] font-bold text-neutral-400 uppercase">
              Mar
            </span>
            <span class="text-[9px] font-bold text-neutral-400 uppercase">
              May
            </span>
            <span class="text-[9px] font-bold text-neutral-400 uppercase">
              Jul
            </span>
            <span class="text-[9px] font-bold text-neutral-400 uppercase">
              Sep
            </span>
            <span class="text-[9px] font-bold text-neutral-400 uppercase">
              Nov
            </span>
            <span class="text-[9px] font-bold text-neutral-400 uppercase">
              Jan
            </span>
            <span class="text-[9px] font-bold text-neutral-400 uppercase">
              Feb
            </span>
          </div>

          <div class="grid grid-flow-col grid-rows-7 gap-1">
            <!-- Static sample heatmap cells -->
            <div class="w-2.5 h-2.5 rounded-[1px] bg-neutral-100"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-[#c6e48b]"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-neutral-100"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-[#7bc96f]"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-neutral-100"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-neutral-100"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-[#239a3b]"></div>

            <div class="w-2.5 h-2.5 rounded-[1px] bg-[#c6e48b]"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-neutral-100"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-[#7bc96f]"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-[#239a3b]"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-[#196127]"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-[#c6e48b]"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-neutral-100"></div>

            <div class="w-2.5 h-2.5 rounded-[1px] bg-neutral-100"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-neutral-100"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-[#c6e48b]"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-[#7bc96f]"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-neutral-100"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-neutral-100"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-[#239a3b]"></div>

            <div class="w-2.5 h-2.5 rounded-[1px] bg-[#c6e48b]"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-neutral-100"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-[#7bc96f]"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-[#239a3b]"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-[#196127]"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-[#c6e48b]"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-neutral-100"></div>

            <div class="w-2.5 h-2.5 rounded-[1px] bg-neutral-100"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-neutral-100"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-[#c6e48b]"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-[#7bc96f]"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-neutral-100"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-neutral-100"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-[#239a3b]"></div>

            <!-- filler -->
            <div class="w-2.5 h-2.5 rounded-[1px] bg-neutral-100"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-[#c6e48b]"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-neutral-100"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-[#7bc96f]"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-neutral-100"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-neutral-100"></div>
            <div class="w-2.5 h-2.5 rounded-[1px] bg-[#239a3b]"></div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between mt-1">
        <span class="text-[9px] text-neutral-400">
          Learn how we count contributions
        </span>
        <div class="flex items-center gap-1">
          <span class="text-[9px] text-neutral-400">Less</span>
          <div class="flex gap-[2px]">
            <div class="w-2 h-2 rounded-[1px] bg-neutral-100"></div>
            <div class="w-2 h-2 rounded-[1px] bg-[#c6e48b]"></div>
            <div class="w-2 h-2 rounded-[1px] bg-[#7bc96f]"></div>
            <div class="w-2 h-2 rounded-[1px] bg-[#239a3b]"></div>
            <div class="w-2 h-2 rounded-[1px] bg-[#196127]"></div>
          </div>
          <span class="text-[9px] text-neutral-400 ml-1">More</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Year Selection -->
  <div class="flex gap-2">
    <button
      type="button"
      class="px-4 py-1.5 bg-neutral-800 text-white text-[11px] font-bold rounded-lg shadow-sm dark:bg-neutral-100 dark:text-neutral-900"
    >
      2026
    </button>
    <button
      type="button"
      class="px-4 py-1.5 bg-white border border-neutral-200 text-neutral-500 text-[11px] font-bold rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-300"
    >
      2025
    </button>
  </div>

  <!-- Contribution Activity Feed -->
  <div class="flex flex-col mt-4">
    <div class="flex items-center gap-4 mb-6">
      <h4 class="text-sm font-bold text-neutral-800 dark:text-neutral-100">
        Contribution activity
      </h4>
      <div class="flex-1 h-px bg-neutral-100 dark:bg-neutral-800"></div>
    </div>

    <!-- Activity Group -->
    <div class="relative pb-8 pl-8 border-l border-neutral-100 dark:border-neutral-800">
      <div
        class="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-neutral-200 border-2 border-white dark:bg-neutral-700 dark:border-neutral-900"
      >
      </div>
      <div class="mb-4">
        <span class="text-[13px] font-bold text-neutral-700 dark:text-neutral-200">
          March 1, 2026
        </span>
      </div>

      <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <div
              class="w-7 h-7 flex items-center justify-center bg-neutral-50 rounded-lg border border-neutral-100 dark:bg-neutral-900 dark:border-neutral-700"
            >
              <iconify-icon icon="lucide:git-commit" class="text-sm text-neutral-500" />
            </div>
            <span class="text-[13px] font-medium text-neutral-800 dark:text-neutral-100">
              Created 7 commits in 3 repositories
            </span>
          </div>
          <ul class="ml-10 flex flex-col gap-2.5">
            <li class="flex items-center justify-between">
              <a href="#" class="text-xs text-blue-500 hover:underline">
                azrivera/be-harmony
              </a>
              <span
                class="text-[10px] text-neutral-400 font-medium px-2 py-0.5 bg-neutral-50 rounded-full border border-neutral-100 dark:bg-neutral-900 dark:border-neutral-700"
              >
                4 commits
              </span>
            </li>
            <li class="flex items-center justify-between">
              <a href="#" class="text-xs text-blue-500 hover:underline">
                azrivera/rizverse-mobile-new
              </a>
              <span
                class="text-[10px] text-neutral-400 font-medium px-2 py-0.5 bg-neutral-50 rounded-full border border-neutral-100 dark:bg-neutral-900 dark:border-neutral-700"
              >
                2 commits
              </span>
            </li>
            <li class="flex items-center justify-between">
              <a href="#" class="text-xs text-blue-500 hover:underline">
                azrivera/api-anime
              </a>
              <span
                class="text-[10px] text-neutral-400 font-medium px-2 py-0.5 bg-neutral-50 rounded-full border border-neutral-100 dark:bg-neutral-900 dark:border-neutral-700"
              >
                1 commit
              </span>
            </li>
          </ul>
        </div>

        <div class="flex items-center gap-3">
          <div
            class="w-7 h-7 flex items-center justify-center bg-neutral-50 rounded-lg border border-neutral-100 dark:bg-neutral-900 dark:border-neutral-700"
          >
            <iconify-icon icon="lucide:git-branch" class="text-sm text-neutral-500" />
          </div>
          <div class="flex-1">
            <span class="text-[13px] font-medium text-neutral-800 dark:text-neutral-100">
              Created 1 repository
            </span>
            <div class="mt-2 flex items-center gap-2">
              <iconify-icon icon="lucide:lock" class="text-[10px] text-neutral-400" />
              <a href="#" class="text-xs text-blue-500 hover:underline">
                azrivera/be-harmony
              </a>
            </div>
          </div>
          <div class="flex items-center gap-1">
            <div class="w-2 h-2 rounded-full bg-blue-500"></div>
            <span class="text-[10px] text-neutral-400">TypeScript</span>
          </div>
        </div>
      </div>

      <!-- Previous Activity Group (label only) -->
      <div class="relative pb-4 pl-8 border-l border-neutral-100 dark:border-neutral-800">
        <div
          class="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-neutral-200 border-2 border-white dark:bg-neutral-700 dark:border-neutral-900"
        >
        </div>
        <div class="mb-4">
          <span class="text-[13px] font-bold text-neutral-400">
            February 2026
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
