<script setup lang="ts">
type EducationItem = { degree: string; school: string; years?: string }
const props = defineProps<{ items: EducationItem[] }>()
</script>

<template>
  <div class="space-y-4 pt-2">
    <div class="flex flex-col gap-3">
      <div v-for="(item, idx) in props.items" :key="idx" class="border-b border-outline-variant pb-2">
        <div class="flex justify-between items-center">
          <span class="text-body-sm font-bold">{{ item.degree }}</span>
          <span class="text-label-sm opacity-60">{{ item.years ?? '' }}</span>
        </div>
        <div class="text-label-sm text-outline-variant">{{ item.school }}</div>
      </div>
    </div>
    <div class="text-[10px] text-outline-variant uppercase tracking-tighter italic">&gt; VALIDATING CREDENTIALS... [VERIFIED]</div>
  </div>
</template>

<style scoped>
</style>
