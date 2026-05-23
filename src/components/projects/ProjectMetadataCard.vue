<script setup lang="ts">
type ProjectLink = {
  label: string
  href: string
}

type ProjectAction = {
  label: string
  variant?: 'solid' | 'outline'
}

type ProjectMetadata = {
  title: string
  subtitle: string
  size: string
  date: string
  description: string
  links?: ProjectLink[]
  badges?: string[]
  actions?: ProjectAction[]
}

const props = defineProps<{
  project: ProjectMetadata
}>()

function buttonClass(variant: ProjectAction['variant'] = 'solid') {
  return variant === 'outline'
    ? 'border-2 border-primary-fixed-dim text-primary-fixed-dim font-bold hover:bg-primary-fixed-dim hover:text-on-primary-fixed transition-all'
    : 'bg-primary-fixed-dim text-on-primary-fixed font-bold hover:brightness-125 transition-all'
}
</script>

<template>
  <div class="border-2 border-primary-fixed-dim bg-surface-container-low p-6 transition-all hover:scale-[1.01] hover:bg-surface-container-high group h-full">
    <div class="flex justify-between items-start mb-6">
      <div>
        <h3 class="text-headline-md font-headline-md text-primary-fixed-dim group-hover:text-primary-container">{{ props.project.title }}</h3>
        <p class="text-label-sm text-outline-variant">{{ props.project.subtitle }}</p>
      </div>
      <div class="text-right text-label-md text-primary-fixed-dim">
        SIZE: {{ props.project.size }}<br />
        DATE: {{ props.project.date }}
      </div>
    </div>

    <div class="border-y border-outline-variant py-4 my-4">
      <p class="text-body-md text-primary-fixed-dim font-medium italic mb-2">{{ props.project.description }}</p>
      <div v-if="props.project.links?.length" class="flex gap-4 text-label-sm font-bold">
        <a
          v-for="link in props.project.links"
          :key="link.label"
          class="hover:text-primary-container transition-colors"
          :href="link.href"
        >
          [ {{ link.label }} ]
        </a>
      </div>
    </div>

    <div v-if="props.project.badges?.length" class="flex gap-2 flex-wrap">
      <span
        v-for="badge in props.project.badges"
        :key="badge"
        class="px-2 py-0.5 border border-primary-fixed-dim text-label-sm"
      >
        --{{ badge }}
      </span>
    </div>

    <div v-if="props.project.actions?.length" class="mt-6 flex gap-4">
      <button
        v-for="action in props.project.actions"
        :key="action.label"
        type="button"
        :class="[props.project.actions?.length === 1 ? 'w-full' : 'flex-1', 'py-2', buttonClass(action.variant)]"
      >
        {{ action.label }}
      </button>
    </div>
  </div>
</template>

