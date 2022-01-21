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
        return <p>Loading....</p>
    }
    const moviesArray = movies.results
    console.log(moviesArray)
    return(
    <Container>
        <div className="card-container">
            {moviesArray.map((item, i)=>{
            return(
                <div>
                    <MovieCard {...item} key={i} arrayIndex={i}/>
                </div>
                )
            })}
        </div>
    </Container>
    )
}

export default Movies