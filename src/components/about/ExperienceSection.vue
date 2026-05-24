<script setup lang="ts">
import { ref, computed } from 'vue'

type ExperienceItem = {
  title: string
  company?: string
  years?: string
  bullets?: string[]
  tag?: string
}
const props = defineProps<{ items: ExperienceItem[] }>()

const COLLAPSED_COUNT = 1
const expanded = ref(false)
const displayedItems = computed(() => (expanded.value ? props.items : props.items.slice(0, COLLAPSED_COUNT)))
function toggle() { expanded.value = !expanded.value }
</script>

<template>
  <div class="space-y-4 pt-2">
    <div :class="['space-y-4', !expanded ? 'collapsed' : '']">
      <div v-for="(exp, idx) in displayedItems" :key="idx" :class="exp.tag ? 'border-l-2 border-primary-fixed-dim pl-4' : 'border-l-2 border-outline-variant pl-4'">
        <div class="flex justify-between items-start py-3">
          <div class="flex-1">
            <div class="flex items-center justify-between gap-4">
              <h4 class="text-body-sm font-bold">{{ exp.title }}</h4>
              <div v-if="exp.tag" class="ml-4 shrink-0 bg-primary-fixed-dim text-background px-2 text-label-sm font-bold">{{ exp.tag }}</div>
            </div>
            <div class="flex items-center justify-between gap-4">
              <span class="text-label-sm text-primary-fixed-dim font-semibold">{{ exp.company }}</span>
              <span class="text-label-sm text-primary-fixed-dim opacity-80">{{ exp.years ?? '' }}</span>
            </div>
          </div>
        </div>
        <div v-if="exp.bullets" class="mt-2 space-y-1 pb-2">
          <p v-for="(b, i) in exp.bullets" :key="i" class="text-body-sm opacity-80">{{ b }}</p>
        </div>
      </div>
    </div>

    <div v-if="props.items.length > COLLAPSED_COUNT" class="pt-2">
      <button @click="toggle" class="px-3 py-1 text-label-sm font-bold text-primary-fixed-dim hover:brightness-125 transition-colors" :aria-expanded="expanded">{{ expanded ? 'SHOW LESS' : 'SHOW MORE' }}</button>
    </div>
  </div>
</template>

<style scoped>

.collapsed {
  max-height: 15vh;
  overflow: hidden;

}

.collapsed::-webkit-scrollbar { width: 10px; }
.collapsed::-webkit-scrollbar-thumb { background: rgba(0,230,57,0.26); border-radius: 999px; }
</style>
