import React from 'react';
import Movie from './Movie';
import imgOne from '../img/error-page-layout-vector-design-website-page-creative-concept-page-you-requested-could-not-be-found-oops-error-page-error-page-125901178.jpg'

const Movies = (props) => {
    const {movies=[] , SearchMovie}  = props;

    return (
        <div className='movies' >
            {movies.length ? (movies.map(movie =>{
             return   <Movie key={movie.imdbID} {...movie} />
            })):(
              <img className='imgOne' src={imgOne} alt="" />
            )}
        </div>
    );
};

export default Movies;