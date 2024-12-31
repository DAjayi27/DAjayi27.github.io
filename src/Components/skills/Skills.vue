<script>
    import languages from "@/assets/json/languages.json";
    import framework from "@/assets/json/framework.json";
    import devTools from "@/assets/json/devTools.json";
    import gsap from 'gsap';


    export default{

        data(){
            return{
                languages:languages,
                frameworks:framework,
                devTools:devTools,
                headerClicked: "",
                pervHeaderClicked: ""
            }
        },
        computed: {
            currentList() {
                switch (this.headerClicked) {
                    case 'languages': 
                    return this.languages;
                    case 'frameworks': 
                    return this.frameworks;
                    case 'devtools': 
                    return this.devTools;
                    default: 
                    return []; 
                }
            }
        },
        methods: {

        
            swapCurrentDisplay(e,text){

                debugger;

                if ( e != null && e.target != null) {

                    //this.resetTimer();

                    this.pervHeaderClicked = this.headerClicked;

                    this.headerClicked = e.target.innerText;

                    this.headerClicked = this.headerClicked.toLowerCase().replace(/\s/g, "");
                    this.pervHeaderClicked = this.pervHeaderClicked.toLowerCase().replace(/\s/g, "");

                    currentIndex = skillsDisplayOptions.indexOf(this.headerClicked)+1;

                }
                
                else if ( text != ""){
                    this.pervHeaderClicked = this.headerClicked;
                    this.headerClicked = text;
                }

                else{
                    return;
                }


                
                //apply css styling

                let element = document.getElementById(this.headerClicked);

                let prevElement =  document.getElementById(this.pervHeaderClicked);

                if (prevElement) {
                    prevElement.classList.toggle("active-option");
                }

                if (element) {
                    element.classList.toggle("active-option");
                }
                


                this.headerClicked = this.headerClicked.toLowerCase().replace(/\s/g, "");
            },

            onBeforeEnter(el) {
               

            },

            onEnter(el, done) {
                gsap.fromTo(
                    el,
                    { x: 300 , opacity:0},
                    { x: 0, duration: 2 ,opacity:1}
                );
            },

            changeSkillDisplayed(){
                let index = currentIndex % skillsDisplayOptions.length;
                this.swapCurrentDisplay(null,skillsDisplayOptions[index]);
                currentIndex++;
            },

            resetTimer(){
                clearInterval(intervalId);

                this.changeSkillDisplayed();
               
                intervalId = setInterval(this.changeSkillDisplayed, 7000);

            }
            
        

        },
        mounted(){

            this.swapCurrentDisplay(null,"languages");

            // will come back to this later to fix animation
            // this.changeSkillDisplayed();
            // intervalId = setInterval(this.changeSkillDisplayed, 7000);
        },
        unmounted(){
            //clearInterval(intervalId);

        }

    }

    const skillsDisplayOptions = ["languages","frameworks","devtools"];
    let currentIndex = 0;
    let intervalId = null;

</script>

<template>

    <div class="skillSection" id="skills">

        <h1>Skills</h1>

        <div class="skillHeader"> 
            <a @click="swapCurrentDisplay" id="languages">Languages</a>
            <a @click="swapCurrentDisplay" id="frameworks">Frameworks</a>
            <a @click="swapCurrentDisplay" id="devtools">Dev Tools</a>
        </div>

     
            
        <div class="skillsList" >  
            <img :src="imageUrl" :alt="skill" v-for="(imageUrl, skill) in currentList" :key="skill">
        </div>

    

    </div>

    
    


</template>

<style src="../../assets/css/skills.css">

</style>