import { PeliculasCard } from "./PeliculasCard"
import {getApi} from '../utils/conexionAPI.js'
import { useState, useEffect } from "react"

let pathURL = '/discover/movie'


const PeliculasGrid = ()=>{

    const [peliculas , setPeliculas] = useState([])

    useEffect (() => {
        getApi(pathURL).then((data)=>{
            console.log(data.results);
            setPeliculas(data.results)
        })
        
    },[])

    return (
        <>
        <ul className="grid max-width">
            {peliculas.map((pelicula) =>(

                <PeliculasCard key={pelicula.id} peliculaMap = {pelicula}/>
            ))}

        </ul>
        </>
    )
}

export { 
    PeliculasGrid
}