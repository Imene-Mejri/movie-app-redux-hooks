import {SEARCH,ADD,SEARCH_RATE} from './Action-types'




 export const searchhandler =(title)=>{
    return {
    type: SEARCH,
    payload:title
   
   
}

}

 export const addhandler =(nwemovie)=>{
    return{
        type:ADD,
        payload:nwemovie
    }
}
export const ratehandller=(payload)=>{
    return{
        type:SEARCH_RATE,
        payload
    }
}