import React from "react";
import ReactDOM from "react";
function Cards(props)
{
    return(<a href={props.url} target="blank"><div className="card">
           <img className="cardimg" src={props.src} ></img>
           <h1>{props.header}</h1>
        </div></a>
          )
}
export default Cards;