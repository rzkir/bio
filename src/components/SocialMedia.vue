<script setup lang="ts">
import { socialsData } from "../data/data";
</script>

<template>
  <div v-for="social in socialsData" :key="social.id"
    class="link-card group flex items-center p-4 rounded-2xl shadow-[0_2px_4px_rgba(0,0,0,0.02)]" :style="{
      border: '1px solid var(--color-card-border)'
    }">
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
      class="px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors hover:opacity-90"
      style="background-color: var(--color-button); color: var(--color-button-text);">
      {{ social.buttonLabel }}
    </a>
  </div>
</template>