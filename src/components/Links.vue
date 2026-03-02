<script setup lang="ts">
import { linksData } from "../data/data";
</script>

<template>
    <a v-for="link in linksData" :key="link.title" :href="link.href" target="_blank" rel="noopener noreferrer"
        class="link-card group flex items-center p-4 rounded-2xl transition-colors shadow-[0_2px_4px_rgba(0,0,0,0.02)]"
        :style="link.variant === 'primary'
            ? { border: '1px solid var(--color-button)', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', backgroundColor: 'var(--color-button)' }
            : { border: '1px solid var(--color-card-border)' }
            ">
        <div class="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center transition-colors" :class="link.variant === 'primary'
            ? ''
            : 'bg-neutral-50 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-700'
            " :style="link.variant === 'primary'
                ? { border: '1px solid var(--color-button)', color: 'var(--color-button-text)' }
                : { color: 'var(--color-text)' }
                ">
            <iconify-icon :icon="link.icon" class="text-xl" />
        </div>
        <div class="ml-4 flex-1">
            <span class="block font-semibold text-sm text-neutral-900 dark:text-neutral-50"
                :style="link.variant === 'primary' ? { color: 'var(--color-button-text)' } : { color: 'var(--color-text)' }">
                {{ link.title }}
            </span>
            <span class="block text-xs text-neutral-500 dark:text-neutral-400 mt-0.5"
                :style="link.variant === 'primary' ? { color: 'var(--color-button-text)' } : { color: 'var(--color-text)' }">
                {{ link.description }}
            </span>
        </div>
        <iconify-icon :icon="link.variant === 'primary' ? 'lucide:arrow-up-right' : 'lucide:chevron-right'"
            class="transition-colors"
            :class="link.variant === 'primary' ? 'opacity-70' : 'text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-500 dark:group-hover:text-neutral-300'"
            :style="link.variant === 'primary' ? { color: 'var(--color-button-text)' } : { color: 'var(--color-text)' }" />
    </a>
</template>