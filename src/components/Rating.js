
import { useDispatch } from 'react-redux'
import {ratehandller } from '../Redux/Action'

export default function Rating ({Rating}){
  
  const dispatch=useDispatch()

    
  const stars = (x) => {
        let starsArray = [];
        for (let i = 1; i <= 5; i++) {
          if (i <= x) {
            starsArray.push(
              <span key={i} onClick={()=> dispatch(ratehandller(i))} >
                  <i class="far fa-star" color="yellow"></i>
                
              </span>
            );
          } else {
            starsArray.push(
              <span key={i} onClick={()=> dispatch(ratehandller(i))} >
                <i class="far fa-star" color="white"> </i>
              </span>
            );
          }
        }
        return starsArray;
      };
      return <div>{stars(Rating)}</div>;
    };