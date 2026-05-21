<script setup lang="ts">
  import TerminalInput from '@/components/terminal/terminal-input.vue'
  import TerminalOutput from '@/components/terminal/terminal-output.vue'
  import { onMounted, ref } from 'vue'
  import Card from '@/components/terminal/Card.vue'
  import { Command, isValidCommand } from '@/components/terminal/cli-controller.ts'

  const terminalOutputList = ref<string[]>([])
  const showPanel = ref(false);


  function log(command:string,output: string) {
    // use actual characters instead of HTML entities — the content is rendered as text
    const dirText = `C:\\> ${command}\n${output}`

    terminalOutputList.value.push(dirText)
  }

  function handleCommand(command: string) {
    debugger;
    const uCommand = command.toUpperCase()

    if (!isValidCommand(uCommand)) {
      log(command, 'Invalid command received')
      return
    }

    const cmd = uCommand as Command

    switch (cmd) {
      case Command.HELP:
        log(command, 'Available commands: help, clear, about, projects, contact')
        break
      case Command.CLEAR:
        // clear the visible terminal output
        terminalOutputList.value = []
          showPanel.value = false;
        break
      case Command.ABOUT:
        log(command, 'About command received')
        break
      case Command.PROJECTS:
        log(command, 'Projects command received')
        break
      case Command.CONTACT:
        log(command, 'Contact command received')
        break
      case Command.HOME:
        showPanel.value = true;
        break
      default:
        log(command, 'Invalid command received');
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

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8" v-if="showPanel">
      <Card title="PROJECTS.EXE" size="&lt;DIR&gt;" date="10-12-94" tag="DIR" icon="folder" access="[ ACCESS: READ/WRITE ]" />
      <Card title="ABOUT.TXT" size="4.2 KB" date="05-22-94" tag="FILE" icon="description" access="[ ACCESS: READ ONLY ]" />
      <Card title="CONTACT.SYS" size="128 B" date="08-15-94" tag="SYS" icon="settings_input_component" access="[ ACCESS: SYSTEM ]" />
      <Card title="RESUME.DOC" size="25.0 KB" date="11-01-94" tag="FILE" icon="article" access="[ ACCESS: READ/WRITE ]" />
    </div>

  </main>
</template>

<style scoped>

</style>