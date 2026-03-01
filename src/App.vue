<script setup lang="ts">
import { computed, ref } from "vue";
import { useTheme } from "../context/ThemaContext";
import Links from "./components/Links.vue";
import SocialMedia from "./components/SocialMedia.vue";
import GthubActivity from "./components/GthubActivity.vue";
import DigitalTimer from "./components/DigitalTimer.vue";

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
    <main class="flex-1 overflow-y-auto py-10 px-4 md:px-6 flex flex-col items-center">
      <!-- Profile Section -->
      <div class="w-full max-w-sm flex flex-col items-center text-center mb-6 relative">
        <button type="button"
          class="absolute right-0 top-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-700 shadow-sm hover:bg-neutral-100 hover:border-neutral-300 transition-colors dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800"
          @click="toggleTheme" :aria-label="isDark ? 'Ubah ke light mode' : 'Ubah ke dark mode'">
          <iconify-icon v-if="isDark" icon="lucide:sun" class="text-[18px]" />
          <iconify-icon v-else icon="lucide:moon-star" class="text-[18px]" />
        </button>

        <div class="relative mb-6">
          <div
            class="w-24 h-24 rounded-full overflow-hidden border-[3px] border-white shadow-sm ring-1 ring-neutral-200">
            <img src="/me.jpeg" alt="Profile Photo" class="w-full h-full object-cover" />
          </div>
          <div
            class="absolute bottom-0 right-0 w-6 h-6 bg-white border border-neutral-200 rounded-full flex items-center justify-center shadow-sm">
            <iconify-icon icon="lucide:check-circle-2" class="text-blue-500 text-sm" />
          </div>
        </div>

        <h1 class="heading-font text-2xl tracking-tight mb-2">
          Rizki Ramadhan
        </h1>
        <p class="text-neutral-500 text-[15px] leading-relaxed max-w-xl">
          Fullstack Developer with several years of experience as a Freelancer.Multiple certifications.Passionate about
          traveling and naturally curious.Currently,I am focused on becoming a great leader and continuing to share my
          knowledge with the world.
        </p>

        <!-- Timer Row -->
        <DigitalTimer />
      </div>

      <!-- Tab Navigation -->
      <div class="w-full max-w-sm flex p-1 bg-neutral-200/40 rounded-2xl mb-6 dark:bg-neutral-800/40">
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
        <div class="tab-content flex flex-col gap-3" :class="{
          'is-active': activeTab === 'links',
          'is-hidden': activeTab !== 'links',
        }">
          <Links />
        </div>

        <!-- Tab: Social -->
        <div class="tab-content flex flex-col gap-3" :class="{
          'is-active': activeTab === 'social',
          'is-hidden': activeTab !== 'social',
        }">
          <SocialMedia />
        </div>

        <!-- Tab: GitHub Activity -->
        <div class="tab-content flex flex-col w-full gap-3" :class="{
          'is-active': activeTab === 'github',
          'is-hidden': activeTab !== 'github',
        }">
          <GthubActivity />
        </div>
      </div>
    </main>

    <!-- Footer Safe Area -->
    <footer class="shrink-0 pb-[34px] flex justify-center">
      <p class="text-[11px] uppercase tracking-widest text-neutral-300 font-bold">
        © 2026 Rizki Ramadhan
      </p>
    </footer>
  </div>
</template>