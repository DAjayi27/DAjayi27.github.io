<script setup lang="ts">
import { defineProps, defineEmits, onMounted, ref, nextTick } from 'vue'

const emits = defineEmits(['done'])
const visible = ref(true)

const asciiArt = `
DDDD   AAA   RRRR   AAA      0000   SSSS
D   D A   A  R   R  A   A   0    0  S
D   D AAAAA  RRRR   AAAAA   0    0   SSS
D   D A   A  R  R   A   A   0    0      S
DDDD  A   A  R   R  A   A    0000   SSSS`

const lines = asciiArt.split('\n')
const maxCols = Math.max(...lines.map(line => line.length))

const displayedArt = ref('')
let currentColumn = 0
let tickerInterval: number | null = null

const startTypewriter = () => {
  const msPerColumn = 12

  tickerInterval = window.setInterval(() => {
    if (currentColumn <= maxCols) {
      // Reconstruct the ASCII block up to the current active column
      displayedArt.value = lines
          .map(line => line.slice(0, currentColumn))
          .join('\n')

      currentColumn++
    } else {
      if (tickerInterval) clearInterval(tickerInterval)
    }
  }, msPerColumn)
}

onMounted(() => {
  startTypewriter()

  setTimeout(() => {
    if (tickerInterval) clearInterval(tickerInterval)
    visible.value = false
    emits('done')
  }, 700) // Keeps your exact 700ms ascii-fade lifecycle intact
})
</script>

<template>
  <div v-if="visible" class="ascii-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/60">
    <div class="ascii-box p-4 border border-[var(--color-surface-tint)] text-[var(--color-surface-tint)]">
      <!-- Binding to the processed displayedArt ref instead of raw template string -->
      <pre class="ascii-pre whitespace-pre">{{ displayedArt }}</pre>
    </div>
  </div>
</template>

<style scoped>
.ascii-overlay {
  pointer-events: auto;
}
.ascii-box {
  max-width: 90%;
  max-height: 60%;
  overflow: hidden;
  animation: ascii-fade 700ms ease-in-out forwards;
  box-shadow: 0 0 30px rgba(0,230,57,0.16);
}
.ascii-pre {
  font-family: ui-monospace, SFMono-Regular, monospace;
  line-height: 1;
  font-size: 12px;
}

@keyframes ascii-fade {
  0% { opacity: 0; transform: scale(0.995) translateY(6px); filter: blur(2px); }
  30% { opacity: 1; transform: scale(1.0) translateY(0); filter: blur(0); }
  80% { opacity: 1; }
  100% { opacity: 0; transform: scale(1.01) translateY(-8px); }
}
</style>