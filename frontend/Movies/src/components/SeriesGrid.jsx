import {getApi} from '../utils/conexionAPI.js'
import { useState, useEffect } from 'react'
import { SeriesCard } from './SeriesCard.jsx'

const pathURL = '/discover/tv'
const SeriesGrid = () =>{

    const [series , setSeries] = useState([])
    const [pageNumero, setPageNumero] = useState(1);

    useEffect(() =>{
        getApi(`${pathURL}?page=${pageNumero}`).then((data) =>{
            // console.log(data.results);
            setSeries(data.results)
    
    
        })

        
    },[pageNumero])

    const handleNextPage = () => {
        setPageNumero((page) => page + 1); 
      };
    const handleBackPage = () => {
        setPageNumero((page) => page === 1 ? page : page - 1); 
      };

    return(

        <>
        <ul className="grid max-width">
            {series.map((serie) =>(

                <SeriesCard  key={serie.id} serieMap = {serie}/>
            ))}

        </ul>
        <div className="d-flex max-width justify-content-center align-items-center ">
            <button className="btn btn-danger m-3" onClick={handleBackPage}>Back Page</button>
            <button className="btn btn-primary m-3" onClick={handleNextPage}>Next Page</button>
        </div>
        </>
    )
        

    
}

export{
    SeriesGrid
}