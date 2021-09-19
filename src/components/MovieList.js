import React from 'react'
import Movie from './Movie'
import {useSelector} from 'react-redux'

export default function MovieList() {
    const movies =useSelector(state=>state.movies)
    return (
        <div>
            {
                movies.map((el) => <Movie Onemovie={el}/>)
            }

            
        </div>
    )
}
