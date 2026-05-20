<script setup lang="ts">
  import TerminalInput from '@/components/terminal/terminal-input.vue'
  import TerminalOutput from '@/components/terminal/terminal-output.vue'
  import { onMounted, ref } from 'vue'

  const terminalOutputList = ref<string[]>([])


  function log(command:string,output: string) {
    // use actual characters instead of HTML entities — the content is rendered as text
    const dirText = `C:\\> ${command}\n${output}`

    terminalOutputList.value.push(dirText)
  }

  function handleCommand(command: string) {

    debugger;
    const uCommand = command.toUpperCase()

    switch (uCommand) {
      case 'HELP':
        log(command,'Available commands: HELP, CLEAR, ABOUT, PROJECTS, CONTACT')
        break
      case 'CLEAR':
        // clear the visible terminal output
        terminalOutputList.value = []
        break
      case 'ABOUT':
        log(command,'About command received')
        break
      case 'PROJECTS':
        log(command,'Projects command received')
        break
      case 'CONTACT':
        log(command,'Contact command received')
        break
      default:
        log(command,'Invalid command received')
    }

    console.log(`Running command: ${command}`)
  }

  onMounted(() => {

  })


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
      <TerminalOutput content="DARA OS V1.0 - KERNEL LOADED AT 0x00400000" />
      <TerminalOutput content="WELCOME TO THE DARA INTERACTIVE ENVIRONMENT" />
      <TerminalOutput content="TYPE 'HELP' FOR COMMAND LISTING" />
    </div>

    <!-- Terminal Output -->
    <div class="flex flex-col gap-4">
      <TerminalOutput
        v-for="(item, index) in terminalOutputList"
        :key="index"
        :content="item"
      />
    </div>

    <TerminalInput @submit="handleCommand" />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mt-8">
      <!-- PROJECTS.EXE -->
      <div class="group border-2 border-primary bg-black p-4 flex flex-col gap-4 cursor-pointer transition-all duration-75 hover:brightness-150 hover:shadow-[0_0_15px_rgba(0,255,65,0.4)]">
        <div class="flex justify-between items-start">
          <span class="material-symbols-outlined text-4xl" data-icon="folder" style='font-variation-settings: "FILL" 1;'>folder</span>
          <span class="text-label-sm px-2 border border-primary">DIR</span>
        </div>
        <div>
          <h3 class="text-headline-md font-bold leading-none break-all text-primary">PROJECTS.EXE</h3>
          <p class="text-label-md mt-2 opacity-80 text-primary">Size: &lt;DIR&gt;</p>
          <p class="text-label-md opacity-80 text-primary">Date: 10-12-94</p>
        </div>
        <div class="mt-auto pt-4 border-t border-dotted border-primary text-label-sm text-primary">
          [ ACCESS: READ/WRITE ]
        </div>
      </div>
      <!-- ABOUT.TXT -->
      <div class="group border-2 border-primary bg-black p-4 flex flex-col gap-4 cursor-pointer transition-all duration-75 hover:brightness-150 hover:shadow-[0_0_15px_rgba(0,255,65,0.4)]">
        <div class="flex justify-between items-start">
          <span class="material-symbols-outlined text-4xl" data-icon="description">description</span>
          <span class="text-label-sm px-2 border border-primary">FILE</span>
        </div>
        <div>
          <h3 class="text-headline-md font-bold leading-none break-all text-primary">ABOUT.TXT</h3>
          <p class="text-label-md mt-2 opacity-80 text-primary">Size: 4.2 KB</p>
          <p class="text-label-md opacity-80 text-primary">Date: 05-22-94</p>
        </div>
        <div class="mt-auto pt-4 border-t border-dotted border-primary text-label-sm text-primary">
          [ ACCESS: READ ONLY ]
        </div>
      </div>
      <!-- CONTACT.SYS -->
      <div class="group border-2 border-primary bg-black p-4 flex flex-col gap-4 cursor-pointer transition-all duration-75 hover:brightness-150 hover:shadow-[0_0_15px_rgba(0,255,65,0.4)]">
        <div class="flex justify-between items-start">
          <span class="material-symbols-outlined text-4xl" data-icon="settings_input_component">settings_input_component</span>
          <span class="text-label-sm px-2 border border-primary">SYS</span>
        </div>
        <div>
          <h3 class="text-headline-md font-bold leading-none break-all text-primary">CONTACT.SYS</h3>
          <p class="text-label-md mt-2 opacity-80 text-primary">Size: 128 B</p>
          <p class="text-label-md opacity-80 text-primary">Date: 08-15-94</p>
        </div>
        <div class="mt-auto pt-4 border-t border-dotted border-primary text-label-sm text-primary">
          [ ACCESS: SYSTEM ]
        </div>
      </div>
      <!-- RESUME.DOC -->
      <div class="group border-2 border-primary bg-black p-4 flex flex-col gap-4 cursor-pointer transition-all duration-75 hover:brightness-150 hover:shadow-[0_0_15px_rgba(0,255,65,0.4)]">
        <div class="flex justify-between items-start">
          <span class="material-symbols-outlined text-4xl" data-icon="article">article</span>
          <span class="text-label-sm px-2 border border-primary">FILE</span>
        </div>
        <div>
          <h3 class="text-headline-md font-bold leading-none break-all text-primary">RESUME.DOC</h3>
          <p class="text-label-md mt-2 opacity-80 text-primary">Size: 25.0 KB</p>
          <p class="text-label-md opacity-80 text-primary">Date: 11-01-94</p>
        </div>
        <div class="mt-auto pt-4 border-t border-dotted border-primary text-label-sm text-primary">
          [ ACCESS: READ/WRITE ]
        </div>
      </div>
    </div>

  </main>
</template>

<style scoped>

</style>