import { PeliculasCard } from "./PeliculasCard"
import {getApi} from '../utils/conexionAPI.js'
import { useState, useEffect } from "react"
import Slider from "react-slick";
import { settings } from "../utils/slider.js";


const pathURL = '/movie/popular'
const idioma = "?language=es-AR"

const PeliculasPopular = () => {

    const [popular , setPopular] = useState([])

    useEffect(() =>{

        getApi(`${pathURL}${idioma}`).then((data =>{
            // console.log(data.results);
            setPopular(data.results)
            
        }))
    },[])
   
    return(
        
        <div className='max-width  slider-container'>
        <h2 className="max-width mt-5">Top 20 Peliculas :</h2>
            <Slider {...settings}>
                {popular.map((pelicula) =>(
                    <PeliculasCard key={pelicula.id} peliculaMap = {pelicula}/>
                ))}
            </Slider>
        </div>
        
       
    )

}


export {
    PeliculasPopular
}