import React from "react";
import { Link } from "react-router-dom";

const MoiveCard=(props)=>{
    const {title} = props

    return(
        <Link to={`/movie/${props.arrayIndex}`}>
            <h1>{title}</h1>
        </Link>
    )
}

export default MoiveCard