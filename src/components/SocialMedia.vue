<script setup lang="ts">
import { socialsData } from "../data/data";
</script>

<template>
  <div v-for="social in socialsData" :key="social.id"
    class="link-card flex items-center p-4 bg-white border border-neutral-200 rounded-2xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] dark:bg-neutral-900 dark:border-neutral-700">
    <div class="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center" :class="social.iconBgClass">
      <iconify-icon :icon="social.icon" class="text-xl" />
    </div>
    <div class="ml-4 flex-1">
      <span class="block font-semibold text-sm">{{ social.name }}</span>
      <span class="block text-xs text-neutral-400">
        {{ social.subtitle }}
      </span>
    </div>
    <a :href="social.href" target="_blank" rel="noopener noreferrer"
      class="px-4 py-1.5 bg-[#171717] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-neutral-800 transition-colors dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200">
      {{ social.buttonLabel }}
    </a>
  </div>
</template>