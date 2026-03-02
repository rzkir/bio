<script setup lang="ts">
import { computed, ref } from "vue";
import { useTheme } from "../../../context/ThemaContext";
import { useColor } from "../../../context/ColorContext";

const { theme, toggleTheme } = useTheme();
const { colorScheme, setColorScheme, COLOR_SCHEME_OPTIONS } = useColor();

const isDark = computed(() => theme.value === "dark");
const isOpen = ref(false);

function openModal() {
  isOpen.value = true;
}

function closeModal() {
  isOpen.value = false;
}

function onBackdropClick(event: MouseEvent) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}
</script>

<template>
  <div class="relative">
    <!-- Trigger Button -->
    <button type="button"
      class="inline-flex h-9 w-9 items-center justify-center rounded-full border shadow-sm transition-colors cursor-pointer"
      :style="{
        backgroundColor: 'var(--color-card-bg)',
        borderColor: 'var(--color-card-border)',
        color: 'var(--color-button)'
      }" @click="openModal" aria-label="Open appearance settings">
      <iconify-icon icon="lucide:palette" class="text-base" />
    </button>

    <!-- Modal -->
    <teleport to="body">
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        @click="onBackdropClick">
        <div class="w-full max-w-sm mx-4 rounded-2xl border shadow-lg bg-neutral-50 dark:bg-neutral-900"
          style="border-color: var(--color-card-border);">
          <!-- Header -->
          <div
            class="flex items-center justify-between px-4 pt-3 pb-2 border-b border-neutral-200/70 dark:border-neutral-800">
            <div>
              <p class="text-xs font-semibold tracking-[0.16em] text-neutral-400 uppercase">
                Appearance
              </p>
              <p class="text-sm font-medium text-neutral-900 dark:text-neutral-50">
                Theme & Color Scheme
              </p>
            </div>
            <button type="button"
              class="inline-flex h-7 w-7 items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors cursor-pointer"
              @click="closeModal" aria-label="Tutup pengaturan tampilan">
              <iconify-icon icon="lucide:x" class="text-sm" />
            </button>
          </div>

          <!-- Content -->
          <div class="px-4 py-4 space-y-4">
            <!-- Theme Toggle -->
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-neutral-900 dark:text-neutral-50">
                  Theme
                </p>
                <p class="text-xs text-neutral-500 dark:text-neutral-400">
                  Switch between light and dark mode
                </p>
              </div>
              <button type="button"
                class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium transition-colors cursor-pointer"
                :style="{
                  backgroundColor: 'var(--color-card-bg)',
                  borderColor: 'var(--color-card-border)',
                  color: 'var(--color-button)'
                }" @click="toggleTheme" :aria-label="isDark ? 'Ubah ke light mode' : 'Ubah ke dark mode'">
                <iconify-icon v-if="isDark" icon="lucide:sun" class="text-sm" />
                <iconify-icon v-else icon="lucide:moon-star" class="text-sm" />
                <span>
                  {{ isDark ? "Dark" : "Light" }}
                </span>
              </button>
            </div>

            <!-- Color Scheme Selector -->
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-neutral-900 dark:text-neutral-50">
                  Color Scheme
                </p>
                <p class="text-xs text-neutral-500 dark:text-neutral-400">
                  {{ colorScheme.charAt(0).toUpperCase() + colorScheme.slice(1) }}
                </p>
              </div>
              <div class="grid grid-cols-3 gap-2 p-2 rounded-xl border bg-neutral-100/70 dark:bg-neutral-900/70"
                style="border-color: var(--color-card-border);">
                <button v-for="opt in COLOR_SCHEME_OPTIONS" :key="opt.id" type="button"
                  class="w-full h-7 rounded-lg transition-transform hover:scale-110 cursor-pointer" :class="colorScheme === opt.id
                    ? 'ring-2 ring-white dark:ring-neutral-900 ring-offset-2 ring-offset-neutral-200 dark:ring-offset-neutral-800'
                    : ''
                    " :style="{
                      backgroundColor:
                        opt.id === 'slate'
                          ? '#64748b'
                          : opt.id === 'blue'
                            ? '#2563eb'
                            : opt.id === 'emerald'
                              ? '#059669'
                              : opt.id === 'violet'
                                ? '#7c3aed'
                                : opt.id === 'rose'
                                  ? '#e11d48'
                                  : '#d97706'
                    }" :title="opt.label" :aria-label="`Pilih ${opt.label}`" @click="setColorScheme(opt.id)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>
