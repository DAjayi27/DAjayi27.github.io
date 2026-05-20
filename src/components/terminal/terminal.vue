<script setup lang="ts">
  import TerminalInput from '@/components/terminal/terminal-input.vue'

  function handleCommand(input:string) {
    debugger;
  }


</script>

<template>

  <main class="w-full p-margin-desktop overflow-y-auto relative flex flex-col gap-4">

    <!-- Boot Sequence Simulation -->
    <div class="space-y-1">
      <p class="text-body-md font-body-md glow-text">DARA-BIOS (C) 1994 DARA CORP.</p>
      <p class="text-body-md font-body-md">CPU: D-ARCH 80486DX @ 66MHz</p>
      <p class="text-body-md font-body-md">MEMORY TEST: 640KB OK</p>
      <p class="text-body-md font-body-md">HARD DISK: C: [420MB] ACTIVE</p>
      <p class="text-body-md font-body-md text-on-tertiary-container bg-primary-fixed-dim inline-block px-1">SYSTEM BOOT SUCCESSFUL</p>
    </div>
    <!-- Terminal Output -->
    <div class="mt-4 space-y-1">
      <p class="text-body-md font-body-md">DARA OS V1.0 - KERNEL LOADED AT 0x00400000</p>
      <p class="text-body-md font-body-md">WELCOME TO THE DARA INTERACTIVE ENVIRONMENT</p>
      <p class="text-body-md font-body-md">TYPE 'HELP' FOR COMMAND LISTING</p>
    </div>

    <TerminalInput @submit="handleCommand" />

  </main>
</template>

<style scoped>

</style>