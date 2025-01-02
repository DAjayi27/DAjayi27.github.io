<script>

import data from "../assets/json/sideBarOptions.json";

export default{
    data(){

        return{
            sideBarOptions : data
        }
    }
}

</script>

<template>

    <div class="sidebar">
        <div v-for=" (option,index) in sideBarOptions" :key="index" >
            <!-- <a :href="option.href"><img :src="option.imgSrc" :alt="option.alt"></a> -->
            <a :href="option.href"><p>{{ option.text }}</p></a>
        </div>
    </div>

</template>

<style src="../assets/css/sideHeader.css">

</style>