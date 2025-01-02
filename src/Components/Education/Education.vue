<script>
   
    export default{
        
        props: {
            degree: String,
            university: String,
            major: String,
            gpa: String,
            duration: String
        },
    }
</script>

<template>
    <div class="education">
        <div>
            <h3>{{degree}}</h3>
            <div class="university">
                <h4>{{university}}</h4>
                <span>{{duration}}</span>
            </div>
        </div>
        
        <div>
            <span>{{major}}</span>
            <span>GPA : {{gpa}}</span>
        </div>
    </div>
</template>

<style src="../../assets/css/education.css"></style>