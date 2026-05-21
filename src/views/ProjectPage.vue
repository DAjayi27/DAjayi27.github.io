<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const id = route.params.id as string || ''
const title = id.replace(/-/g, ' ').toUpperCase()

function goBack() {
  router.back()
}
</script>

<template>
  <div class="w-full h-full flex flex-col p-margin-desktop">
    <div class="flex-1 flex flex-col justify-center items-center">
      <h2 class="text-headline-lg font-headline-lg text-[var(--color-surface-tint)]">{{ title }}</h2>
      <p class="text-body-md mt-4">Project page for {{ title }} — replace with real content.</p>
    </div>
    <div class="pt-4">
      <button @click="goBack" class="px-4 py-2 border border-[var(--color-surface-tint)] text-[var(--color-surface-tint)]">Back</button>
    </div>
  </div>
</template>

<style scoped>
</style>

