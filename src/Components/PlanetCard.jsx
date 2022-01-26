import React from "react";
import { Link } from "react-router-dom";

const PlanetCard=(props)=>{
    const { name } = props

    return(
        <Link to ={`/planet/${props.arrayIndex}`}>
            <h1>{name}</h1>
        </Link>
    )
}
export default PlanetCard