<script setup lang="ts">
  import TopNavBar from '@/components/nav-bars/TopNavbar.vue'
  import BottomNavBar from '@/components/nav-bars/BottomNavBar.vue'
   import BootAnimation from '@/components/BootAnimation.vue'
  import AsciiOverlay from '@/components/AsciiOverlay.vue'
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useRouter } from 'vue-router'

  const showAscii = ref(false)
   const showBootAnimation = ref(false)

  const router = useRouter()
  router.beforeEach((to, from, next) => {
    if (to.fullPath !== from.fullPath) showAscii.value = true
    next()
  })


  onMounted(() => {
    // Check if boot animation has already been shown
    try {
      const bootShown = localStorage.getItem('bootAnimationShown')
      if (!bootShown) {
        showBootAnimation.value = true
        localStorage.setItem('bootAnimationShown', '1')
      }
    } catch (e) {
      console.warn('Failed to check boot animation state', e)
    }
  })

  onUnmounted(() => {
  })
</script>

<template>

  <main class="grid w-full h-screen grid-rows-[4rem_1fr_3rem]">

    <BootAnimation v-if="showBootAnimation" @done="showBootAnimation = false" />

    <top-nav-bar />
    <AsciiOverlay v-if="showAscii" @done="showAscii = false" />
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

