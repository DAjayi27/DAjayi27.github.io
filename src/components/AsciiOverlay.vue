<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref, useTemplateRef} from 'vue'

const emits = defineEmits<{
  done: []
}>()

const container = useTemplateRef("container")
const visible = ref(true)
const isAnimatingOut = ref(false)
const currentGlyph = ref(0)
const tickerInterval = ref<number | null>(null)

type Glyph = string[]

const glyphs: Glyph[] = [
  [
    'DDDD ',
    'D   D',
    'D   D',
    'D   D',
    'DDDD ',
  ],
  [
    ' AAA ',
    'A   A',
    'AAAAA',
    'A   A',
    'A   A',
  ],
  [
    'RRRR ',
    'R   R',
    'RRRR ',
    'R  R ',
    'R   R',
  ],
  [
    ' AAA ',
    'A   A',
    'AAAAA',
    'A   A',
    'A   A',
  ],
  [
    '     ',
    '     ',
    '     ',
    '     ',
    '     ',
  ],
  [
    ' OOO ',
    'O   O',
    'O   O',
    'O   O',
    ' OOO ',
  ],
  [
    ' SSSS',
    'S    ',
    ' SSS ',
    '    S',
    'SSSS ',
  ],
]

const rows = glyphs[0]!.length

const displayedArt = computed(() =>
  Array.from({ length: rows }, (_, row) =>
    glyphs
      .slice(0, currentGlyph.value)
      .map(glyph => glyph[row])
      .join('  '),
  ).join('\n'),
)

const startTypewriter = () => {
  const msPerGlyph = 250

  tickerInterval.value = window.setInterval(() => {
    if (currentGlyph.value < glyphs.length) {
      currentGlyph.value++
      return
    }

    if (tickerInterval.value) {
      clearInterval(tickerInterval.value)
      tickerInterval.value = null
    }

    isAnimatingOut.value = true
    container.value?.classList.add('animation-out')
  }, msPerGlyph)
}

const handleAnimationEnd = () => {
  visible.value = false
  emits('done')
}

onMounted(() => {
  startTypewriter()
})

onUnmounted(() => {
  if (tickerInterval.value) clearInterval(tickerInterval.value)
})
</script>

<template>
  <div
    v-if="visible"
    ref="container"
    :class="'ascii-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/60'"
    @animationend="handleAnimationEnd"
  >
    <div class="ascii-box text-(--color-surface-tint)">
      <pre class="ascii-pre whitespace-pre text-xl">{{ displayedArt }}</pre>
    </div>
  </div>
</template>

<style scoped>
.ascii-overlay {
  pointer-events: auto;
}

.animation-out{
  animation: ascii-fade 700ms ease-out forwards;
}

.ascii-box {
  max-width: 90%;
  max-height: 60%;
  overflow: hidden;
}

.ascii-pre {
  font-family: var(--font-label-md);
  line-height: 1;
}

@keyframes ascii-fade {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
</style>