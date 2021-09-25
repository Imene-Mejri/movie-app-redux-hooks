import React,{useEffect,dispatch}  from 'react'
import Movie from './Movie'
import {useSelector } from 'react-redux'
import Rating from "./Rating";
import {  searchhandler, ratehandller } from '../Redux/Action';



import Add from './Add'

export default function MovieList() {
   
    const movies =useSelector(state=>state.movies)
 
    const searchtitle = useSelector(state => state.searchtitle)
    const searchRate=useSelector(state=>state.searchRate)
    
    useEffect(()=>{
        dispatch( searchhandler())
      },[searchtitle,movies])


    useEffect(()=>{
        dispatch(ratehandller()
    )},[searchRate,movies])


    return (
        <div className='movielist'>
            {
               
                movies
                .filter((el)=>el.title.toLowerCase().includes(searchtitle.toLowerCase().trim()) && el.Rating >= 2 )
                .map((el) => <Movie Onemovie={el}/>)
                
            }
       <Add/>
            
        </div>
    )
}
