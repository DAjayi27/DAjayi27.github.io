<script setup lang="ts">
import { nextTick, onMounted, useTemplateRef } from 'vue'

const emit = defineEmits<{
  submit:[content:string]
}>()

const props =  defineProps<{
  historyStack:string[]
}>();

let historyIndex = 0;


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
    debugger;
    historyIndex = props.historyStack.length - 1 > 0 ? props.historyStack.length - 1 : 0;
    historyIndex = props.historyStack.length - 1 > 0 ? props.historyStack.length - 1 : 0;
    popHistory(props.historyStack,historyIndex);
    return;
  }

  if (event.key === 'ArrowDown' ) {
    historyIndex = props.historyStack.length + 1 < props.historyStack.length  ? props.historyStack.length + 1 : props.historyStack.length - 1;
    popHistory(props.historyStack,historyIndex);
    return;
  }

  historyIndex = 0;
  if (event.key !== 'Enter') return

  event.preventDefault()

  const content = inputBox.value?.textContent?.trim() ?? ''
  emit('submit', content)

  if (inputBox.value) {
    inputBox.value.textContent = ''
  }

  focusInput()
}

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

