<script setup lang="ts">
import { nextTick, onMounted, useTemplateRef, watch } from 'vue'

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

function handleKeyPress(event: KeyboardEvent) {


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
  if (event.key !== 'Enter') return

  event.preventDefault()

  const content = inputBox.value?.textContent?.trim() ?? ''
  emit('submit', content)

  if (inputBox.value) {
    inputBox.value.textContent = ''
  }

  // After submitting, reset navigation index to the end so ArrowUp will show the last command
  historyIndex = props.historyStack.length
  focusInput()
}

// Keep the historyIndex in sync if the parent updates the history stack
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
  <div>
    <span class="text-body-md font-body-md glow-text">C:\&gt;&nbsp;</span>
    <span
      ref="inputBox"
      class="text-body-md font-body-md glow-text"
      contenteditable="true"
      autofocus
      @blur="handleBlur"
      @keydown="handleKeyPress"
    ></span>
    <!--    <span class="cursor-blink ml-1"></span>-->
  </div>
</template>

<style scoped>
[contenteditable="true"] {
  outline: none;
  caret-color: var(--color-surface-tint);
}
</style>

