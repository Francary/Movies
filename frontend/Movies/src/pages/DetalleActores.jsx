import { getApi } from "../utils/conexionAPI.js"
import { formatoFecha } from '../utils/formatoFecha.js'
import{useState, useEffect} from 'react'
import { useParams} from "react-router-dom"

const pathURL = '/person/'
let puntucion = 0


const DetalleActores = () => {

    const [detalleActor , setDetalleActor] = useState(null)
    const {id} = useParams()

    useEffect(() =>{
        getApi(`${pathURL}${id}`).then((data=>{
            console.log(data);
            setDetalleActor(data)
        })
        
    )},[id])

    if(!detalleActor){
        return null
    }

    const imgURL = `https://image.tmdb.org/t/p/w300${detalleActor.profile_path}`
    return(
    <>
        <div className="card mb-3 mt-5 max-width" >
            <div className="row g-0">
                <div className="col-md-3 d-grid justify-content-center">
                    <img src={imgURL} alt={detalleActor} className="img-medium m-3 d-flex justify-content-center"  />
                    <div className="d-flex gap-3 justify-content-center">

                    <i class="fa-brands fa-instagram m-1"></i>
                    <i class="fa-brands fa-tiktok m-1"></i>
                    <i class="fa-brands fa-twitter m-1"></i>
                    <i class="fa-brands fa-facebook m-1"></i>
                    </div>
                        
                        
                
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
                                    {  puntucion =`${Math.round(detalleActor.popularity *10)}`  } 
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export {
    DetalleActores
}