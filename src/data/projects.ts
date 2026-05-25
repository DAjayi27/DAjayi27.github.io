export type ProjectCardData = {
  title: string
  subtitle: string
  size: string
  date: string
  description: string
  links?: { label: string; href: string }[]
  badges?: string[]
  actions?: { label: string; variant?: 'solid' | 'outline' }[]
}

export type SidebarLink = {
  label: string
  active?: boolean
}

export const projectCards: ProjectCardData[] = [
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
    actions: [{ label: 'RUN_PROCESS', variant: 'solid' }],
  },
  {
    title: 'NET_DRV.SYS',
    subtitle: 'SYSTEM DRIVER - V0.1.2',
    size: '48 KB',
    date: '05-01-94',
    description: 'Low-level network driver for TCP/IP packet interception.',
    links: [{ label: 'VIEW SOURCE', href: '#' }],
    badges: ['SYSTEM', 'NETWORK'],
    actions: [{ label: 'DEBUG_IO', variant: 'outline' }],
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

export const sidebarLinks: SidebarLink[] = [
  { label: '/ROOT' },
  { label: '/DRIVERS' },
  { label: '/PROJECTS', active: true },
  { label: '/TRASH' },
]

void projectCards.length
void sidebarLinks.length


