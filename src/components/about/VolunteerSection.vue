<script setup lang="ts">
type VolunteerItem = { id?: string; title: string; meta?: string }
const props = defineProps<{ items: VolunteerItem[]; metric?: number }>()
</script>

<template>
  <div class="space-y-4 pt-2">
    <div class="space-y-3">
      <div v-for="(v, i) in props.items" :key="i" class="flex gap-3">
        <span class="text-primary-fixed-dim shrink-0">#{{ String(i+1).padStart(2,'0') }}</span>
        <div>
          <div class="text-body-sm font-bold">{{ v.title }}</div>
          <div class="text-label-sm text-outline-variant">{{ v.meta }}</div>
        </div>
      </div>
    </div>
    <div class="mt-4 pt-4 border-t border-outline-variant">
      <div class="text-label-sm text-center opacity-60">CONTRIBUTION_METRIC</div>
      <div class="flex justify-center gap-1 mt-2">
        <div v-for="n in (props.metric ?? 6)" :key="n" class="w-3 h-3 bg-primary-fixed-dim" :class="n > (props.metric ?? 6) ? 'opacity-20' : ''"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
