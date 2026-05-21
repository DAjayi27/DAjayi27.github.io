<script setup lang="ts">
  import TopNavBar from '@/components/nav-bars/TopNavbar.vue'
  import BottomNavBar from '@/components/nav-bars/BottomNavBar.vue'

  import AsciiOverlay from '@/components/AsciiOverlay.vue'
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useRouter } from 'vue-router'

  const showAscii = ref(false)


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
    <AsciiOverlay  @done="showAscii = false" />
    <transition name="os-transition" mode="out-in">
      <router-view />
    </transition>
    <bottom-nav-bar />



  </main>

</template>

<style scoped></style>

<style>



@keyframes os-flash {
  0% { opacity: 0.0 }
  30% { opacity: 0.85 }
  100% { opacity: 0 }
}
</style>

