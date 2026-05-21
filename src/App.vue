<script setup lang="ts">
  import TopNavBar from '@/components/nav-bars/TopNavbar.vue'
  import BottomNavBar from '@/components/nav-bars/BottomNavBar.vue'

  import AsciiOverlay from '@/components/AsciiOverlay.vue'
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useRouter } from 'vue-router'

  const showAscii = ref(false)
  const asciiArt = `
DDDD   AAA   RRRR   AAA      0000   SSSS
D   D A   A  R   R  A   A   0    0  S
D   D AAAAA  RRRR   AAAAA   0    0   SSS
D   D A   A  R  R   A   A   0    0      S
DDDD  A   A  R   R  A   A    0000   SSSS`

  const router = useRouter()
  let removeBefore: (() => void) | null = null
  let removeAfter: (() => void) | null = null

  onMounted(() => {
    const before = router.beforeEach((to, from, next) => {
      // show overlay for route transitions (except same route)
      if (to.fullPath !== from.fullPath) showAscii.value = true
      next()
    })

    const after = router.afterEach(() => {
      // hide after a short delay to allow animation (AsciiOverlay auto-hides as well)
      setTimeout(() => { showAscii.value = false }, 70000)
    })

    removeBefore = () => { before() }
    removeAfter = () => { after() }
  })

  onUnmounted(() => {
    if (removeBefore) removeBefore()
    if (removeAfter) removeAfter()
  })
</script>

<template>

  <main class="grid w-full h-screen grid-rows-[4rem_1fr_3rem]">

    <top-nav-bar />
    <transition name="os-transition" mode="out-in">
      <router-view />
    </transition>
    <bottom-nav-bar />

    <AsciiOverlay v-if="showAscii" :ascii="asciiArt" @done="showAscii = false" />

  </main>

</template>

<style scoped></style>

<style>

.os-transition-enter-active, .os-transition-leave-active {
  transition: opacity .28s ease, transform .28s ease;
}
.os-transition-enter-from, .os-transition-leave-to {
  opacity: 0;
  transform: scale(.995);
}
.os-transition-enter-to, .os-transition-leave-from {
  opacity: 1;
  transform: scale(1);
}


.os-transition-enter-active::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(0deg, rgba(0,230,57,0.06), rgba(0,230,57,0.02));
  mix-blend-mode: screen;
  animation: os-flash 58s linear;
}

@keyframes os-flash {
  0% { opacity: 0.0 }
  30% { opacity: 0.85 }
  100% { opacity: 0 }
}
</style>

