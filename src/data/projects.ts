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
    title: 'SUPPORT DASHBOARD',
    subtitle: 'Internal staff tooling',
    size: '—',
    date: 'CURRENT',
    description:
      'Internal dashboard built to help staff handle support-side operational tasks, including database backups and restores used for testing and bug investigations.',
    badges: ['INTERNAL', 'OPS', 'SUPPORT'],
  },
  {
    title: 'AI-ASSISTED QA PIPELINE',
    subtitle: 'Test automation & scaffolding',
    size: '—',
    date: 'CURRENT',
    description:
      'Automation pipeline where AI helps generate test cases while I design and maintain the underlying framework, runners, and workflow scaffolding.',
    badges: ['AI', 'QA', 'AUTOMATION'],
  },
  {
    title: 'SUPPORT TICKETING SYSTEM',
    subtitle: 'Linear integration & workflow sync',
    size: '—',
    date: 'CURRENT',
    description:
      'Support-ticketing workflow that integrates with Linear to centralize customer issues, reduce tracking friction, and improve visibility across support and engineering.',
    badges: ['LINEAR', 'INTEGRATION', 'WORKFLOW'],
  },
  {
    title: 'TYPESIFT MODULE V2 UPLIFT',
    subtitle: 'Angular / C# refactor',
    size: '—',
    date: 'CURRENT',
    description:
      'Large-scale refactor of an existing Typesift module, pairing a refreshed UI with structural cleanup and several new product features as part of the v2 rollout.',
    badges: ['ANGULAR', 'UI', 'REFACTOR'],
  },
  {
    title: 'COURSE MANAGEMENT SYSTEM',
    subtitle: 'Java / Spring Boot / Vue 3',
    size: '—',
    date: '2025-PRESENT',
    description:
      'Full-stack course manager built to organize courses, tasks, and deadlines using Spring Boot, SQLite, Vue 3, Pinia, and reusable dashboard views.',
    links: [{ label: 'VIEW GITHUB', href: 'https://github.com/DAjayi27/cms' }],
    badges: ['JAVA', 'SPRING BOOT', 'VUE 3', 'SQLITE'],
  },
  {
    title: 'PHYSICS ENGINE',
    subtitle: 'C++ / SDL3 / GoogleTest',
    size: '—',
    date: '2025-PRESENT',
    description:
      'Modular 2D physics sandbox in modern C++ with rigid-body dynamics, collision handling, UI overlays, and automated component and integration tests.',
    links: [{ label: 'VIEW GITHUB', href: 'https://github.com/DAjayi27/Physics-Engine' }],
    badges: ['C++', 'SDL3', 'PHYSICS', 'TESTING'],
  },
  {
    title: 'DARAOS',
    subtitle: 'Rust / OSDev / QEMU',
    size: '—',
    date: '2026-PRESENT',
    description:
      'Custom operating system kernel project in Rust focused on low-level systems work, platform experimentation, VGA text output, and serial-debug workflows.',
    links: [{ label: 'VIEW GITHUB', href: 'https://github.com/DAjayi27/dos' }],
    badges: ['RUST', 'OSDEV', 'LOW LEVEL'],
  },
  {
    title: 'SQL PARSER',
    subtitle: 'Python / data utility',
    size: '—',
    date: '2024',
    description:
      'Utility that converts CSV input into SQL INSERT statements for relational database seeding and lightweight migration workflows.',
    links: [{ label: 'VIEW GITHUB', href: 'https://github.com/DAjayi27/SQL-Parser' }],
    badges: ['PYTHON', 'CSV', 'SQL'],
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


