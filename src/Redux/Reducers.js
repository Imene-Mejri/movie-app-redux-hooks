
import { SEARCH } from "./Action-types";


const initiatestate = {
    movies: [{
        id: Math.floor(Math.random() * 10) + 1,
        title: 'ELSA',
        Description: 'Tumblr is a place to express yourself, discover yourself, and bond over the stuff you love',
        Picture: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Frozen_2_poster.jpg'
    },

    {
        id: Math.floor(Math.random() * 10) + 1,
        title: 'Barbie Big city',
        Description: 'Barbie & Chelsea: The Lost Birthday is the 38th Barbie movie. It was released on April 16, 2021, on Netflix (USA). It is the first movie to have Chelsea in a starring role. The movie follows Chelsea and her family as they go on an adventure cruise for Chelsea is 7 birthday.',
        Picture: 'https://static.wikia.nocookie.net/barbie-movies/images/6/62/Barbie_%26_Chelsea_The_Lost_Birthday.png/revision/latest/top-crop/width/360/height/450?cb=20210220211627'
    },

    {
        id: Math.floor(Math.random() * 10) + 1,
        title: 'The joyful legacy ',
        Description: 'The joyful legacy of Saturday-morning cartoons is alive and well in 2021. The technology of animation just keeps getting better and better, even if sometimes it can veer towards uncanny valley territory (looking at you, CATS). But more often than not, animated movies give us the unique gift of whimsical renderings of our wildest dreams. With the state of the world being what it is, we may need silly, goofy, beautiful cartoons now more than ever.',
        Picture: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/indexx-1610653309.jpg'
    },
    {
        id: Math.floor(Math.random() * 10) + 1,
        title: 'spider men',
        Description: 'Amazing new fan art turns Spider-Man into a Pixar character and we need Disney and Sony to figure out a plan to greenlight this immediately!', Picture: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2021/01/Spider-Man-As-A-Pixar-Movie-Looks-Amazing-We-Need-It-Right-Now.jpg'
    },
    {
        id: Math.floor(Math.random() * 10) + 1,
        title: 'trailer 4',
        Description: 'BEST UPCOMING ANIMATION AND FAMILY MOVIES 2021 (Trailers)',
        Picture: 'https://i.ytimg.com/vi/IkkZDcGNOpM/maxresdefault.jpg'}
    ]};
    
    export const Moviereducer =(state=initiatestate,action)=>{
        switch (action.type){
            case SEARCH :
                return{
                   
                    ...state,movies:[...state.movies,action.payload],
                }
                default :
                return state
        }
    }