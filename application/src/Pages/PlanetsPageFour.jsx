import React, {useState, useEffect } from "react";
import { Container } from "reactstrap";
import PlanetCard from "../Components/PlanetCard";

const PlanetsPageFour = ()=>{
    const [planets, setPlanets]= useState()

    useEffect(()=> {
       fetch('https://swapi.dev/api/planets/?page=4')
       .then((res)=>res.json())
       .then((json)=>setPlanets(json))
   },[])
   if(!planets) {
    return (
      <Container>
        <p>Loading.......</p>
      </Container>
      )
   }
   console.log(planets)
   const planetsArray = planets.results
   console.log(planetsArray)
   
   return(
   <Container>
     <div className="card-container">
       {planetsArray.map((item, i)=> {
        return(
            <div className="planets-list">
            <PlanetCard key={i} arrayIndex={i+30} {...item}/>
            </div>
            )
       })}
     </div>
   </Container>
 )
}

export default PlanetsPageFour