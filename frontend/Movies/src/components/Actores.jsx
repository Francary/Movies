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
            // console.log(data.cast );
            setActores(data.cast)
        })
    )},[])
    if (actores.length === 0) return null
 
    return (
        <div className="max-width">
            <h2>Actors:</h2>
            <div className="container-actores">

            {actores.map((actor)=>(
                
                <ActoresCard key={actor.id} actorMap={actor} classImg={classImg}/>
                
            ))}
            </div>
            
        </div>
        
)
}

export {
    Actores
}