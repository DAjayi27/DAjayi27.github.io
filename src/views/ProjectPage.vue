<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import ProjectMetadataCard from '../components/projects/ProjectMetadataCard.vue'

const router = useRouter()

type SidebarLink = {
  label: string
  active?: boolean
}

type SystemMetric = {
  label: string
  value: string
  percent: number
}

type ProjectCardData = {
  title: string
  subtitle: string
  size: string
  date: string
  description: string
  links?: { label: string; href: string }[]
  badges?: string[]
  actions?: { label: string; variant?: 'solid' | 'outline' }[]
}

const projectCards: ProjectCardData[] = [
  {
    title: 'PROJECTS.EXE',
    subtitle: 'EXECUTABLE FILE - V2.4.0',
    size: '124 KB',
    date: '04-12-94',
    description: 'A comprehensive dashboard for asset management.',
    links: [
      { label: 'VIEW GITHUB', href: '#' },
      { label: 'LIVE PREVIEW', href: '#' },
    ],
    badges: ['SECURE', 'READ-ONLY'],
    actions: [
      { label: 'RUN_PROCESS', variant: 'solid' },
    ],
  },
  {
    title: 'NET_DRV.SYS',
    subtitle: 'SYSTEM DRIVER - V0.1.2',
    size: '48 KB',
    date: '05-01-94',
    description: 'Low-level network driver for TCP/IP packet interception.',
    links: [
      { label: 'VIEW SOURCE', href: '#' },
    ],
    badges: ['SYSTEM', 'NETWORK'],
    actions: [
      { label: 'DEBUG_IO', variant: 'outline' },
    ],
  },
  {
    title: 'UI_SHELL.EXE',
    subtitle: 'GRAPHICAL ENVIRONMENT - V1.0.0',
    size: '256 KB',
    date: '08-08-94',
    description: 'The primary visual interface for DARA_OS.',
    links: [
      { label: 'DOCS', href: '#' },
      { label: 'REPO', href: '#' },
    ],
    badges: ['GUI', 'STABLE', 'DEFAULT'],
    actions: [
      { label: 'MOUNT_SHELL', variant: 'solid' },
      { label: 'VIEW_SRC', variant: 'outline' },
    ],
  },
]

const sidebarLinks: SidebarLink[] = [
  { label: '/ROOT' },
  { label: '/DRIVERS' },
  { label: '/PROJECTS', active: true },
  { label: '/TRASH' },
]

const systemMetrics = ref<SystemMetric[]>([
  { label: 'CPU LOAD', value: '42%', percent: 42 },
  { label: 'DISK IO', value: '12.4 MB/S', percent: 68 },
])

let statusTimer: number | undefined

function goBack() {
  router.back()
}

function refreshSystemMetrics() {
  systemMetrics.value = [
    { label: 'CPU LOAD', value: `${Math.floor(Math.random() * 20) + 35}%`, percent: Math.floor(Math.random() * 20) + 35 },
    { label: 'DISK IO', value: `${(Math.random() * 30 + 50).toFixed(1)} MB/S`, percent: Math.floor(Math.random() * 30) + 50 },
  ]
}

onMounted(() => {
  statusTimer = window.setInterval(refreshSystemMetrics, 3000)
})

onUnmounted(() => {
  if (statusTimer) {
    window.clearInterval(statusTimer)
  }
})
</script>

<template>
  <aside class="w-full xl:fixed xl:left-0 xl:top-16 xl:bottom-12 xl:w-72 xl:border-r-2 xl:border-primary-fixed-dim xl:p-6 flex flex-col gap-6 overflow-y-auto">
    <div class="border-b border-outline-variant pb-4">
      <h2 class="text-label-md font-label-md text-outline-variant mb-4 uppercase tracking-tighter">System Status</h2>
      <div class="space-y-4">
        <div v-for="metric in systemMetrics" :key="metric.label">
          <div class="flex justify-between text-label-sm mb-1">
            <span>{{ metric.label }}</span>
            <span>{{ metric.value }}</span>
          </div>
          <div class="h-4 border border-primary-fixed-dim flex p-0.5">
            <div class="bg-primary-fixed-dim h-full" :style="{ width: `${metric.percent}%` }"></div>
          </div>
        </div>
      </div>
    </div>

    <nav class="flex flex-col gap-2">
      <a
        v-for="link in sidebarLinks"
        :key="link.label"
        :class="[
          'px-4 py-2 transition-colors',
          link.active
            ? 'text-primary-fixed-dim font-bold bg-primary-fixed-dim/10 border-l-4 border-primary-fixed-dim'
            : 'text-outline-variant hover:bg-primary-fixed-dim hover:text-on-primary-fixed',
        ]"
        href="#"
      >
        {{ link.label }}
      </a>
    </nav>

    <div class="mt-auto border-t border-outline-variant pt-4">
      <div class="text-[10px] leading-relaxed text-outline-variant">
        LAST ACCESS: 1994-08-12 14:22:01<br />
        USER: ADMIN_X<br />
        SESSION: #000492
      </div>
    </div>
  </aside>

  <div class="w-full h-full flex flex-col p-margin-desktop xl:pl-80">
    <!-- Project Cards Grid -->
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-20 project-grid">
      <ProjectMetadataCard
        v-for="card in projectCards"
        :key="card.title"
        :project="card"
      />
    </div>
    <div class="pt-4">
      <button @click="goBack" class="px-4 py-2 border border-(--color-surface-tint) text-(--color-surface-tint)">Back</button>
    </div>
  </div>
</template>

<style scoped>
.project-grid > :last-child {
  grid-column: 1 / -1;
}

@media (max-width: 1279px) {
  .project-grid > :last-child {
    grid-column: auto;
  }
}
</style>

