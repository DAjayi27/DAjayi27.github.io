<script>

    import data from "../assets/json/sideBarOptions.json";

    export default{
        data(){

            return{
                sideBarOptions : data
            }
        },
        methods :{
            
            test(e){

                
                console.log(e);
                let element =  document.getElementById("sidebar");


                const currentHeight = element.style.getPropertyValue('max-height');
                if (currentHeight) {
                    element.style.removeProperty('max-height');
                    element.style.removeProperty('height');
                } else {
                    element.style.setProperty('max-height', element.scrollHeight + 'px');
                    element.style.setProperty('height', element.scrollHeight + 'px');
                }
                
                
            }
        },
        mounted(){



        }
    }

</script>

<template>

    <div class="sidebar" id="sidebar">
        <div class="hamburger">
            <p>Darasimi Ajayi </p>
            <font-awesome-icon icon="fa-solid fa-bars"  @click="test" />
        </div>
        <div v-for=" (option,index) in sideBarOptions" :key="index" >
            <!-- <a :href="option.href"><img :src="option.imgSrc" :alt="option.alt"></a> -->
            <a :href="option.href"><p>{{ option.text }}</p></a>
        </div>
    </div>

</template>

<style src="../assets/css/sideHeader.css">

</style>