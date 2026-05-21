<script setup lang="ts">
import { defineProps, defineEmits, onMounted, ref } from 'vue'

const props = defineProps<{ ascii?: string }>()
const emits = defineEmits(['done'])
const visible = ref(true)

onMounted(() => {
  // Auto-hide after animation duration (match CSS animation-duration)
  setTimeout(() => {
    visible.value = false
    emits('done')
  }, 700)
})
</script>

<template>
  <div v-if="visible" class="ascii-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/60">
    <div class="ascii-box p-4 border border-[var(--color-surface-tint)] text-[var(--color-surface-tint)]">
      <pre class="ascii-pre whitespace-pre-wrap">{{ props.ascii }}</pre>
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
  animation: ascii-fade 700ms ease-in-out;
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
