import React, {useState, useEffect } from "react";
import '../CSS/Planets.css'
import { Container } from "reactstrap";
import PlanetCard from "../Components/PlanetCard";

const Planets = ()=>{
    const [planets, setPlanets]= useState()

    useEffect(()=> {
       fetch('https://swapi.dev/api/planets/?page=1')
       .then((res)=>res.json())
       .then((json)=>setPlanets(json))
   },[])
   if(!planets) {
       return <p>Loading.......</p>
   }
   console.log(planets)
   const planetsArray = planets.results
   console.log(planetsArray)
   
   return(
   <Container>
     <div className="card-container">
       {planetsArray.map((item, i)=> {
           return (
         <div className="planets-list">
           <PlanetCard {...item} key={i} arrayIndex={i}/>
         </div>
             )
       })}
     </div>
   </Container>
 )
}

export default Planets