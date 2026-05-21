<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
  size?: string
  date?: string
  tag?: string
  icon?: string
  access?: string
}>()
</script>

<template>
  <div class="group border-2 border-[var(--color-surface-tint)] bg-black p-6 flex flex-col gap-6 cursor-pointer transition-all duration-75 hover:brightness-150 hover:shadow-[0_0_15px_rgba(0,230,57,0.4)] h-full">
    <div class="flex justify-between items-start">
      <span class="material-symbols-outlined text-4xl" :data-icon="props.icon">{{ props.icon }}</span>
      <span class="text-label-sm px-2 border border-[var(--color-surface-tint)] text-[var(--color-surface-tint)]">{{ props.tag }}</span>
    </div>
    <div>
      <h3 class="text-headline-md font-bold leading-none break-all text-[var(--color-surface-tint)]">{{ props.title }}</h3>
      <p class="text-label-md mt-2 opacity-80 text-[var(--color-surface-tint)]">Size: {{ props.size ?? '' }}</p>
      <p class="text-label-md opacity-80 text-[var(--color-surface-tint)]">Date: {{ props.date ?? '' }}</p>
    </div>
    <div class="mt-auto pt-4 border-t border-dotted border-[var(--color-surface-tint)] text-label-sm text-[var(--color-surface-tint)]">
      {{ props.access ?? '' }}
    </div>
  </div>
</template>

<style scoped>
.material-symbols-outlined { font-variation-settings: 'FILL' 1; }
</style>

