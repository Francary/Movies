import { getApi } from "../utils/conexionAPI";
import { useState , useEffect } from "react";
import { ActoresCard } from "./ActoresCard";

// const pathURL = '/movie/popular' // Top 20 Peliculas 
// const pathURL = `/movie/823464/credits` // Actores de Peliculas

// const pathURL = `/tv/128306/credits` // Actores de TV


// const pathURL = `/movie/823464/videos` // Consulta los Trailers

// const pathURL = `/person/popular` // Top 20 Actores

// const pathURL = `/person/${id}/external_ids` // Consultar Redes Sociales de Actores
// const pathURL = `/person/${id}/movie_credits` // Consultar Redes Sociales de Actores

const pathURL = '/search/multi?query=';

const buscar = "Martin"

const Prueba = () => {    
    const [prueba ,setPrueba] = useState([])
    
    useEffect(() => {    
        getApi(`${pathURL}${buscar}`).then((data =>{ 
            console.log(data);
            setPrueba(data)
        })
    )},[])

    
 
    return (
    

        <h1>{prueba.facebook_id}</h1>
    
   
        
        
)

}


export {
    Prueba
}


