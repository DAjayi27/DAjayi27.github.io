<script setup lang="ts">
import {defineProps, defineEmits, onMounted, ref, nextTick, useTemplateRef} from 'vue'

const emits = defineEmits<{
  done:[]
}>();

const visible = ref(true)
const container =  useTemplateRef("container");

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
  const msPerColumn = 40

  tickerInterval = window.setInterval(() => {

    if (currentColumn <= maxCols) {
      displayedArt.value = lines
          .map(line => line.slice(0, currentColumn))
          .join('\n')

      currentColumn++
    } else {
      if (tickerInterval) clearInterval(tickerInterval)
      container.value?.classList.add('animation-out');
    }
  }, msPerColumn)
}

onMounted(() => {
  startTypewriter()
})
</script>

<template>
  <div v-if="visible" ref="container" class="ascii-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/60">
    <div class="ascii-box text-[var(--color-surface-tint)]">
      <!-- Binding to the processed displayedArt ref instead of raw template string -->
      <pre class="ascii-pre whitespace-pre">{{ displayedArt }}</pre>
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
  box-shadow: 0 0 30px rgba(0,230,57,0.16);
}
.ascii-pre {
  font-family: ui-monospace, SFMono-Regular, monospace;
  line-height: 1;
  font-size: 12px;
}

@keyframes ascii-fade {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
</style>