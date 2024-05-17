import { PeliculasCard } from "./PeliculasCard"
import {getApi} from '../utils/conexionAPI.js'
import { useState, useEffect } from "react"
import Slider from "react-slick";
import { settings } from "../utils/slider.js";


const pathURL = '/movie/popular'

const PeliculasPopular = () => {

    const [popular , setPopular] = useState([])

    useEffect(() =>{

        getApi(pathURL).then((data =>{
            // console.log(data.results);
            setPopular(data.results)
            
        }))
    },[])
   
    return(
     
        <div className='max-width  slider-container'>
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