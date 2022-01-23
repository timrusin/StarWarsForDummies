import React, {useState, useEffect } from "react";
import { Container, Spinner } from "reactstrap";
import { Link } from "react-router-dom";


const PlanetsPageTwo = ()=>{
    const [planets, setPlanets]= useState()

    useEffect(()=> {
       fetch('https://swapi.dev/api/planets/?page=2')
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
   console.log(planets)
   const planetsArray = planets.results
   console.log(planetsArray)
   
   return(
   <Container>
     <div className="card-container">
       {planetsArray.map((item, i)=> {
        return(
          <Container>
          <div className="planet-container">
            <h1 className="planet-name">{item.name}</h1>
              <ul className="planet-specslist">
                  <li>Climate: {item.climate}</li>
                  <li>Diameter: {item.diameter} km</li>
                  <li>Gravity: {item.gravity} (1 is equal to normal gravity)</li>
                  <li>Orbital Period: {item.orbital_period} days to orbit local star</li>
                  <li>Population: {item.population}</li>
                  {/* <li>Residents: {item.residents}</li> */}
                  <li>Rotation Period: {item.rotation_period} hours</li>
                  <li>Surface Water: {item.surface_water} %</li> 
                  <li>Terrain: {item.terrain}</li>
              </ul>
        </div>
    </Container>
            )
       })}
        <div className="page-buttons">
          <Link to='/planets/page1'>
            <button>previous</button>
          </Link>
          <Link to='/planets/page3'>
            <button>next</button>
          </Link>
        </div>
     </div>
   </Container>
 )
}

export default PlanetsPageTwo