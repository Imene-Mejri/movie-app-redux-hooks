


import {useDispatch} from 'react-redux'
import { searchhandler } from "../Redux/Action"
 import Rating from './Rating'



export default function SearchFrorm() {
  
   
  
    const dispatch = useDispatch()

   const  searchmovie =(e)=>{
       dispatch(searchhandler(e.target.value))
   }

    



   
    return (
        <div className='searchfrom'>
            <input type="text"
                classNameName="form-control"
                name='searchText'
                placeholder="Search Movies ,TV Series"
                onChange={searchmovie }
              
            />
            



            <button className="btn btn-secondary" type="button">
                <i className="fa fa-search"></i>
            </button>
            <div>
            <button><i class="fas fa-star"></i></button>
            <button> <i class="fas fa-star"></i></button>
            <button> <i class="fas fa-star"></i></button>
            <button> <i class="fas fa-star"></i></button>
            <button> <i class="fas fa-star"></i></button>
            </div>
          <div><Rating/></div>
        </div>
    )
}
