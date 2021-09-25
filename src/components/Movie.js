import React from 'react'
import Rating from './Rating'


export default function Movie({Onemovie}) {
   console.log(Onemovie.picture)
    return (
        <div className='card'>
              <img src={Onemovie.picture}/>
              <div className='container'>
              <h2> {Onemovie.title}</h2> 
             
              </div>
             
              <div className='Description'>
              <p>{Onemovie.Description}</p>
            
              </div>
              <div className='rate'>
              <Rating Rating={Onemovie.Rate}/>
                 
              </div>

            
        </div>
    )
}
