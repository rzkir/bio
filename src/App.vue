<script setup lang="ts">
import { computed, ref } from "vue";
import { useTheme } from "../context/ThemaContext";

type TabName = "links" | "social" | "github";

const activeTab = ref<TabName>("links");

const { theme, toggleTheme } = useTheme();
const isDark = computed(() => theme.value === "dark");

function setTab(tab: TabName) {
  activeTab.value = tab;
}
</script>

<template>
  <div
    class="min-h-screen flex flex-col bg-[#FAFAFA] text-[#171717] selection:bg-neutral-200 dark:bg-neutral-950 dark:text-neutral-50">
    <main class="flex-1 overflow-y-auto pt-14 px-6 pb-12 flex flex-col items-center">
      <!-- Profile Section -->
      <div class="w-full max-w-sm flex flex-col items-center text-center mb-8 relative">
        <button type="button"
          class="absolute right-0 top-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-700 shadow-sm hover:bg-neutral-100 hover:border-neutral-300 transition-colors dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800"
          @click="toggleTheme" :aria-label="isDark ? 'Ubah ke light mode' : 'Ubah ke dark mode'">
          <iconify-icon v-if="isDark" icon="lucide:sun" class="text-[18px]" />
          <iconify-icon v-else icon="lucide:moon-star" class="text-[18px]" />
        </button>

        <div class="relative mb-6">
          <div
            class="w-24 h-24 rounded-full overflow-hidden border-[3px] border-white shadow-sm ring-1 ring-neutral-200">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=256&h=256"
              alt="Profile Photo" class="w-full h-full object-cover" />
          </div>
          <div
            class="absolute bottom-0 right-0 w-6 h-6 bg-white border border-neutral-200 rounded-full flex items-center justify-center shadow-sm">
            <iconify-icon icon="lucide:check-circle-2" class="text-blue-500 text-sm" />
          </div>
        </div>

        <h1 class="heading-font text-2xl tracking-tight mb-2">
          Rizki Ramadhan
        </h1>
        <p class="text-neutral-500 text-[15px] leading-relaxed max-w-[280px]">
          Frontend developer & creative builder. Menciptakan pengalaman web
          minimalis dan modern.
        </p>

        <!-- Social Icons Row -->
        <div class="flex items-center gap-5 mt-6">
          <a target="_blank" href="https://www.instagram.com/rzkir.20"
            class="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-neutral-100 shadow-sm hover:border-neutral-300 transition-colors text-neutral-600">
            <iconify-icon icon="lucide:instagram" class="text-xl" />
          </a>
          <a href="#"
            class="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-neutral-100 shadow-sm hover:border-neutral-300 transition-colors text-neutral-600">
            <iconify-icon icon="lucide:twitter" class="text-xl" />
          </a>
          <a href="#"
            class="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-neutral-100 shadow-sm hover:border-neutral-300 transition-colors text-neutral-600">
            <iconify-icon icon="lucide:linkedin" class="text-xl" />
          </a>
        </div>
      </div>

      <!-- Tab Navigation -->
      <div class="w-full max-w-sm flex p-1 bg-neutral-200/40 rounded-2xl mb-8 dark:bg-neutral-800/40">
        <button type="button"
          class="tab-btn flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300" :class="activeTab === 'links'
            ? 'bg-[#171717] text-white shadow-sm'
            : 'text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100'
            " @click="setTab('links')">
          Links
        </button>
        <button type="button"
          class="tab-btn flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300" :class="activeTab === 'social'
            ? 'bg-[#171717] text-white shadow-sm'
            : 'text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100'
            " @click="setTab('social')">
          Social
        </button>
        <button type="button"
          class="tab-btn flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300" :class="activeTab === 'github'
            ? 'bg-[#171717] text-white shadow-sm'
            : 'text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100'
            " @click="setTab('github')">
          GitHub
        </button>
      </div>

      <!-- Tabs Container -->
      <div class="w-full max-w-sm relative">
        <!-- Tab: Links -->
        <div class="tab-content flex flex-col gap-3.5" :class="{
          'is-active': activeTab === 'links',
          'is-hidden': activeTab !== 'links',
        }">
          <a href="#"
            class="link-card group flex items-center p-4 bg-white border border-neutral-200 rounded-2xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] dark:bg-neutral-900 dark:border-neutral-700">
            <div
              class="w-10 h-10 flex-shrink-0 bg-neutral-50 rounded-xl flex items-center justify-center text-neutral-700 group-hover:bg-neutral-100 transition-colors dark:bg-neutral-800 dark:text-neutral-200 dark:group-hover:bg-neutral-700">
              <iconify-icon icon="lucide:globe" class="text-xl" />
            </div>
            <div class="ml-4 flex-1">
              <span class="block font-semibold text-sm">Selected Works</span>
              <span class="block text-xs text-neutral-400 mt-0.5">
                Personal Portfolio 2024
              </span>
            </div>
            <iconify-icon icon="lucide:chevron-right"
              class="text-neutral-300 group-hover:text-neutral-500 transition-colors dark:text-neutral-600 dark:group-hover:text-neutral-300" />
          </a>

          <a href="#"
            class="link-card group flex items-center p-4 bg-white border border-neutral-200 rounded-2xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] dark:bg-neutral-900 dark:border-neutral-700">
            <div
              class="w-10 h-10 flex-shrink-0 bg-neutral-50 rounded-xl flex items-center justify-center text-neutral-700 group-hover:bg-neutral-100 transition-colors dark:bg-neutral-800 dark:text-neutral-200 dark:group-hover:bg-neutral-700">
              <iconify-icon icon="lucide:newspaper" class="text-xl" />
            </div>
            <div class="ml-4 flex-1">
              <span class="block font-semibold text-sm">The Design Log</span>
              <span class="block text-xs text-neutral-400 mt-0.5">
                Weekly design insights &amp; tips
              </span>
            </div>
            <iconify-icon icon="lucide:chevron-right"
              class="text-neutral-300 group-hover:text-neutral-500 transition-colors dark:text-neutral-600 dark:group-hover:text-neutral-300" />
          </a>

          <a href="#"
            class="link-card group flex items-center p-4 bg-white border border-neutral-200 rounded-2xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] dark:bg-neutral-900 dark:border-neutral-700">
            <div
              class="w-10 h-10 flex-shrink-0 bg-neutral-50 rounded-xl flex items-center justify-center text-neutral-700 group-hover:bg-neutral-100 transition-colors dark:bg-neutral-800 dark:text-neutral-200 dark:group-hover:bg-neutral-700">
              <iconify-icon icon="lucide:shopping-bag" class="text-xl" />
            </div>
            <div class="ml-4 flex-1">
              <span class="block font-semibold text-sm">Gumroad Store</span>
              <span class="block text-xs text-neutral-400 mt-0.5">
                UI Kits &amp; Design Templates
              </span>
            </div>
            <iconify-icon icon="lucide:chevron-right"
              class="text-neutral-300 group-hover:text-neutral-500 transition-colors dark:text-neutral-600 dark:group-hover:text-neutral-300" />
          </a>

          <a href="#"
            class="link-card group flex items-center p-4 bg-[#171717] border border-[#171717] rounded-2xl shadow-lg dark:bg-neutral-50 dark:border-neutral-50">
            <div
              class="w-10 h-10 flex-shrink-0 bg-neutral-800 rounded-xl flex items-center justify-center text-white dark:bg-neutral-900 dark:text-neutral-50">
              <iconify-icon icon="lucide:mail" class="text-xl" />
            </div>
            <div class="ml-4 flex-1">
              <span class="block font-semibold text-sm text-white dark:text-neutral-950">
                Work with me
              </span>
              <span class="block text-xs text-neutral-400 mt-0.5">
                Open for new projects
              </span>
            </div>
            <iconify-icon icon="lucide:arrow-up-right" class="text-neutral-500 dark:text-neutral-900" />
          </a>
        </div>

        <!-- Tab: Social -->
        <div class="tab-content flex flex-col gap-3.5" :class="{
          'is-active': activeTab === 'social',
          'is-hidden': activeTab !== 'social',
        }">
          <div
            class="link-card flex items-center p-4 bg-white border border-neutral-200 rounded-2xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] dark:bg-neutral-900 dark:border-neutral-700">
            <div
              class="w-10 h-10 flex-shrink-0 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center dark:bg-pink-900/20 dark:text-pink-400">
              <iconify-icon icon="lucide:instagram" class="text-xl" />
            </div>
            <div class="ml-4 flex-1">
              <span class="block font-semibold text-sm">Instagram</span>
              <span class="block text-xs text-neutral-400">
                @rizki.design • 12.4k
              </span>
            </div>
            <a href="#"
              class="px-4 py-1.5 bg-[#171717] text-white text-[11px] font-bold uppercase tracking-wider rounded-lg hover:bg-neutral-800 transition-colors dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200">
              Follow
            </a>
          </div>

          <div
            class="link-card flex items-center p-4 bg-white border border-neutral-200 rounded-2xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] dark:bg-neutral-900 dark:border-neutral-700">
            <div
              class="w-10 h-10 flex-shrink-0 bg-neutral-100 text-neutral-900 rounded-xl flex items-center justify-center dark:bg-neutral-800 dark:text-neutral-100">
              <iconify-icon icon="simple-icons:tiktok" class="text-xl" />
            </div>
            <div class="ml-4 flex-1">
              <span class="block font-semibold text-sm">TikTok</span>
              <span class="block text-xs text-neutral-400">
                Process videos • 45k
              </span>
            </div>
            <a href="#"
              class="px-4 py-1.5 bg-[#171717] text-white text-[11px] font-bold uppercase tracking-wider rounded-lg hover:bg-neutral-800 transition-colors dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200">
              Follow
            </a>
          </div>

          <div
            class="link-card flex items-center p-4 bg-white border border-neutral-200 rounded-2xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] dark:bg-neutral-900 dark:border-neutral-700">
            <div
              class="w-10 h-10 flex-shrink-0 bg-sky-50 text-sky-500 rounded-xl flex items-center justify-center dark:bg-sky-900/20 dark:text-sky-400">
              <iconify-icon icon="lucide:twitter" class="text-xl" />
            </div>
            <div class="ml-4 flex-1">
              <span class="block font-semibold text-sm">Twitter / X</span>
              <span class="block text-xs text-neutral-400">
                Daily thoughts • 8.2k
              </span>
            </div>
            <a href="#"
              class="px-4 py-1.5 bg-[#171717] text-white text-[11px] font-bold uppercase tracking-wider rounded-lg hover:bg-neutral-800 transition-colors dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200">
              Follow
            </a>
          </div>

          <div
            class="link-card flex items-center p-4 bg-white border border-neutral-200 rounded-2xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] dark:bg-neutral-900 dark:border-neutral-700">
            <div
              class="w-10 h-10 flex-shrink-0 bg-red-50 text-red-600 rounded-xl flex items-center justify-center dark:bg-red-900/20 dark:text-red-400">
              <iconify-icon icon="lucide:youtube" class="text-xl" />
            </div>
            <div class="ml-4 flex-1">
              <span class="block font-semibold text-sm">YouTube</span>
              <span class="block text-xs text-neutral-400">
                Tutorials • 3.1k
              </span>
            </div>
            <a href="#"
              class="px-4 py-1.5 bg-[#171717] text-white text-[11px] font-bold uppercase tracking-wider rounded-lg hover:bg-neutral-800 transition-colors dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200">
              Follow
            </a>
          </div>

          <div
            class="link-card flex items-center p-4 bg-white border border-neutral-200 rounded-2xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] dark:bg-neutral-900 dark:border-neutral-700">
            <div
              class="w-10 h-10 flex-shrink-0 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center dark:bg-blue-900/20 dark:text-blue-400">
              <iconify-icon icon="lucide:linkedin" class="text-xl" />
            </div>
            <div class="ml-4 flex-1">
              <span class="block font-semibold text-sm">LinkedIn</span>
              <span class="block text-xs text-neutral-400">
                Professional network
              </span>
            </div>
            <a href="#"
              class="px-4 py-1.5 bg-[#171717] text-white text-[11px] font-bold uppercase tracking-wider rounded-lg hover:bg-neutral-800 transition-colors dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200">
              Connect
            </a>
          </div>
        </div>

        <!-- Tab: GitHub Activity -->
        <div class="tab-content flex flex-col w-full gap-6" :class="{
          'is-active': activeTab === 'github',
          'is-hidden': activeTab !== 'github',
        }">
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
              class="bg-white border border-neutral-200 rounded-2xl p-4 shadow-[0_2px_4px_rgba(0,0,0,0.02)] overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
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
            <button type="button"
              class="px-4 py-1.5 bg-neutral-800 text-white text-[11px] font-bold rounded-lg shadow-sm dark:bg-neutral-100 dark:text-neutral-900">
              2026
            </button>
            <button type="button"
              class="px-4 py-1.5 bg-white border border-neutral-200 text-neutral-500 text-[11px] font-bold rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-300">
              2025
            </button>
          </div>

          <!-- Contribution Activity Feed -->
          <div class="flex flex-col mt-4">
            <div class="flex items-center gap-4 mb-6">
              <h4 class="text-sm font-bold text-neutral-800 dark:text-neutral-100">
                Contribution activity
              </h4>
              <div class="flex-1 h-[1px] bg-neutral-100 dark:bg-neutral-800"></div>
            </div>

            <!-- Activity Group -->
            <div class="relative pb-8 pl-8 border-l border-neutral-100 dark:border-neutral-800">
              <div
                class="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-neutral-200 border-2 border-white dark:bg-neutral-700 dark:border-neutral-900">
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
                      class="w-7 h-7 flex items-center justify-center bg-neutral-50 rounded-lg border border-neutral-100 dark:bg-neutral-900 dark:border-neutral-700">
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
                        class="text-[10px] text-neutral-400 font-medium px-2 py-0.5 bg-neutral-50 rounded-full border border-neutral-100 dark:bg-neutral-900 dark:border-neutral-700">
                        4 commits
                      </span>
                    </li>
                    <li class="flex items-center justify-between">
                      <a href="#" class="text-xs text-blue-500 hover:underline">
                        azrivera/rizverse-mobile-new
                      </a>
                      <span
                        class="text-[10px] text-neutral-400 font-medium px-2 py-0.5 bg-neutral-50 rounded-full border border-neutral-100 dark:bg-neutral-900 dark:border-neutral-700">
                        2 commits
                      </span>
                    </li>
                    <li class="flex items-center justify-between">
                      <a href="#" class="text-xs text-blue-500 hover:underline">
                        azrivera/api-anime
                      </a>
                      <span
                        class="text-[10px] text-neutral-400 font-medium px-2 py-0.5 bg-neutral-50 rounded-full border border-neutral-100 dark:bg-neutral-900 dark:border-neutral-700">
                        1 commit
                      </span>
                    </li>
                  </ul>
                </div>

                <div class="flex items-center gap-3">
                  <div
                    class="w-7 h-7 flex items-center justify-center bg-neutral-50 rounded-lg border border-neutral-100 dark:bg-neutral-900 dark:border-neutral-700">
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
                  class="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-neutral-200 border-2 border-white dark:bg-neutral-700 dark:border-neutral-900">
                </div>
                <div class="mb-4">
                  <span class="text-[13px] font-bold text-neutral-400">
                    February 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Newsletter / CTA Section -->
      <div
        class="w-full max-w-sm mt-12 p-6 bg-neutral-100/60 rounded-3xl text-center border border-white/50 shadow-inner dark:bg-neutral-900/60 dark:border-neutral-800">
        <h3 class="text-sm font-semibold text-neutral-800 mb-1 dark:text-white">
          Stay Updated
        </h3>
        <p class="text-xs text-neutral-500 mb-4 px-4 dark:text-neutral-400">
          Join 2,400+ subscribers reading my monthly newsletter.
        </p>
        <div class="flex gap-2">
          <input type="email" placeholder="Your email"
            class="flex-1 bg-white border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-200 transition-all dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-50 dark:focus:ring-neutral-700" />
          <button
            class="bg-neutral-800 text-white px-4 py-2.5 rounded-xl text-xs font-medium hover:bg-neutral-700 transition-colors dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200">
            Subscribe
          </button>
        </div>
      </div>
    </main>

    <!-- Footer Safe Area -->
    <footer class="shrink-0 pb-[34px] flex justify-center pt-4">
      <p class="text-[11px] uppercase tracking-widest text-neutral-300 font-bold">
        © 2024 Rizki Putra
      </p>
    </footer>
  </div>
</template>