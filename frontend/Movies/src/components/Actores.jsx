import { getApi } from "../utils/conexionAPI.js"
import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import { ActoresCard } from "./ActoresCard.jsx"

const Actores = ({url, classImg}) =>{
    
    const [actores , setActores] = useState([])
    const {id} = useParams()
    
    useEffect(() => {

        const pathURL = `/${url}/${id}/credits` // Consulta de Actores

      
        getApi(`${pathURL}`).then((data =>{ 
            // console.log(data.cast);
            setActores(data.cast)
        })
    )},[])

 
    return (
        <  >
        <h2 className="max-width mb-3">Actores:</h2>
        <div className="container-actores max-width">

        {actores.map((actor)=>(
            
            <ActoresCard key={actor.id} actorMap={actor} classImg={classImg}/>
            
        ))}
        </div>
        
        </>
        
)
}

export {
    Actores
}