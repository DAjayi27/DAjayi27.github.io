<script setup lang="ts">
import {ref, onMounted, onUnmounted, useTemplateRef} from 'vue'
import BioSection from '@/components/about/BioSection.vue'
import EducationSection from '@/components/about/EducationSection.vue'
import ExperienceSection from '@/components/about/ExperienceSection.vue'
import { bioData, educationItems, experienceItems } from '@/data/about'
import {useRouter} from "vue-router";

const flickerTimer = ref<number | undefined>(undefined)
const revealTimeouts: number[] = []

const mainRef = ref<HTMLElement | null>(null)

let main =  ref<string>("");

const ellipsis = useTemplateRef("ellipsis");
let ellipsisFuncRef:number;

const router = useRouter()

function handleShortcut(e: KeyboardEvent) {
  const lowerKey = e.key.toLowerCase()

  if (e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && lowerKey === 'c') {
    e.preventDefault()
    e.stopPropagation()
    document.removeEventListener('keydown', handleShortcut)
    router.push({ name: 'home' })
  }
}

onMounted(() => {
  flickerTimer.value = window.setInterval(() => {
    if (Math.random() > 0.99) {
      document.body.style.opacity = '0.9'
      const t = window.setTimeout(() => {
        document.body.style.opacity = '1'
      }, 50)
      revealTimeouts.push(t)
    }
  }, 100)

  if (mainRef.value) {
    const nodes = Array.from(mainRef.value.querySelectorAll('section, .ascii-art, img')) as HTMLElement[]
    nodes.forEach((el, index) => {
      // set initial state
      el.style.opacity = '0'
      el.style.transform = 'translateY(10px)'
      el.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out'
      const timeout = window.setTimeout(() => {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 120 + index * 100)
      revealTimeouts.push(timeout)
    })
  }

  ellipsisFuncRef = window.setInterval(() => {

    if (main.value != null){

      if (main.value.length < 6){
        main.value += ".";
      }
      else{
        main.value = "."
      }

    }

  },1000);

  document.addEventListener('keydown', handleShortcut)

})

onUnmounted(() => {
  if (flickerTimer.value) {
    window.clearInterval(flickerTimer.value)
  }
  revealTimeouts.forEach(t => window.clearTimeout(t))
  window.clearInterval(ellipsisFuncRef);
  document.removeEventListener('keydown', handleShortcut)
})

</script>

<template>

  <!-- Main Terminal Content -->
  <main ref="mainRef" class="flex-1 overflow-y-auto px-margin-desktop py-base relative custom-scrollbar">
    <div class="mx-auto w-full">
    <!-- Command Header -->
    <div class="mb-gutter text-body-md">
      <div class="mt-2 text-outline-variant">ACCESSING LOCAL STORAGE<span ref="ellipsis">{{main}}</span></div>
    </div>
    <!-- ASCII Divider -->
    <pre class="ascii-art text-primary-fixed-dim mb-6 opacity-60">____________________________________________________________________________________________________
|                                                                                                  |
|   DDDD     AAA    RRRR    AAA           OOOO    SSSS                                             |
|   D   D   A   A   R   R  A   A         O    O  S                                                 |
|   D   D   AAAAA   RRRR   AAAAA  _____  O    O   SSS                                              |
|   D   D   A   A   R  R   A   A         O    O      S                                             |
|   DDDD    A   A   R   R  A   A          OOOO   SSSS                                              |
|__________________________________________________________________________________________________|</pre>
    <!-- Four-Section Grid Layout -->
    <div class="grid grid-cols-12 gap-8 gap-y-10 mb-margin-desktop">
      <!-- BIO SECTION -->
      <section class="col-span-12 lg:col-span-6 border-2 border-primary-fixed-dim p-6 relative group hover:glow-border transition-all duration-300 bg-black/40">
        <div class="absolute -top-3 left-4 bg-background px-2 text-label-md font-bold text-primary-fixed-dim border-x-2 border-primary-fixed-dim">[ BIO.TXT ]</div>
        <BioSection :data="bioData" />
      </section>

      <!-- EDUCATION SECTION -->
      <section class="col-span-12 lg:col-span-6 border-2 border-primary-fixed-dim p-6 relative group hover:glow-border transition-all duration-300 bg-black/40">
        <div class="absolute -top-3 left-4 bg-background px-2 text-label-md font-bold text-primary-fixed-dim border-x-2 border-primary-fixed-dim">[ EDUCATION.SYS ]</div>
        <EducationSection :items="educationItems" />
      </section>

      <!-- EXPERIENCE SECTION -->
      <section class="col-span-12 border-2 border-primary-fixed-dim p-6 relative group hover:glow-border transition-all duration-300 bg-black/40">
        <div class="absolute -top-3 left-4 bg-background px-2 text-label-md font-bold text-primary-fixed-dim border-x-2 border-primary-fixed-dim">[ EXPERIENCE.EXE ]</div>
        <ExperienceSection :items="experienceItems" />
      </section>
    </div>
    </div>
  </main>

</template>

<style scoped>

</style>

<style scoped>
 .ascii-art { font-family: 'Cascadia Code', ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', monospace; white-space: pre; }
</style>
