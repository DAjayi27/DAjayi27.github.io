<script setup lang="ts">
  import TopNavBar from '@/components/nav-bars/TopNavbar.vue'
  import BottomNavBar from '@/components/nav-bars/BottomNavBar.vue'
  import Terminal from "@/components/terminal/terminal.vue";
</script>

<template>

  <main class="grid w-full h-screen grid-rows-[4rem_1fr_3rem]">

    <top-nav-bar></top-nav-bar>
    <terminal></terminal>
    <bottom-nav-bar></bottom-nav-bar>

  </main>

</template>

<style scoped></style>
