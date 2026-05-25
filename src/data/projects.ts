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
    title: 'DARAOS',
    subtitle: 'Rust / OS kernel / bare metal',
    size: '—',
    date: '2026-PRESENT',
    description:
      'Custom operating system and kernel project written in Rust, focused on low-level systems programming, bare-metal experimentation, and cross-platform kernel development.',
    links: [{ label: 'VIEW GITHUB', href: 'https://github.com/DAjayi27/dos' }],
    badges: ['RUST', 'OSDEV', 'LOW LEVEL'],
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
    title: 'HTTP SERVER',
    subtitle: 'C / networking / from scratch',
    size: '—',
    date: '2022-2026',
    description:
      'HTTP server implementation built from scratch in C, with a custom request-handling structure, logging utilities, and a simple project layout driven by CMake.',
    links: [{ label: 'VIEW GITHUB', href: 'https://github.com/DAjayi27/HTTP-Server' }],
    badges: ['C', 'HTTP', 'NETWORKING'],
  },
  {
    title: 'DATA STRUCTURES',
    subtitle: 'Java / algorithms / fundamentals',
    size: '—',
    date: '2024',
    description:
      'Collection of foundational data structures and algorithm implementations in Java, built to deepen core CS understanding through hands-on implementation work.',
    links: [{ label: 'VIEW GITHUB', href: 'https://github.com/DAjayi27/DataStructures' }],
    badges: ['JAVA', 'DATA STRUCTURES', 'ALGORITHMS'],
  },
  {
    title: 'ALGO VIZUALIZER',
    subtitle: 'Java / algorithm visualization',
    size: '—',
    date: '2024',
    description:
      'Java-based algorithm visualization project designed to make core algorithm behavior easier to explore and understand through interactive visual output.',
    links: [{ label: 'VIEW GITHUB', href: 'https://github.com/DAjayi27/AlgoVizualizer' }],
    badges: ['JAVA', 'VISUALIZATION', 'EDUCATION'],
  },
  {
    title: 'SQL PARSER',
    subtitle: 'Python / CSV to SQL',
    size: '—',
    date: '2024-2025',
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


