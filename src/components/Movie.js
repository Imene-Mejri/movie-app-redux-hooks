import React from 'react'


export default function Movie({Onemovie}) {
   
    return (
        <div>
              <img src={Onemovie.Picture}/>
              <h2> {Onemovie.title}</h2> 
              <p>{Onemovie.description}</p>

              
           
            
        </div>
    )
}
