<script setup lang="ts">
import { linksData } from "../data/data";
</script>

<template>
    <a v-for="link in linksData" :key="link.title" :href="link.href" target="_blank" rel="noopener noreferrer"
        class="link-card group flex items-center p-4 rounded-2xl transition-colors" :class="link.variant === 'primary'
            ? 'bg-[#171717] border border-[#171717] shadow-lg dark:bg-neutral-50 dark:border-neutral-50'
            : 'bg-white border border-neutral-200 shadow-[0_2px_4px_rgba(0,0,0,0.02)] dark:bg-neutral-900 dark:border-neutral-700'
            ">
        <div class="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center group-hover:bg-neutral-100 transition-colors"
            :class="link.variant === 'primary'
                ? 'bg-neutral-800 text-white dark:bg-neutral-900 dark:text-neutral-50'
                : 'bg-neutral-50 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200'
                ">
            <iconify-icon :icon="link.icon" class="text-xl" />
        </div>
        <div class="ml-4 flex-1">
            <span class="block font-semibold text-sm"
                :class="link.variant === 'primary' ? 'text-white dark:text-neutral-950' : ''">
                {{ link.title }}
            </span>
            <span class="block text-xs text-neutral-400 mt-0.5">
                {{ link.description }}
            </span>
        </div>
        <iconify-icon :icon="link.variant === 'primary' ? 'lucide:arrow-up-right' : 'lucide:chevron-right'"
            class="transition-colors" :class="link.variant === 'primary'
                ? 'text-neutral-500 dark:text-neutral-900'
                : 'text-neutral-300 group-hover:text-neutral-500 dark:text-neutral-600 dark:group-hover:text-neutral-300'
                " />
    </a>
</template>