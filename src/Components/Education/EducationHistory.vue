<script >
    
    import eduHistory from "../../assets/json/educationHistory.json";
    import Education from "./Education.vue";

    export default {
        components: {
            Education
        },

        data() {
            return {
                eduHistory : eduHistory
            }
        },
    }
    
</script>

<template>

    <div id="educationHistory" class="educationHistory">
        <h1>Education</h1>
        <Education v-for="(entry,Index) in eduHistory" :key="Index"
            :degree="entry.degree"
            :gpa="entry.gpa"
            :major="entry.major"
            :university="entry.university"
            :duration="entry.duration"
        >

        </Education>
    </div>
    
</template>

<style src="../../assets/css/education.css"></style>