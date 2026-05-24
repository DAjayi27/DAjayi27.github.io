<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

type ContactMethod = {
  label: string
  value: string
  href: string
  icon: string
}

type InfoCard = {
  title: string
  type: 'location' | 'uptime' | 'auth'
}

const router = useRouter()

const contactMethods: ContactMethod[] = [
  { label: 'EMAIL', value: 'USER@PROVIDER.COM', href: 'mailto:user@provider.com', icon: 'mail' },
  { label: 'LINKEDIN', value: 'LI_STATION_ALPHA', href: 'https://www.linkedin.com/', icon: 'work' },
  { label: 'INSTAGRAM', value: '@OS_TERMINAL_FEED', href: 'https://www.instagram.com/', icon: 'camera_alt' },
  { label: 'GITHUB', value: 'G_ACCOUNT_ID', href: 'https://github.com/', icon: 'code' },
]

const infoCards: InfoCard[] = [
  { title: 'SYSTEM.NODE_LOCATION', type: 'location' },
  { title: 'UPTIME.MONITOR', type: 'uptime' },
  { title: 'AUTH.METHODS', type: 'auth' },
]

const systemBars = [20, 40, 90, 60, 30, 80]
const authMethods = [
  ['SSH_RSA', '[ACTIVE]'],
  ['PGP_PUB', '[READY]'],
  ['SSL_CRT', '[STABLE]'],
] as const

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'auto' })
})
</script>

<template>
  <main class="pt-24 pb-20 px-margin-desktop min-h-full flex flex-col items-center overflow-y-auto custom-scrollbar">
    <div class="w-full max-w-4xl border-2 border-primary-fixed-dim bg-surface-container-lowest p-8 relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full bg-primary-fixed-dim px-4 py-1 flex justify-between items-center">
        <span class="text-on-primary font-bold text-label-md">TELNET://127.0.0.1/CONTACT.SYS</span>
        <button class="text-on-primary text-label-sm hover:underline" type="button" @click="router.push({ name: 'home' })">
          RETURN_HOME
        </button>
      </div>

      <div class="mt-8 space-y-6">
        <div class="space-y-1 crt-glow mb-12">
          <p class="text-primary-fixed-dim font-label-md">DARA OS [Version 1.0.2443]</p>
          <p class="text-primary-fixed-dim font-label-md">(c) 1994 DARA Systems Corporation. All rights reserved.</p>
          <p class="text-primary-fixed-dim font-label-md mt-4">Initializing SOCIAL_UPLINK protocols...</p>
          <p class="text-primary-container font-label-md">&gt;&gt; ACCESSING EXTERNAL DATA PORTS</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            v-for="method in contactMethods"
            :key="method.label"
            :href="method.href"
            target="_blank"
            rel="noreferrer"
            class="group space-y-2"
          >
            <label class="block text-label-md font-label-md text-primary-fixed-dim">PROTOCOL: {{ method.label === 'EMAIL' ? 'SMTP (EMAIL)' : method.label === 'LINKEDIN' ? 'PROFESSIONAL (LINKEDIN)' : method.label === 'INSTAGRAM' ? 'VISUAL (INSTAGRAM)' : 'REPOSITORY (GITHUB)' }}</label>
            <div class="flex items-center text-headline-md font-headline-md input-bracket-focus transition-all duration-200 group-hover:brightness-125">
              <span class="mr-2 text-primary-fixed-dim">[</span>
              <span class="material-symbols-outlined mr-2 text-primary-fixed-dim">{{ method.icon }}</span>
              <span class="text-primary-container grow">{{ method.value }}</span>
              <span class="ml-2 text-primary-fixed-dim">]</span>
            </div>
          </a>
        </div>

        <div class="mt-12 flex items-center justify-between pt-6 border-t border-outline-variant">
          <div class="flex items-center gap-4">
            <span class="material-symbols-outlined text-primary-fixed-dim animate-pulse">sensors</span>
            <span class="text-label-md font-label-md italic opacity-70">ESTABLISHING_REMOTE_SYNC...</span>
          </div>
          <div class="text-label-sm font-label-sm text-outline-variant">
            # Instruction: Select protocol to initiate handshake.
          </div>
        </div>
      </div>

      <div class="mt-8 pt-4 border-t border-outline-variant flex gap-4 overflow-hidden opacity-30">
        <span class="text-label-sm font-label-sm whitespace-nowrap">0x0012FA: STACK_OK</span>
        <span class="text-label-sm font-label-sm whitespace-nowrap">0x0012FB: HEAP_CLEAN</span>
        <span class="text-label-sm font-label-sm whitespace-nowrap">0x0012FC: MEM_LOCK_OFF</span>
        <span class="text-label-sm font-label-sm whitespace-nowrap">0x0012FD: BUF_INIT</span>
        <span class="text-label-sm font-label-sm whitespace-nowrap">0x0012FE: TELNET_ACTV</span>
      </div>
    </div>

    <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-gutter w-full max-w-4xl">
      <div v-for="card in infoCards" :key="card.title" class="border border-primary-fixed-dim p-4 bg-surface-container-low hover:bg-surface-container transition-colors">
        <template v-if="card.type === 'location'">
          <h3 class="text-label-md font-bold mb-2">{{ card.title }}</h3>
          <img alt="Terminal" class="w-full h-24 object-cover border border-primary-fixed-dim grayscale sepia opacity-50 mb-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1sw38UIknwxcayxur18mmdDmkKoRjUBEd-KnuoejymHwguMPotYWVrBvgkb-RjDJx5mpD5s3hRdXsDz25rZdzbQ85vR4dJgV_n0MGgWgJ-yjoEiSLm2Q2FHP7m7HucKGsPZXqMkQXTYcBPdBhvrOY-HBVhH6Ho3gs1sP0-D-aireoKH0FFCEWTXewOHkf5IvyNtoQL8gmTyZnU_2cbYqjRT9L8qt8edIdlHggSBTdgAI3WoGRzF6m-9Kz_3wJcVOlS4DSFH7W2lc" />
          <p class="text-label-sm text-outline-variant">LAT: 34.0522° N<br />LNG: 118.2437° W</p>
        </template>

        <template v-else-if="card.type === 'uptime'">
          <h3 class="text-label-md font-bold mb-2">{{ card.title }}</h3>
          <div class="flex items-end gap-1 h-24 pb-2">
            <div v-for="(bar, idx) in systemBars" :key="idx" class="bg-primary-fixed-dim w-4" :class="idx === 2 ? 'animate-pulse' : ''" :style="{ height: `${bar}%` }"></div>
          </div>
          <p class="text-label-sm text-outline-variant">99.98% PACKET_DELIVERY</p>
        </template>

        <template v-else>
          <h3 class="text-label-md font-bold mb-2">{{ card.title }}</h3>
          <div class="space-y-2">
            <div v-for="(method, idx) in authMethods" :key="idx" class="flex justify-between text-label-sm">
              <span>{{ method[0] }}</span><span class="text-primary-container">{{ method[1] }}</span>
            </div>
          </div>
          <p class="text-label-sm text-outline-variant mt-4 italic"># Encryption: AES-256-CBC</p>
        </template>
      </div>
    </div>
  </main>
</template>

<style scoped>
.material-symbols-outlined { font-variation-settings: 'FILL' 1; }
</style>