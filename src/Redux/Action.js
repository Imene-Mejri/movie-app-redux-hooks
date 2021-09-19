import {SEARCH} from './Action-types'



const searchhandle =({ID})=>{
    return {
    type: SEARCH,
    payload:{ID}
}
}