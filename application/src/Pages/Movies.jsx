import React, { useState, useEffect } from "react";
import '../CSS/Movies.css'
import { Container } from "reactstrap";
import MovieCard from "../Components/MovieCard"

const Movies = ()=>{
    const [movies, setMovies] = useState()

    useEffect(()=> {
        fetch('https://swapi.dev/api/films/')
        .then((res)=>res.json())
        .then((json)=>setMovies(json))
    },[])
    if(!movies){
        return (
        <Container>
          <p>Loading.......</p>
        </Container>
        )
    }
    const moviesArray = movies.results
    console.log(moviesArray)
    return(
    <Container>
        <div className="card-container">
            {moviesArray.map((item, i)=>{
            return(
                <div>
                    <MovieCard key={i} arrayIndex={i} {...item}/>
                </div>
                )
            })}
        </div>
    </Container>
    )
}

export default Movies