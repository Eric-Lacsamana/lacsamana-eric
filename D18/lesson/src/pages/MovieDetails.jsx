import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(()=> {
        // const fetchMovieDetails = 
    },[])
  return (
    movie ? (
        <div className="mt-5 text-center">
          <h1>{movie.Title}</h1>
          <p>{movie.Plot}</p>
          <img src={movie.Poster} alt={movie.Title} />
          <p><strong>Released:</strong> {movie.Released}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )
  )
}
