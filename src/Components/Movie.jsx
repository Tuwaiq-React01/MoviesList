import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const Movie = () => {
	const apiUrl =
		'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9e058083ea188da98174ef4a8d1c2f31&page=1';

	const [movies, setMovies] = useState([]);

	let moviesDetails = async () => {
		const fetchMovies = await axios.get(apiUrl);
		const movieData = fetchMovies.data;
        setMovies(movieData.results)
	};

    useEffect(()=>{
        try {
            moviesDetails()
        } catch (error) {
            console.log(error);
        }
    },[])

	return movies.map(movie=>{return <MovieCard key = {movie.id} {...movie}/>})
    ;
};

export default Movie;
