<script>

export default {
  props: {
    skills: {
      type: Array,
      required: true, // Ensure Skills prop is always provided
    },
  },
};


</script>

<template>
  <div class="skillsUsed">
    <span>Built with:</span>
    <div>
        <img :src="skill"  v-for="(skill,index) in skills" :key="index">
    </div>
    
  </div>
</template>

<style src="@/assets/css/skills.css">

</style>

