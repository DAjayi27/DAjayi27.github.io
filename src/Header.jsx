import './assets/css/style.css'

function Header(){
    return(
        <header className="header" id = "header">
            <div className="menu" >
                <a href="#about_section" className="menu_items">About </a>
                <a href="#skill_section" className="menu_items">Skills</a>
                <a href="#projects_section" className="menu_items">Projects</a>
            </div>
        </header>
    )
}

export default Header