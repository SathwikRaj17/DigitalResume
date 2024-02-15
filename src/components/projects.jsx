import React from "react";
import ReactDOM  from "react";
import Cards from "./cards"
import Projects_info from './projects-info'
function Projects()
{
    return(<div className="test">
        <h1 className="ProjectsHeader">Projects</h1>
        <div className="cardholder">
        {Projects_info.map((Projects) => (
        <Cards header={Projects.header} url={Projects.url} src={Projects.src} key={Projects.id}/>
      ))}
        </div>
    </div>)
}
export default Projects