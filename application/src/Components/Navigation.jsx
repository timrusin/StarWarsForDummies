import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Navigation.css'

const Navigation = ()=>{
    return(
    <nav>
        <Link to ='/'><div className="Home-Logo">Star Wars: the basics</div></Link>
        <div className="buttons">
        <Link to ='/characters'><button>characters</button></Link>  
        <Link to ='/planets'><button>planets</button></Link>
        <Link to ='/movies'><button>movies</button></Link>
        </div>
    </nav>
    )
}

export default Navigation