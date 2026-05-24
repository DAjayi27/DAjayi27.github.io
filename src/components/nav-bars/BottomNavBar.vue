<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  try {
    router.push({ name: 'home' })
  } catch (e) {
    try {
      window.location.href = '/'
    } catch (ignored) {}
  }
}

function onKeyDown(e: KeyboardEvent) {

  if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
    e.preventDefault()
    goBack()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
})

</script>

<template>
  <nav class="fixed bottom-0 left-0 w-full flex items-stretch justify-start h-12 overflow-x-auto bg-background border-t-2 border-primary-fixed-dim z-50">
    <!-- F1 HELP -->
    <div class="text-primary-fixed-dim px-4 py-1 border-r border-outline-variant flex items-center gap-2 hover:bg-primary-container hover:text-on-primary-container cursor-pointer transition-all duration-75 brightness-150">
      <span class="material-symbols-outlined text-sm" data-icon="help">help</span>
      <span class="text-label-md font-label-md">F1 HELP</span>
    </div>
    <!-- F2 DIR (Active State) -->
    <div class="bg-primary-fixed-dim text-on-primary-fixed px-4 py-1 font-bold flex items-center gap-2 scale-95 transition-transform duration-100 cursor-pointer">
      <span class="material-symbols-outlined text-sm" data-icon="folder_open">folder_open</span>
      <span class="text-label-md font-label-md">F2 DIR</span>
    </div>
    <!-- F3 CLEAR -->
    <div class="text-primary-fixed-dim px-4 py-1 border-r border-outline-variant flex items-center gap-2 hover:bg-primary-container hover:text-on-primary-container cursor-pointer">
      <span class="material-symbols-outlined text-sm" data-icon="delete_sweep">delete_sweep</span>
      <span class="text-label-md font-label-md">F3 CLEAR</span>
    </div>
    <!-- BACK -->
    <div
      class="text-primary-fixed-dim px-4 py-1 border-r border-outline-variant flex items-center gap-2 hover:bg-primary-container hover:text-on-primary-container cursor-pointer"
      role="button"
      tabindex="0"
      title="CTRL/CMD + C — Back"
      @click="goBack"
    >
      <!-- use an arrow_back icon which better represents navigation/back -->
      <span class="material-symbols-outlined text-sm" data-icon="arrow_back">arrow_back</span>
      <span class="text-label-md font-label-md">CTRL-C Back</span>
    </div>
    <!-- Spacer -->
    <div class="grow border-r border-outline-variant"></div>
    <!-- F10 EXIT -->
    <div class="text-primary-fixed-dim px-4 py-1 flex items-center gap-2 hover:bg-primary-container hover:text-on-primary-container cursor-pointer">
      <span class="material-symbols-outlined text-sm" data-icon="power_settings_new">power_settings_new</span>
      <span class="text-label-md font-label-md">F10 EXIT</span>
    </div>
  </nav>
</template>

<style scoped>

</style>