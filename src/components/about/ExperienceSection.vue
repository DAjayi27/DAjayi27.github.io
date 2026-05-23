<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

type ExperienceItem = {
  title: string
  company?: string
  years?: string
  bullets?: string[]
  tag?: string
}
const props = defineProps<{ items: ExperienceItem[] }>()

const containerRef = ref<HTMLElement | null>(null)
const currentIndex = ref(0)
let observer: IntersectionObserver | null = null

function scrollToIndex(i: number) {
  const container = containerRef.value
  if (!container) return
  const items = container.querySelectorAll<HTMLElement>('.exp-item')
  const el = items[i]
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1
    scrollToIndex(currentIndex.value)
  }
}

function next() {
  if (currentIndex.value < props.items.length - 1) {
    currentIndex.value += 1
    scrollToIndex(currentIndex.value)
  }
}

onMounted(() => {
  const root = containerRef.value
  if (!root) return

  observer = new IntersectionObserver(
    entries => {
      // pick the entry with highest intersectionRatio
      let bestIndex = currentIndex.value
      let bestRatio = 0
      entries.forEach(entry => {
        const el = entry.target as HTMLElement
        const ratio = entry.intersectionRatio
        if (ratio > bestRatio) {
          bestRatio = ratio
          const idx = Number(el.dataset.index)
          if (!Number.isNaN(idx)) bestIndex = idx
        }
      })
      currentIndex.value = bestIndex
    },
    { root, threshold: [0.25, 0.5, 0.75] }
  )

  const items = root.querySelectorAll<HTMLElement>('.exp-item')
  items.forEach(el => observer?.observe(el))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div class="space-y-4 pt-2">
    <div class="relative">
      <div ref="containerRef" class="exp-carousel overflow-y-auto snap-y snap-mandatory scroll-smooth max-h-64 lg:max-h-80 touch-pan-y">
        <div
          v-for="(exp, idx) in props.items"
          :key="idx"
          class="exp-item snap-start pl-4 pr-4 py-4 h-64 lg:h-80"
          :data-index="idx"
        >
          <div :class="exp.tag ? 'border-l-2 border-primary-fixed-dim pl-4' : 'border-l-2 border-outline-variant pl-4'">
            <div class="flex justify-between items-start">
              <div class="flex-1">
                <h4 class="text-body-sm font-bold">{{ exp.title }}</h4>
                <div class="flex items-center justify-between gap-4">
                  <span class="text-label-sm text-primary-fixed-dim font-semibold">{{ exp.company }}</span>
                  <span class="text-label-sm text-primary-fixed-dim opacity-80">{{ exp.years ?? '' }}</span>
                </div>
              </div>
              <div v-if="exp.tag" class="ml-4 shrink-0 bg-primary-fixed-dim text-background px-2 text-label-sm font-bold">{{ exp.tag }}</div>
            </div>
            <div v-if="exp.bullets" class="mt-2 space-y-1">
              <p v-for="(b, i) in exp.bullets" :key="i" class="text-body-sm opacity-80">{{ b }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- controls -->
      <div class="absolute top-2 right-2 flex gap-2">
        <button @click="prev" :disabled="currentIndex===0" aria-label="Previous" class="px-2 py-1 border border-outline-variant text-label-sm">‹</button>
        <button @click="next" :disabled="currentIndex===props.items.length-1" aria-label="Next" class="px-2 py-1 border border-outline-variant text-label-sm">›</button>
      </div>
    </div>

    <div class="flex items-center justify-center gap-3">
      <div class="text-label-sm opacity-70">{{ currentIndex + 1 }} / {{ props.items.length }}</div>
      <div class="flex gap-1">
        <button
          v-for="(_, i) in props.items"
          :key="i"
          @click="scrollToIndex(i)"
          :aria-label="`Go to item ${i+1}`"
          :class="['w-2 h-2 rounded-full', currentIndex === i ? 'bg-primary-fixed-dim' : 'bg-primary-fixed-dim/20']"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.exp-carousel { -webkit-overflow-scrolling: touch; }
.exp-item { scroll-snap-align: start; }
.exp-item:focus { outline: none; }
</style>
