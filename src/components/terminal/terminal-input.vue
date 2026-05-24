<script setup lang="ts">
import { nextTick, onMounted, useTemplateRef, watch, ref } from 'vue'
import { validCommands, Command } from '@/components/terminal/cli-controller.ts'

const emit = defineEmits<{
  submit:[content:string]
}>()

const props =  defineProps<{
  historyStack:string[]
}>();

let historyIndex = props.historyStack.length;

const inputBox = useTemplateRef<HTMLElement>('inputBox')

function focusInput() {
  inputBox.value?.focus()
}

function popHistory(history:string[],index:number) {
  if (inputBox.value) {
    inputBox.value.textContent = history[index] ?? "";
  }
  focusInput()
}

// Suggestion state
const showSuggestions = ref(false)
const suggestionsList = ref<string[]>([])
const selectedSuggestion = ref(0)

function hideSuggestions() {
  showSuggestions.value = false
  suggestionsList.value = []
  selectedSuggestion.value = 0
}

function applySuggestionValue(val: string) {
  const currentText = inputBox.value?.textContent ?? ''
  const parts = currentText.trim().split(/\s+/)
  if (parts[0]?.toLowerCase() === Command.CD) {
    if (inputBox.value) inputBox.value.textContent = `${Command.CD} ${val}`
  } else {
    if (inputBox.value) inputBox.value.textContent = val + ' '
  }
  focusInput()
}

function applySuggestionAtIndex(idx: number) {
  const s = suggestionsList.value[idx]
  if (!s) return
  applySuggestionValue(s)
}

function showHint(){
  const currentText = inputBox.value?.textContent ?? ''
  const trimmed = currentText.trim()

  // compute suggestions based on current input
  let suggestions: string[] = []

  if (trimmed === '') {
    // suggest top-level commands
    suggestions = validCommands
  } else {
    const parts = trimmed.split(/\s+/)
    const cmd = (parts[0] ?? '').toLowerCase()

    if (cmd === Command.CD) {
      const dirs = ['about','projects','contact']
      const prefix = parts[1] ?? ''
      suggestions = dirs.filter(d => d.startsWith(prefix))
    } else if (parts.length === 1) {
      // suggest commands that match
      suggestions = validCommands.filter(c => c.startsWith(cmd))
    }
  }

  // if no suggestions, hide
  if (suggestions.length === 0) {
    hideSuggestions()
    return
  }

  // if exactly one match, autofill and don't show the list
  if (suggestions.length === 1) {
    applySuggestionValue(suggestions[0]!)
    hideSuggestions()
    return
  }


  suggestionsList.value = suggestions
  showSuggestions.value = true
  selectedSuggestion.value = -1

  focusInput() ;


}

function handleKeyPress(event: KeyboardEvent) {
  debugger;
  if (event.key === 'ArrowUp' ) {
    if (!props.historyStack || props.historyStack.length === 0) return

    if (historyIndex > 0) {
      historyIndex--
    } else {
      historyIndex = 0
    }

    popHistory(props.historyStack, historyIndex)
    return
  }

  if (event.key === 'ArrowDown' ) {
    if (!props.historyStack || props.historyStack.length === 0) return

    if (historyIndex < props.historyStack.length - 1) {
      historyIndex++
      popHistory(props.historyStack, historyIndex)
    } else {
      historyIndex = props.historyStack.length
      if (inputBox.value) inputBox.value.textContent = ''
      focusInput()
    }

    return
  }
  historyIndex = props.historyStack.length

  if (event.key === 'Tab' ) {
    event.preventDefault()
    showHint();
    return;
  }

  if (event.key !== 'Enter') return

  event.preventDefault()

  const content = inputBox.value?.textContent?.trim() ?? ''
  emit('submit', content)

  if (content === Command.CLEAR) {
    showSuggestions.value = false;
  }

  if (inputBox.value) {
    inputBox.value.textContent = ''
  }

  // After submitting, reset navigation index to the end so ArrowUp will show the last command
  historyIndex = props.historyStack.length
  focusInput()
}

watch(() => props.historyStack.length, (len) => {
  historyIndex = len
})

function handleBlur() {
  focusInput()
}

onMounted(async () => {
  await nextTick()
  focusInput()
})
</script>

<template>
  <div class="relative">
    <span class="text-body-md font-body-md glow-text">C:\&gt;&nbsp;</span>
    <span
      ref="inputBox"
      class="text-body-md font-body-md glow-text"
      contenteditable="true"
      autofocus
      @blur="handleBlur"
      @keydown="handleKeyPress"
    ></span>
  </div>
  <div v-if="showSuggestions && suggestionsList.length > 0" class="flex flex-wrap gap-2">
      <span v-for="(s, i) in suggestionsList" :key="s + i" class="px-3 py-1 rounded border border-primary-fixed-dim text-primary-fixed-dim text-label-sm font-label-sm bg-surface-container-low/50">
        {{ s }}
      </span>
  </div>
</template>

<style scoped>
[contenteditable="true"] {
  outline: none;
  caret-color: var(--color-surface-tint);
}
</style>

