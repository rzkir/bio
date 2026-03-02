<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const now = ref(new Date());
let timerId: number | null = null;

const pad = (n: number) => n.toString().padStart(2, "0");

const jam = computed(() => pad(now.value.getHours()));
const menit = computed(() => pad(now.value.getMinutes()));
const detik = computed(() => pad(now.value.getSeconds()));

const formattedDate = computed(() =>
    now.value.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    })
);

onMounted(() => {
    timerId = window.setInterval(() => {
        now.value = new Date();
    }, 1000);
});

onUnmounted(() => {
    if (timerId !== null) {
        clearInterval(timerId);
    }
});
</script>

<template>
    <div class="mt-6 flex flex-col items-center gap-4">
        <span class="text-xs uppercase tracking-[0.25em] text-neutral-400">
            Current Time
        </span>

        <div class="w-full">
            <div class="flex flex-col items-center gap-4">
                <div
                    class="font-mono text-3xl leading-none tracking-[0.3em] text-neutral-900 dark:text-neutral-50 inline-flex items-baseline gap-0.5">
                    <Transition name="time-fade" mode="out-in">
                        <span :key="jam" class="inline-block tabular-nums">{{ jam }}</span>
                    </Transition>
                    <span class="opacity-60">:</span>
                    <Transition name="time-fade" mode="out-in">
                        <span :key="menit" class="inline-block tabular-nums">{{ menit }}</span>
                    </Transition>
                    <span class="opacity-60">:</span>
                    <Transition name="time-fade" mode="out-in">
                        <span :key="detik" class="inline-block tabular-nums">{{ detik }}</span>
                    </Transition>
                </div>
                <span class="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400 mt-2">
                    {{ formattedDate }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.time-fade-enter-active,
.time-fade-leave-active {
    transition: opacity 0.22s ease, transform 0.22s ease;
}

.time-fade-enter-from,
.time-fade-leave-to {
    opacity: 0;
    transform: translateY(4px);
}
</style>
