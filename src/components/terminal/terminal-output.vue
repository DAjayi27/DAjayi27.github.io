<script setup lang="ts">
defineProps<{
  content: string
}>()
</script>

<template>
  <p class="text-body-md font-body-md glow-text whitespace-pre-wrap">
    {{ content }}
  </p>
</template>

