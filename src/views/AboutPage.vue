<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import BioSection from '@/components/about/BioSection.vue'
import EducationSection from '@/components/about/EducationSection.vue'
import ExperienceSection from '@/components/about/ExperienceSection.vue'
import VolunteerSection from '@/components/about/VolunteerSection.vue'
import { bioData, educationItems, experienceItems, volunteerItems, volunteerMetric } from '@/data/about'

// Flicker + reveal timers
const flickerTimer = ref<number | undefined>(undefined)
const revealTimeouts: number[] = []

const mainRef = ref<HTMLElement | null>(null)

// Data objects are imported from `src/data/about.ts`

onMounted(() => {
  // Flicker effect applied to the document body for subtle realism
  flickerTimer.value = window.setInterval(() => {
    if (Math.random() > 0.99) {
      document.body.style.opacity = '0.9'
      const t = window.setTimeout(() => {
        document.body.style.opacity = '1'
      }, 50)
      revealTimeouts.push(t)
    }
  }, 100)

  // Reveal child elements inside the main container with a stagger
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
})

onUnmounted(() => {
  if (flickerTimer.value) {
    window.clearInterval(flickerTimer.value)
  }
  revealTimeouts.forEach(t => window.clearTimeout(t))
})

</script>

<template>

  <!-- Main Terminal Content -->
  <main ref="mainRef" class="flex-1 overflow-y-auto px-margin-desktop py-base relative custom-scrollbar">
    <div class="mx-auto w-full">
    <!-- Command Header -->
    <div class="mb-gutter text-body-md">
      <div class="flex items-center gap-2">
        <span>C:\SYS\INFO&gt;</span>
        <span class="text-primary-fixed-dim">TYPE ABOUT.TXT</span>
      </div>
      <div class="mt-2 text-outline-variant">ACCESSING LOCAL STORAGE... DONE.</div>
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
      <section class="col-span-12 lg:col-span-8 border-2 border-primary-fixed-dim p-6 relative group hover:glow-border transition-all duration-300 bg-black/40">
        <div class="absolute -top-3 left-4 bg-background px-2 text-label-md font-bold text-primary-fixed-dim border-x-2 border-primary-fixed-dim">[ EXPERIENCE.EXE ]</div>
        <ExperienceSection :items="experienceItems" />
      </section>

      <!-- VOLUNTEER SECTION -->
      <section class="col-span-12 lg:col-span-4 border-2 border-primary-fixed-dim p-6 relative group hover:glow-border transition-all duration-300 bg-black/40">
        <div class="absolute -top-3 left-4 bg-background px-2 text-label-md font-bold text-primary-fixed-dim border-x-2 border-primary-fixed-dim">[ VOLUNTEER.LOG ]</div>
        <VolunteerSection :items="volunteerItems" :metric="volunteerMetric" />
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
