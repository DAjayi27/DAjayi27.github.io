<script >
    
    import projects from "../../assets/json/projects.json";
    import Project from "./Project.vue";

    export default {
        components: {
            Project
        },

        data() {
            return {
                projects : projects
            }
        },
    }
    
</script>

<template>

    <div id="projects" class="projects">
        <h1>Projects</h1>
        <Project v-for="(project,Index) in projects" :key="Index"
        :projectTitle="project.projectTitle"
        :projectDescription="project.projectDescription"
        :skillsUsed="project.skillsUsed"
        :externalLinks="project.externalLinks"
        :additionalInfo="project.additionalInfo"
        >

        </Project>
    </div>
    
</template>

<style src="../../assets/css/projects.css"></style>