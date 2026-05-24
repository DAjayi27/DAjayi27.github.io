<script setup lang="ts">
  import TerminalInput from '@/components/terminal/terminal-input.vue'
  import TerminalOutput from '@/components/terminal/terminal-output.vue'
  import {nextTick, onBeforeMount, onMounted, ref} from 'vue'
  import Card from '@/components/terminal/Card.vue'
  import { useRouter } from 'vue-router'
  import { Command, isValidCommand } from '@/components/terminal/cli-controller.ts'


  const HISTORY_STACK_SIZE = 10;

  const terminalOutputList = ref<string[]>([])
  const historyStack = ref<string[]>([])
  const showPanel = ref(false);
  const router = useRouter();


  function pushHistory(command: string) {
    if (historyStack.value.length < HISTORY_STACK_SIZE) {
      historyStack.value.push(command);
    } else {
      historyStack.value = historyStack.value.slice(1);
      historyStack.value.push(command);
    }
  }

  async function log(command:string,output: string) {
    const dirText = `C:\\> ${command}\n${output}`

    terminalOutputList.value.push(dirText)
    pushHistory(command);

    await nextTick();
  }

  function donwloadResume(){}

  function handleChangeCommand(originalText:string,args: string[]):void  {

    if (args.length > 1) {
      log(originalText,"too many args passed to cd");
      return;
    }

    let directory = args[0] ?? "";

    let validDirectories = ["about","projects","contact"];

    if (!validDirectories.includes(directory)) {
      log(originalText,`invalid directory ${directory}. valid directories are about, projects, and contact`);
      return;
    }

    router.push({name:directory});



  }

  function handleCommand(command: string) {

    command = command.toLowerCase();

    const cmd = command.split(' ')[0] ?? "";

    const args = command.split(' ').slice(1);


    if (!isValidCommand(cmd)) {
      log(command, 'Invalid command received')
      return
    }

    switch (cmd) {

      case Command.HELP :
      case Command.QUESTION:
        log(command, 'Available commands: help, clear, cd, resdump')
      break

      case Command.CLEAR:
        terminalOutputList.value = []
        pushHistory(command);
        showPanel.value = false;
      break

      case Command.HOME:
        pushHistory(command);
        showPanel.value = true;
      break

      case Command.CD:
        handleChangeCommand(command,args);
        pushHistory(command);
      break;

      case Command.DUMP:
        pushHistory(command);
        donwloadResume();
      break;

      default:
        log(command, 'Invalid command received');
    }

    console.log(`Running command: ${command}`)
  }



  router.beforeEach((to, from, next) => {
    try {
      localStorage.setItem("historyStack", JSON.stringify(historyStack.value));
      localStorage.setItem("terminalOutputList", JSON.stringify(terminalOutputList.value));
    } catch (e) {
      console.warn('Failed to persist terminal state', e)
    }

    next()
  })


  onMounted(() => {
  })

  onBeforeMount(() => {
    try {
      const rawHistory = localStorage.getItem("historyStack")
      historyStack.value = rawHistory ? JSON.parse(rawHistory) : []
    } catch (e) {
      historyStack.value = []
    }

    try {
      const rawOutput = localStorage.getItem("terminalOutputList")
      terminalOutputList.value = rawOutput ? JSON.parse(rawOutput) : []
    } catch (e) {
      terminalOutputList.value = []
    }

    try {
      const last = historyStack.value.length ? String(historyStack.value[historyStack.value.length - 1]).toLowerCase() : ''
      if (last === 'home') showPanel.value = true
    } catch (e) {
    }
  })


</script>

<template>

  <main class="w-full p-margin-desktop overflow-y-scroll relative flex flex-col gap-4">

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
      <TerminalOutput content="TYPE 'HELP' OR '?' FOR COMMAND LISTING" />
    </div>

    <!-- Terminal Output -->
    <div class="flex flex-col gap-4">
      <TerminalOutput
        v-for="(item, index) in terminalOutputList"
        :key="index"
        :content="item"
      />
    </div>

    <TerminalInput @submit="handleCommand" :historyStack="historyStack" />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8" v-if="showPanel">

      <router-link to="/project">
        <Card title="PROJECTS.EXE" size="&lt;DIR&gt;" date="10-12-94" tag="DIR" icon="folder" access="[ ACCESS: READ/WRITE ]" />
      </router-link>

      <router-link to="/about">
        <Card title="ABOUT.TXT" size="4.2 KB" date="05-22-94" tag="FILE" icon="description" access="[ ACCESS: READ ONLY ]"/>
      </router-link>

      <router-link to="/contact">
        <Card title="CONTACT.SYS" size="128 B" date="08-15-94" tag="SYS" icon="settings_input_component" access="[ ACCESS: SYSTEM ]"/>
      </router-link>


      <Card title="RESUME.DOC" size="25.0 KB" date="11-01-94" tag="FILE" icon="article" access="[ ACCESS: READ/WRITE ]"/>


    </div>

  </main>
</template>

<style scoped>

</style>