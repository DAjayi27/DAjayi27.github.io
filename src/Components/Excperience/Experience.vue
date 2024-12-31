<script>
import Index from '@/Pages/Index.vue';

    export default{
        props: {
            jobTitle: String,
            employer: String,
            duration: String,
            additionalInfo: Array,
        },
    }
</script>

<template>
    <div class="experience">
        <h3>{{jobTitle}}</h3>
        <h4>{{employer}}</h4>
        <span>{{duration}}</span>
        <ul>
            <li v-for="(info,Index) in additionalInfo" :key="Index">
                {{info}}
            </li>
        </ul>
    </div>
</template>