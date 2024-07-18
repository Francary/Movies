import { PeliculasCard } from "./PeliculasCard"
import {getApi} from '../utils/conexionAPI.js'
import { useState, useEffect } from "react"

let pathURL = '/discover/movie'


const PeliculasGrid = ()=>{

    const [peliculas , setPeliculas] = useState([])
    const [pageNumero, setPageNumero] = useState(1);

    useEffect (() => {
        getApi(`${pathURL}?page=${pageNumero}`).then((data)=>{
            // console.log(data.results);
            setPeliculas(data.results)
        })
        
    },[pageNumero])

    const handleNextPage = () => {
        setPageNumero((page) => page + 1); 
      };
    const handleBackPage = () => {
        setPageNumero((page) => page === 1 ? page : page - 1); 
      };

    return (
        <>
        <ul className="grid max-width">
            {peliculas.map((pelicula) =>(

                <PeliculasCard key={pelicula.id} peliculaMap = {pelicula}/>
            ))}

        </ul>
        <div className="d-flex max-width justify-content-center align-items-center "> 
            <button className="btn btn-danger m-3" onClick={handleBackPage}>Back Page</button>
            <button className="btn btn-primary m-3" onClick={handleNextPage}>Next Page</button>
        </div>
        </>
    )
}

export { 
    PeliculasGrid
}