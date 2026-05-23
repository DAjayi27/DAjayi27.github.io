<script setup lang="ts">
const props = defineProps<{ ascii?: string }>()
</script>

<template>
  <pre class="ascii-art text-primary-fixed-dim mb-6 opacity-60">{{ props.ascii ?? defaultAscii }}</pre>
</template>

<script lang="ts">
const defaultAscii = `____________________________________________________________________________________________________
|                                                                                                  |
|   DDDD     AAA    RRRR    AAA           OOOO    SSSS                                             |
|   D   D   A   A   R   R  A   A         O    O  S                                                 |
|   D   D   AAAAA   RRRR   AAAAA  _____  O    O   SSS                                              |
|   D   D   A   A   R  R   A   A         O    O      S                                             |
|   DDDD    A   A   R   R  A   A          OOOO   SSSS                                              |
|__________________________________________________________________________________________________|`
</script>

<style scoped>
</style>
