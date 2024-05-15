import AboutSection from './AboutSection.jsx'
import PortfolioSection from './PortfolioSection.jsx'
import SkillsSection from './SkillsSection.jsx'
import './assets/css/style.css'

function Content(){
    return(
        <main className="main_section" id = "main_section">
            <AboutSection></AboutSection>
            <SkillsSection></SkillsSection>
            <PortfolioSection></PortfolioSection>
        </main>
    )
}

export default Content