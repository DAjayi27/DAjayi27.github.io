<script >
    import Experience from './Experience.vue';
    import workExperience from "../../assets/json/workExperience.json";

    export default {
        components: {
            Experience
        },

        data() {
            return {
                workExperience : workExperience
            }
        },
    }
    
</script>

<template>

    <div id = "workExperience" class="experiences">
        <h1>Experience</h1>
        <Experience v-for="(experience,Index) in workExperience" :key="Index"
        :jobTitle="experience.jobTitle"
        :employer="experience.employer"
        :duration="experience.duration"
        :additionalInfo="experience.additionalInfo"
        >

        </Experience>
    </div>
    
</template>

<style src="../../assets/css/experience.css"></style>