import './assets/css/style.css'
function PortfolioSection(){
    return(
        <div className="projects_section" id="projects_section">

            <div className="project_header">Projects</div>

            <div className="project_entry">
                <div className="project_text"> 
                    <div className="project_title"> 16 bit CPU Simulation</div>
                    <div className="project_tools"> <p>Made With:</p> <a href="https://circuitverse.org/"><img src="assets/images/circuitverse.svg" alt="CircuitVerse"/></a> </div>
                    <div className="project_description">
                        I built a fully functional 16 bit cpu simulation as a project while taking a computer systems course in 2023.
                        It is capable of basic arithmetic operations, branching and looping operations. 
                    </div>

                    <div className="project_additional_options">
    
                        
                         
                        <a href="https://circuitverse.org/simulator/embed/16-bit-computer-0fb6f5a1-d679-4356-bef7-e8b6bf74a1d1" className="github_button">
                            <img src="assets/images/external_link.svg" alt="View"/>
                            <p>View</p>
                        </a>            
                            
                       
                    </div>

                </div>

                <div className="project_image">
                    <img src="assets/images/16-bit_cpu.png" alt="16-bit CPU Simulation"/>
                </div>
                
            </div>
            
            <div className="project_entry">
                <div className="project_text">
                    <div className="project_title"> Basic Data Structures</div>
                    <div className="project_tools"> 
                        <p>Made With:</p> 
                        <a href=""><img src="assets/images/java_logo.svg" alt="Java"/></a> 
                        <a href=""><img src="assets/images/git_logo.svg" alt="Git"/></a>
                    </div>  
                    <div className="project_description">
                        It consists of implementation of some data structures such as Trees,Graphs and Heaps
                        It is capable of basic arithmetic operations, branching and looping operations. 
                    </div>

                    <div>
                        <a href="https://github.com/DAjayi27/DataStructures" className="github_button">
                            <img src="assets/images/github-mark-white.svg" alt="GitHub"/>
                            <p>Github</p>
                        </a> 
                    </div>
                </div>
        
                <div className="project_image">
                    <img src="assets/images/datastructures.jpg" alt="Basic Data Structures"/>
                </div>
            </div>

            <div className="project_entry">
                <div className="project_text">
                    <div className="project_title"> Graph Visualizer</div>
                    <div className="project_tools"> 
                        <p>Made With:</p> 
                        <a href=""><img src="assets/images/java_logo.svg" alt="Java"/></a> 
                        <a href=""><img src="assets/images/git_logo.svg" alt="Git"/></a>
                    </div>

                    <div className="project_description">
                        This is a Visualization program that can visually represent the connections in Graph. The main goal of the project
                        is to make  debugging and analyzing graph connections easier and faster, whenever i use them in any other project.It works well
                        with both directed and undirected graphs.
                    </div>

                    <div>
                        <a href="https://github.com/DAjayi27/AlgoVizualizer" className="github_button">
                            <img src="assets/images/github-mark-white.svg" alt="GitHub"/>
                            <p>Github</p>
                        </a> 
                    </div>
                </div>
        
                <div className="project_image">
                    <img src="assets/images/graph_viz.png" alt="Graph Visualizer"/>

                    <div className="project_additional_options">

                    </div>
                </div>
            </div>

            <div className="project_entry">

                <div className="project_text">
                    <div className="project_title"> CSV to SQL parser</div>
                    <div className="project_tools"> 
                        <p>Made With:</p> 
                        <a href=""><img src="assets/images/python_logo.svg" alt="Python"/></a> 
                        <a href=""><img src="assets/images/git_logo.svg" alt="Git"/></a>
                    </div>
                    <div className="project_description">
                        I needed a way to convert a csv file into insert statements for a database table.
                        It currently only works with MySQL 
                    </div>

                    <div>
                        <a href="https://github.com/DAjayi27/SQL-Parser" className="github_button">
                            <img src="assets/images/github-mark-white.svg" alt="GitHub"/>
                            <p>Github</p>
                        </a> 
                    </div>

                </div>
            
                <div className="project_image">
                    <img src="assets/images/sql_parser.png" alt="CSV to SQL Parser"/>

                 
                </div>
            </div>

            



        </div>
    )
}

export default PortfolioSection