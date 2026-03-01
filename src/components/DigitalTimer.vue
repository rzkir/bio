<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const now = ref(new Date());
let timerId: number | null = null;

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

const formattedTime = computed(() =>
    now.value.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    })
);

const formattedDate = computed(() =>
    now.value.toLocaleDateString("id-ID", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
    })
);
</script>

<template>
    <div class="mt-6 flex flex-col items-center gap-4">
        <span class="text-[11px] uppercase tracking-[0.25em] text-neutral-400">
            Current Time
        </span>

        <div class="w-full max-w-sm">
            <div class="flex flex-col items-center gap-4">
                <Transition name="time-fade" mode="out-in">
                    <span :key="formattedTime"
                        class="font-mono text-[22px] leading-none tracking-[0.3em] text-neutral-900 dark:text-neutral-50">
                        {{ formattedTime }}
                    </span>
                </Transition>
                <span class="text-[11px] uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
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
