import './assets/css/style.css'
import data from './assets/site_data/skills_list.json'



function SkillsSection(){
    return(
        <div className="skill_section" id="skill_section">

            <div className="skill_title" >My Skills</div>

            <div className="skill_list">
            
                {Object.entries(data).map(mapValues)}

            </div>
            
        </div>
    )
}

function mapValues(items){
    return(
        <div className="hidden" key={items[0]}>
            <a href="#"><img src={items[1]} alt={items[0]}/></a>
        </div>
    )
}




export default SkillsSection