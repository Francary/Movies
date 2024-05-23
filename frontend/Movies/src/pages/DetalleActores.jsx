import { PeliculasDelActor } from "../components/PeliculasDelActor.jsx"
import { Redes } from "../components/Redes.jsx"
import { SeriesDelActor } from "../components/SeriesDelActor.jsx"
import { getApi } from "../utils/conexionAPI.js"
import { formatoFecha } from '../utils/formatoFecha.js'
import{useState, useEffect} from 'react'
import { useParams} from "react-router-dom"

const pathURL = '/person/'
const idioma = "?language=es-AR"

const DetalleActores = () => {

    const [detalleActor , setDetalleActor] = useState(null)
    const {id} = useParams()

    useEffect(() =>{
        getApi(`${pathURL}${id}${idioma}`).then((data=>{
            // console.log(data);
            setDetalleActor(data)
        })
        
    )},[id])

    if(!detalleActor){
        return null
    }

    const imgURL = `https://image.tmdb.org/t/p/w300${detalleActor.profile_path}`
    const classImg ='img-medium'
    return(
    <>
        <div className="card mb-3 mt-5 max-width" >
            <div className="row g-0">
                <div className="col-md-3 d-grid justify-content-center">
                     
                    { detalleActor.profile_path != null ? (<img src={ imgURL} className={`${classImg} img-medium m-3 d-flex justify-content-center`}  alt={detalleActor.name} />):(<i className={`fa-solid fa-user-tie avatar d-flex align-items-center justify-content-center ${classImg} m-3`}></i>)}
                    
                    <Redes/>       
                
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h4 className="card-title">{detalleActor.name}</h4>
                        <p className="card-text">{detalleActor.biography}</p>
                        <div className="row ">
                            <div className="col-md-2">
                                <h6>Cumpleaños:</h6>
                                { formatoFecha(detalleActor.birthday)} 
                            </div>
                            <div className="col-md-2">
                                <h6>Genero:</h6>
                                {detalleActor.gender==1? "Mujer":"Hombre"} 
                            </div>
                            <div className="col-md-2">
                                <h6>Puntuacion:</h6>
                                <div className='puntuaje font-weight-bold '>
                                    {  Math.round(detalleActor.popularity *10) } 
                                </div>
                            </div>                     
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <PeliculasDelActor/>
        <SeriesDelActor/>       
        </>
    )
}

export {
    DetalleActores
}