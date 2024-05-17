import { getApi } from "../utils/conexionAPI.js"
import { useState, useEffect } from "react"
import { ActoresCard } from "./ActoresCard.jsx"
import Slider from "react-slick";
import { settings } from "../utils/slider.js";

const pathURL = `/person/popular` // Consulta de Actores
const classImg ='img-medium'

const ActoresPopular = () =>{    
    const [actores , setActores] = useState([])
    
    useEffect(() => {    
        getApi(pathURL).then((data =>{ 
            // console.log(data);
            setActores(data.results)
        })
    )},[])

 
    return (
     
        <div className='max-width  slider-container'>
            <Slider {...settings}>
                {actores.map((actor)=>(
                    <ActoresCard key={actor.id} actorMap={actor} classImg={classImg}/> 
                ))}
            </Slider>
        </div>
        
      
)
}

export {
    ActoresPopular
}