import { getApi } from "../utils/conexionAPI";
import { useState , useEffect } from "react";
import { ActoresCard } from "./ActoresCard";

// const pathURL = '/movie/popular' // Top 20 Peliculas 
// const pathURL = `/movie/823464/credits` // Actores de Peliculas
// const pathURL = `/movie/823464/videos` // Consulta los Trailers

const pathURL = `/person/popular`

const Prueba = () => {    
    const [actores , setActores] = useState([])
    
    useEffect(() => {    
        getApi(pathURL).then((data =>{ 
            console.log(data.results);
            setActores(data.results)
        })
    )},[])

 
    return (
    
    <ul className="grid max-width">
        {actores.map((actor)=>(
            <ActoresCard key={actor.id} actorMap={actor}/> 
        ))}
    </ul>
        
        
)

}


export {
    Prueba
}


