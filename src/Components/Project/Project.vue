<script>
    import SkillsUsed from './SkillsUsed.vue';
    import ExternalLinks from './ExternalLinks.vue';

    export default{
        components: { SkillsUsed , ExternalLinks},
        props: {
            projectTitle: String,
            projectDescription: String,
            skillsUsed: Array,
            externalLinks: Array,
            additionalInfo: Array,
        },
    }
</script>

<template>
    <div class="project">
        <h3>{{projectTitle}}</h3>
        <h4>{{projectDescription}}</h4>
        <span>Built with: {{skillsUsed}}</span>
        <ExternalLinks :externalLinks="externalLinks"></ExternalLinks>
        <!-- <SkillsUsed :skills="skillsUsed"></SkillsUsed> -->
        <ul>
            <li v-for="(info,Index) in additionalInfo" :key="Index">
                {{info}}
            </li>
        </ul>
    </div>
</template>

<style src="../../assets/css/skills.css"></style>