import { PeliculasCard } from "./PeliculasCard.jsx"
import {getApi} from '../utils/conexionAPI.js'
import { useState, useEffect } from "react"
import Slider from "react-slick";
import { settings } from "../utils/slider.js";
import { useParams } from "react-router-dom";




const PeliculasDelActor = () => {
    
    const [pelicula , setPelicula] = useState([])
    const{id} = useParams()
    const pathURL = `/person/${id}/movie_credits`
  
    useEffect(() =>{
        
        getApi(pathURL).then((data =>{
            // console.log(data.cast);
            setPelicula(data.cast)
            
            
        })
    )},[])
    if(pelicula.length>0)
   
    return(
     
        <div className='max-width  slider-container'>
            <h2 className="max-width mb-3">Peliculas:</h2>
            {pelicula.length>1 ?

             (   <Slider {...settings}>
                {pelicula.map((pelicula) =>(
                    <PeliculasCard key={pelicula.id} peliculaMap = {pelicula}/>
                ))}
            </Slider>)
            :
         (   pelicula.map((pelicula) =>(
                <PeliculasCard key={pelicula.id} peliculaMap = {pelicula}/>
            )))
            }
        </div>
              
    )

}


export {
    PeliculasDelActor
}