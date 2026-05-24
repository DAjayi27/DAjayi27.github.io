<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

const emits = defineEmits<{ done: [] }>()

const visible = ref(true)
const phase = ref<'boot' | 'ready' | 'fade'>('boot')
const bootStep = ref(0)

let stepFunction: number | undefined
let readyFunction: number | undefined
let fadeFunction: number | undefined

const bootLines = [
  'POWERING DISPLAY ADAPTER...',
  'MOUNTING /SYS/CORE...',
  'CHECKING MEMORY BANKS...',
  'SYNCING TERMINAL SHELL...',
  'STARTING INTERFACE...',
]

const logo = [
  '╔══════════════════════╗',
  '║       DARA OS        ║',
  '╚══════════════════════╝',
]

const bootStepTimer: number | undefined = 50;
const fadeTimer: number | undefined = 650;
const readyTimer: number | undefined = 900;

const displayedSteps = computed(() => bootLines.slice(0, bootStep.value))

function finish() {
  visible.value = false
  emits('done')
}

onMounted(() => {
  stepFunction = window.setInterval(() => {
    bootStep.value = Math.min(bootLines.length, bootStep.value + 1)
    if (bootStep.value >= bootLines.length) {
      if (stepFunction) window.clearInterval(stepFunction)
      stepFunction = undefined

      phase.value = 'ready'
      readyFunction = window.setTimeout(() => {
        phase.value = 'fade'
        fadeFunction = window.setTimeout(finish, fadeTimer)
      }, readyTimer)
    }
  }, bootStepTimer)
})

onUnmounted(() => {
  if (stepFunction) window.clearInterval(stepFunction)
  if (readyFunction) window.clearTimeout(readyFunction)
  if (fadeFunction) window.clearTimeout(fadeFunction)
})
</script>

<template>
  <div v-if="visible" class="ascii-overlay fixed inset-0 z-50 flex items-center justify-center">
    <div :class="'boot-shell'" :data-phase="phase">
      <div class="boot-header">
        <span class="boot-title">DARA OS :: ROUTE TRANSITION</span>
        <span class="boot-leds">
          <i></i><i></i><i></i>
        </span>
      </div>

      <pre class="boot-logo">{{ logo.join('\n') }}</pre>

      <div class="boot-status">
        <span class="cursor">&gt;</span>
        <span>INITIALIZING SYSTEM LINK</span>
      </div>

      <div class="boot-list">
        <div v-for="(line, idx) in displayedSteps" :key="idx" class="boot-line">
          <span class="boot-check">[OK]</span>
          <span>{{ line }}</span>
        </div>
        <div v-if="phase === 'boot' && bootStep < bootLines.length" class="boot-line pending">
          <span class="boot-check">[..]</span>
          <span>{{ bootLines[bootStep] ?? '...' }}</span>
        </div>
      </div>

      <div class="boot-progress">
        <div class="boot-progress-track">
          <div class="boot-progress-fill"></div>
        </div>
        <div class="boot-meta">LOADING INTERFACE MODULES</div>
      </div>

      <div class="boot-footer">
        <span>SCANLINES ACTIVE</span>
        <span>RENDER MODE: CRT</span>
        <span>STATUS: {{ phase === 'fade' ? 'HANDOFF' : 'BOOTING' }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ascii-overlay {
  pointer-events: none;
  background:
    radial-gradient(circle at center, rgba(0, 230, 57, 0.08), transparent 55%),
    linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.12) 50%),
    linear-gradient(90deg, rgba(255, 0, 0, 0.02), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.02)),
    rgba(0, 0, 0, 0.94);
  background-size: auto, 100% 3px, 3px 100%, auto;
}

.boot-shell {
  width: min(900px, 92vw);
  border: 2px solid var(--color-primary-fixed-dim);
  background: rgba(12, 8, 11, 0.94);
  color: var(--color-primary-fixed-dim);
  box-shadow: 0 0 34px rgba(0, 230, 57, 0.12), inset 0 0 24px rgba(0, 230, 57, 0.04);
  padding: 1.25rem;
  font-family: var(--font-label-md), monospace;
  transform-origin: center;
  animation: shell-in 280ms ease-out;
}

.boot-shell[data-phase='fade'] {
  animation: shell-out 650ms ease-in forwards;
}

.boot-header,
.boot-footer,
.boot-status,
.boot-progress,
.boot-line {
  display: flex;
  align-items: center;
}

.boot-header,
.boot-footer {
  justify-content: space-between;
  gap: 1rem;
}

.boot-title,
.boot-meta,
.boot-footer {
  color: var(--color-primary-fixed-dim);
  text-shadow: 0 0 8px rgba(0, 230, 57, 0.35);
}

.boot-leds { display: inline-flex; gap: 0.35rem; }
.boot-leds i {
  width: 0.65rem;
  height: 0.65rem;
  border: 1px solid var(--color-primary-fixed-dim);
  box-shadow: 0 0 10px rgba(0, 230, 57, 0.35);
  animation: led-pulse 900ms infinite ease-in-out;
}
.boot-leds i:nth-child(2) { animation-delay: 160ms; }
.boot-leds i:nth-child(3) { animation-delay: 320ms; }

.boot-logo {
  margin: 1.1rem 0 0.9rem;
  font-family: var(--font-headline-lg), monospace;
  font-size: clamp(0.7rem, 1.55vw, 1.1rem);
  line-height: 1;
  white-space: pre;
  text-shadow: 0 0 10px rgba(0, 230, 57, 0.42);
}

.boot-status {
  gap: 0.65rem;
  margin-bottom: 1rem;
  opacity: 0.95;
}

.cursor {
  display: inline-block;
  animation: blink 800ms steps(2, end) infinite;
}

.boot-list {
  display: grid;
  gap: 0.35rem;
  margin-bottom: 1rem;
}

.boot-line {
  gap: 0.7rem;
  opacity: 0;
  animation: line-in 220ms ease-out forwards;
}
.boot-line:nth-child(1) { animation-delay: 40ms; }
.boot-line:nth-child(2) { animation-delay: 80ms; }
.boot-line:nth-child(3) { animation-delay: 120ms; }
.boot-line:nth-child(4) { animation-delay: 160ms; }
.boot-line:nth-child(5) { animation-delay: 200ms; }

.boot-check {
  width: 2.6rem;
  color: var(--color-primary-container);
}

.pending {
  opacity: 0.65;
}

.boot-progress {
  flex-direction: column;
  align-items: stretch;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.boot-progress-track {
  height: 0.85rem;
  border: 1px solid var(--color-primary-fixed-dim);
  padding: 0.1rem;
  background: rgba(0, 0, 0, 0.35);
  overflow: hidden;
}

.boot-progress-fill {
  height: 100%;
  width: 100%;
  transform-origin: left;
  transform: scaleX(0);
  background: linear-gradient(90deg, var(--color-primary-fixed-dim), var(--color-primary-container));
  box-shadow: 0 0 12px rgba(0, 230, 57, 0.55);
  animation: fill 2.1s ease-out forwards;
}

.boot-meta {
  font-size: 0.75rem;
  letter-spacing: 0.12em;
}

.boot-footer {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  opacity: 0.75;
}

@keyframes fill {
  from { transform: scaleX(0.08); }
  to { transform: scaleX(1); }
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

@keyframes led-pulse {
  0%, 100% { opacity: 0.45; transform: scale(0.96); }
  50% { opacity: 1; transform: scale(1.05); }
}

@keyframes shell-in {
  from { opacity: 0; transform: scale(0.985) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

@keyframes shell-out {
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(1.01) translateY(-8px); }
}

@keyframes line-in {
  from { opacity: 0; transform: translateY(3px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>