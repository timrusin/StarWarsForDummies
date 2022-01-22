import React from "react";
import '../CSS/Home.css'
import { Container } from "reactstrap";

const Home = ()=>{

    return(
    
        <div className="wrapper">
            <div className="crawl">
                <h1 className="opening-title">
                Star Wars for Dummies
                </h1>
                <div className="crawl-sections">
                OK, you may not be a dummy, but you may have also NEVER seen a Star Wars movie in your life. 
                </div>
                <div className="crawl-sections">
                Star Wars for Dummies can be a great resource to learn about Characters from the films, planets,
                weapons, starships, and even just the films themselves. (First six episodes)
                </div>
                <div className="crawl-sections">
                Star Wars for Dummies can also be enjoyed by Star Wars enthusiasts as well.  
                </div>
                <div className="crawl-sections">
                Feel free to nerd out on here with all the specs you can handle.
                </div>
                <div className="crawl-sections">
                May the force be with you.........
                </div>

            </div> 
        </div>
  
    )
}

export default Home