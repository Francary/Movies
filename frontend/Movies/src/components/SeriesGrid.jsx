import {getApi} from '../utils/conexionAPI.js'
import { useState, useEffect } from 'react'
import { SeriesCard } from './SeriesCard.jsx'

const pathURL = '/discover/tv'
const SeriesGrid = () =>{

    const [series , setSeries] = useState([])

    useEffect(() =>{
        getApi(pathURL).then((data) =>{
            // console.log(data.results);
            setSeries(data.results)
    
    
        })

        
    },[])


    return(

        <>
        <ul className="grid max-width">
            {series.map((serie) =>(

                <SeriesCard  key={serie.id} serieMap = {serie}/>
            ))}

        </ul>
        </>
    )
        

    
}

export{
    SeriesGrid
}