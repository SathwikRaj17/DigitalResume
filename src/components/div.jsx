import React from "react";
import ReactDOM  from "react";
import Cards from "./cards"
import Projects from './projects'
function Div()
{
    return(<div className="test">
        <h1 className="ProjectsHeader">Projects</h1>
        <div className="cardholder">
        {Projects.map((Projects) => (
        <Cards header={Projects.header} url={Projects.url} src={Projects.src} key={Projects.id}/>
      ))}
        </div>
    </div>)
}
export default Div