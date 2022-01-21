import React from "react";
import { Link } from "react-router-dom";

const CharacterCard=(props)=>{
    const {name} = props

    return(
        <Link to ={`/character/${props.arrayIndex}`}>
            <h1>{name}</h1>
        </Link> 
    )
}
export default CharacterCard