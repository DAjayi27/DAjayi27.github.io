<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'

const emit = defineEmits<{
  done: []
}>()

const lines = ref<string[]>([])
const currentLineIndex = ref(0)
const isComplete = ref(false)

// Boot lines to be typed (retro DOS/BIOS feel)
const bootSequence = [
  'DARA-BIOS (C) 1994 DARA CORP.',
  'CPU: D-ARCH 80486DX @ 66MHz',
  'MEMORY TEST: 640KB OK',
  'HARD DISK: C: [420MB] ACTIVE',
  '',
  'DARA OS V1.0',
  'STARTING KERNEL...',
  'KERNEL LOADED AT 0x00400000',
  'INITIALIZING DRIVERS',
  'LOADING FILE SYSTEM',
  '',
  'SYSTEM BOOT SUCCESSFUL',
  '',
  'WELCOME TO DARA INTERACTIVE ENVIRONMENT',
  "TYPE 'HELP' FOR COMMAND LISTING",
]

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

async function typeCharacter(line: string) {
  // add a new line entry
  lines.value.push('')
  let idx = lines.value.length - 1

  for (let i = 0; i < line.length; i++) {
    lines.value[idx] = (lines.value[idx] ?? '') + line[i]
    await wait(30)
  }

  // pause after each line
  await wait(150)
}

async function runBootSequence() {
  for (const line of bootSequence) {
    await typeCharacter(line)
    await nextTick()
  }

   // pause before finishing
   await wait(500)

   isComplete.value = true
   // fade out animation by emitting done after a slight delay
   await wait(800)
   emit('done')
}

onMounted(() => {
  runBootSequence().catch(err => {
    console.warn('Boot sequence error', err)
    emit('done')
  })
})
</script>

<template>
  <div
    class="fixed inset-0 z-9999 bg-black flex items-center justify-center overflow-hidden transition-opacity duration-500"
    :class="{ 'opacity-0 pointer-events-none': isComplete }"
  >
    <!-- CRT Monitor Effect Container -->
    <div class="w-full h-full max-w-4xl max-h-96 relative p-6 bg-black border-4 border-gray-800 shadow-2xl" style="font-family: 'Cascadia Code', 'IBM Plex Mono', monospace">
      <!-- Screen Bezel Effect -->
      <div class="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-transparent to-black/20 opacity-30"></div>

      <!-- Boot Text Container -->
      <div class="relative z-10 h-full overflow-hidden">
        <div class="space-y-1">
          <div
            v-for="(line, idx) in lines"
            :key="idx"
            class="text-green-400 text-sm md:text-base font-mono min-h-6"
            :style="{
              textShadow: '0 0 10px rgba(34, 197, 94, 0.5)',
              animation: idx === lines.length - 1 ? 'cursor-blink 1s infinite' : 'none'
            }"
          >
            {{ line }}<span v-if="idx === lines.length - 1" class="inline-block w-2 h-5 bg-green-400"></span>
          </div>
        </div>
      </div>

      <!-- Scanline Effect -->
      <div class="absolute inset-0 pointer-events-none bg-repeat opacity-5" style="background-image: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        black 2px,
        black 4px
      )"></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes cursor-blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

/* CRT flicker effect (subtle) */
@keyframes crt-flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    opacity: 0.98;
  }
  20%, 24%, 55% {
    opacity: 0.95;
  }
}
</style>





