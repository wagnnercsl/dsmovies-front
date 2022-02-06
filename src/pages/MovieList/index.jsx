import React from 'react';
import MovieCard from '../../components/MovieCard';
import Pagination from '../../components/Pagination';

const movies = [
    {
        score: 3.3, 
        count: 3, 
        title: 'Venom: Tempo de Carnificina', 
        image: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg'
    },
    {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    }
];

const MovieList = () => {
    return (
        <>
          <Pagination />
          {movies.map((movie) => 
            <MovieCard movie={movie} />
          )}
        </>
    );
}

export default MovieList;