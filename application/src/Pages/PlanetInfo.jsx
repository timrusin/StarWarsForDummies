import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import '../CSS/PlanetInfo.css'

const PlanetInfo = ()=>{
    let { index } = useParams()
    const int = parseInt(index) + 1
    const [planet, setPlanet] = useState(null)

    const URL = 'https://swapi.dev/api/planets/'
    const newURL = URL + int

        useEffect(()=>{
            fetch(newURL)
            .then((res)=> res.json())
            .then((json)=> {
                setPlanet(json)
            })
        },[])
        if (!planet){
            return <p>Loading...</p>
        }

    return(
    <Container>
        <h1>{planet.name}</h1>
        <ul>
                <li>Climate: {planet.climate}</li>
                <li>Diameter: {planet.diameter}</li>
                <li>Gravity: {planet.gravity}</li>
                <li>Orbital Period: {planet.orbital_period}</li>
                <li>Population: {planet.population}</li>
                {/* <li>Residents: {planet.residents}</li> */}
                <li>Rotation Period: {planet.rotation_period}</li>
                <li>Surface Water: {planet.surface_water}</li> 
                <li>Terrain: {planet.terrain}</li>
            
            </ul>
        <Link to='../planets'><button>Back</button></Link> 
    </Container>
    )
}

export default PlanetInfo