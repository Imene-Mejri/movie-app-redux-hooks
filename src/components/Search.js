


/* import {useState} from 'react'

import {useDispatch, useSelector } from 'react-redux' */

export default function SearchFrorm() {
  
      /* const movie=useSelector(state=>state.text) ;
        const dispatch=useDispatch()
  const [search,setsearch]=useState();

  const onChange =()=>{
        dispatch (searchMovie(Text))
  } */
  

   
    return (
        <div className='searchfrom'>
            <input type="text"
                classNameName="form-control"
                name='searchText'
                placeholder="Search Movies ,TV Series"
           /*      value={search}
              onChange={(e)=>setsearch(e.target.value)}
                */
            />
            


            <button /* onClick={onChange} */ className="btn btn-secondary" type="button">
                <i className="fa fa-search"></i>
            </button>


        </div>
    )
}
