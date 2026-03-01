<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useFormattedTime } from "./ui/Calendar";
const now = ref(new Date());
let timerId: number | null = null;

const formattedTime = useFormattedTime();

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
                <Transition name="time-fade" mode="out-in">
                    <span :key="formattedTime"
                        class="font-mono text-3xl leading-none tracking-[0.3em] text-neutral-900 dark:text-neutral-50">
                        {{ formattedTime }}
                    </span>
                </Transition>
                <span class="text-xs uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                    {{ formattedTime }}
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
