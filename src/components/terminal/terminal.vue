<script setup lang="ts">
import { useTemplateRef } from 'vue'

const inputBox = useTemplateRef<HTMLElement>('inputBox');

function handleKeyPress(_event: KeyboardEvent) {
    // Handle key presses here
}

function handleBlur() {
  inputBox.value?.focus();
}

</script>

<template>

  <div>
    <span class="text-body-md font-body-md glow-text">C:\&gt; </span>
    <span class="text-body-md font-body-md glow-text" contenteditable="true" autofocus @keydown="handleKeyPress" @blur="handleBlur" ref="inputBox">TEST</span>
    <span class="cursor-blink ml-1"></span>
  </div>

</template>

<style scoped>


  [contenteditable="true"]{
    outline:none;
    caret-color: transparent ;
  }

.cursor-blink {
  animation: blink 1s step-end infinite;
  display: inline-block;
  width: 10px;
  height: 18px;
  background-color: #00e639;
  vertical-align: middle;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

</style>