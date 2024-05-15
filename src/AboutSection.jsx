import './assets/css/style.css'

function AboutSection(){
    return(
        <div className="about_section" id = "about_section" >

           <div className="info_section">
            
                <div className="name_intro">
                    <span className="greeting_text">Hi,I'm</span> 
                    <br/> 
                    <span className="name" id="name">Darasimi</span>
                </div>

                <div className="extended_text">   
                    Second year CS student at Dalhousie university.
                </div>

                <div className="socials">
                    <a href="assets/resume/DarasimiAjayiResume.pdf" className="resume_download" download="">My Resume</a>
                    <a href="https://github.com/DAjayi27"><img src="assets/images/github-mark-white.svg" alt="GitHub"/></a>
                    <a href="https://www.linkedin.com/in/darasimiajayi/"><img src="assets/images/linkedin_logo.svg" alt="LinkedIn"/></a>
                    <a href="mailto:dr716500@dal.ca"><img src="assets/images/outloock_logo .svg" alt="Email"/></a>
                </div>
           </div>

           <div className="profile_photo">
        
                <img src="assets/images/placeholder.png" alt="Profile Photo"/>
           </div>

        </div>
    )
}

export default AboutSection