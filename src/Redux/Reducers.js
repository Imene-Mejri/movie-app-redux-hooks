
import { ADD,SEARCH,SEARCH_RATE} from "./Action-types";


const initiatestate = {
    movies: [{
        id: Math.floor(Math.random() * 10) + 1,
        title: 'ELSA',
        Rate:2,
        Description: 'Tumblr is a place to express yourself, discover yourself, and bond over the stuff you love',
        picture: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Frozen_2_poster.jpg'
    },

    {
        id: Math.floor(Math.random() * 10) + 1,
        title: 'Aladin',
        Rate:4,
        Description: ' Aladdin is a 1992 American animated musical fantasy comedy film produced by Walt Disney Feature Animation and released by Walt Disney ',
        picture: 'https://static.parade.com/wp-content/uploads/2019/11/aladin-disney-plus.jpg'},
    {
        id: Math.floor(Math.random() * 10) + 1,
        title: 'The joyful legacy ',
        Rate:3,
        Description: 'The joyful legacy of Saturday-morning cartoons is alive and well in 2021. The technology of animation just keeps getting better and better, even if sometimes it can veer towards uncanny valley territory (looking at you, CATS). But more often than not, animated movies give us the unique gift of whimsical renderings of our wildest dreams. With the state of the world being what it is, we may need silly, goofy, beautiful cartoons now more than ever.',
        picture: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/indexx-1610653309.jpg'
    },
    {
        id: Math.floor(Math.random() * 10) + 1,
        title: 'spider men',
        Rate:5,
        Description: 'Amazing new fan art turns Spider-Man into a Pixar character and we need Disney and Sony to figure out a plan to greenlight this immediately!', 
        picture:'https://middleeast.in-24.com/entertainment/content/uploads/2021/08/17/5f165781f9.jpg',
    },
    {
        id: Math.floor(Math.random() * 10) + 1,
        title: 'trailer 4',
        Rate:3,
        Description: 'BEST UPCOMING ANIMATION AND FAMILY MOVIES 2021 (Trailers)',
        picture: 'https://i.ytimg.com/vi/IkkZDcGNOpM/maxresdefault.jpg'},
        {
            id: Math.floor(Math.random() * 10) + 1,
            title: '101 Dalmatians ',
            Rate:1,
            Description: 'Set in London, Dalmatians Pongo and Perdita welcome a litter of 15 puppies. When Cruella De Vil wants to buy them all, owner Roger declines her offer. As a result, Cruella has her henchmen Horace and Jasper steal them along with other pups so she can make a fur coat.',
            picture: 'https://static.parade.com/wp-content/uploads/2019/11/101-dalmations-disney.jpg'}
    ],
  searchtitle:'',
  searchRate:1,
};
    
    export const moviereducer =(state=initiatestate,action)=>{
        switch (action.type){
            case SEARCH :
                return{
                  ...state,searchtitle:action.payload
                }

                case ADD:
                    return{
                        ...state,movies:[...state.movies,action.payload]
                    }
                    case SEARCH_RATE: return{
                        ...state,
                        searchRate:action.payload
                    }
              default:return state
              }
          }
              
      