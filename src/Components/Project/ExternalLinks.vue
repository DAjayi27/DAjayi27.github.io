<script>

    export default{
        components: {  },
        props: {
            externalLinks: Array,
        },

        computed :{

            githubLink(){
                let filtered = this.externalLinks.filter((entry) => {
                    return entry.type === 'github';
                });

                return filtered;

             
            },

            otherLinks(){

                let filtered = this.externalLinks.filter((entry) => {
                    return entry.type === 'other';
                });

                return filtered;
            }
        }
    }

</script>

<template>

    <div class="external">
        <a :href="obj.link" v-for="(obj,type) in otherLinks"  :key="type" >
            <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" size="xl" 
                 
                 
            />
        </a>
        
        <a :href="obj.link" v-for="(obj,type) in githubLink" :key="type">
            <font-awesome-icon :icon="['fab', 'github']" size="xl"
                :key="type"  
            />
        </a>
       
        
    </div>

</template>

<style src="../../assets/css/skills.css">

</style>