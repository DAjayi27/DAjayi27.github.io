<script setup lang="ts">
interface BioData {
  description: string
  bullets?: string[]
  statusLabel?: string
  statusValue?: string
  socialLinks?: {
    label: string
    icon: string
    href: string
  }[]
}

const props = defineProps<{ data: BioData }>()
</script>

<template>
  <div class="space-y-4 pt-2">
    <p class="text-body-sm leading-relaxed">{{ props.data.description }}</p>
    <div class="grid grid-cols-2 gap-4">
      <ul class="space-y-1 text-label-sm">
        <li v-for="(b, i) in props.data.bullets ?? []" :key="i" class="flex gap-2"><span>[+]</span> {{ b }}</li>
      </ul>
      <div class="border-l border-outline-variant pl-4">
        <div class="text-label-sm uppercase text-outline-variant">{{ props.data.statusLabel ?? 'STATUS' }}</div>
        <div class="text-primary-fixed-dim font-bold animate-pulse">{{ props.data.statusValue ?? '' }}</div>
        <div v-if="props.data.socialLinks?.length" class="mt-4 flex items-center gap-4">
          <a
            v-for="link in props.data.socialLinks"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noreferrer"
            class="flex items-center gap-2 text-label-sm text-primary-fixed-dim hover:text-primary-container transition-colors"
          >
            <span class="material-symbols-outlined text-sm">{{ link.icon }}</span>
            <span>{{ link.label }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.material-symbols-outlined { font-variation-settings: 'FILL' 1; }
</style>
