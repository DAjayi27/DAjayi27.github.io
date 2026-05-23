<script setup lang="ts">
type ExperienceItem = {
  title: string
  company?: string
  years?: string
  bullets?: string[]
  tag?: string
}
const props = defineProps<{ items: ExperienceItem[] }>()
</script>

<template>
  <div class="space-y-4 pt-2">
    <div class="space-y-4">
      <div v-for="(exp, idx) in props.items" :key="idx" class="relative pl-4" :class="exp.tag ? 'border-l-2 border-primary-fixed-dim' : 'border-l-2 border-outline-variant'">
        <div class="flex justify-between items-start">
          <div>
            <h4 class="text-body-sm font-bold">{{ exp.title }}</h4>
            <p class="text-label-sm text-outline-variant">{{ exp.company }} {{ exp.years ? ' // ' + exp.years : '' }}</p>
          </div>
          <div v-if="exp.tag" class="bg-primary-fixed-dim text-background px-2 text-label-sm font-bold">{{ exp.tag }}</div>
        </div>
        <div v-if="exp.bullets" class="mt-2 space-y-1">
          <p v-for="(b, i) in exp.bullets" :key="i" class="text-body-sm opacity-80">{{ b }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
