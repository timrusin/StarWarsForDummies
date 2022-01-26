import React, { useState, useEffect } from "react";
import '../css/PlanetCard.css'
import { Container,  Spinner } from "reactstrap";
import { Link } from "react-router-dom";

const Planets = ()=>{

    const [planets, setPlanets]= useState()

    useEffect(()=> {
       fetch('https://swapi.dev/api/planets/?page=1')
       .then((res)=>res.json())
       .then((json)=>setPlanets(json))
   },[])
   if(!planets) {
    return (
      <Container>
        <Spinner color="warning" type="border"></Spinner>
      </Container>
      )
   }

   const planetsArray = planets.results
   
   return(
   <Container>
        <div className="page-buttons">
          <Link to='/planets/page2'>
            <button className="prev-next-btn">next</button>
          </Link>
        </div>
     <div className="card-container">
       {planetsArray.map((item)=> {
        return(
          <Container key={ item.name }>
            <div className="planet-container">
              <h1 className="planet-name">{ item.name }</h1>
                <ul className="planet-specs-list">
                    <li>Climate: { item.climate }</li>
                    <li>Diameter: { item.diameter } km</li>
                    <li>Gravity: { item.gravity } (1 is equal to normal gravity)</li>
                    <li>Orbital Period: { item.orbital_period } days to orbit local star</li>
                    <li>Population: { item.population }</li>
                    <li>Rotation Period: { item.rotation_period } hours</li>
                    <li>Surface Water: { item.surface_water } %</li> 
                    <li>Terrain: { item.terrain }</li>
                </ul>
            </div>
          </Container>
            )
       })}
       <div className="page-buttons">
          <Link to='/planets/page2'>
            <button className="prev-next-btn-btm">next</button>
          </Link>
        </div>
     </div>
   </Container>
 )
}

export default Planets