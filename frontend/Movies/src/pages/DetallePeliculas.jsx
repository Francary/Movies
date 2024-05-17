import { getApi } from '../utils/conexionAPI.js'
import { useState , useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { Actores } from '../components/Actores.jsx'
import { Link } from 'react-router-dom'
import { Trailer } from '../components/Trailer.jsx'
import { formatoFecha } from '../utils/formatoFecha.js'

const pathURL = '/movie/'
const classImg ='img-medium'
let puntucion = 0

const DetallePeliculas = () => {

    const [detallePelicula ,  setDetallePelicula] = useState (null)
    const {id} = useParams()

    useEffect(() =>{
        getApi(`${pathURL}${id}`).then((data =>{

        console.log(data);
        setDetallePelicula(data)
        })
    )},[id])
    if(!detallePelicula){
        return null
    }


    const imgURL = `https://image.tmdb.org/t/p/w300${detallePelicula.poster_path}`
    return (
<>
    <div className="card mb-3 mt-5 max-width" >
  <div className="row g-0">
    <div className="col-md-3">
      <img src={imgURL} alt={detallePelicula.title} className="img-medium m-3 d-flex justify-content-center"  />
    </div>
    <div className="col-md-9">
        <div className="card-body">
            <h4 className="card-title">{detallePelicula.title}</h4>
            <p className="card-text">{detallePelicula.overview}</p>
            <div className="row ">
                <div className="col-md-2">
                    <p>
                        <h6>Estreno:</h6>
                        {formatoFecha(detallePelicula.release_date)} 
                    </p>
                </div>
                <div className="col-md-2">
                    <p>
                        <h6>Puntuacion:</h6>
                        <div className='puntuaje font-weight-bold '>
                        {  puntucion =`${Math.round(detallePelicula.vote_average *10)}%`  } 

                        </div>
                    </p>

                </div>
                <div className="col-md-6">
                    <p>
                        <h6>Genero:</h6>
                        {detallePelicula.genres.map((generos) => generos.name).join(' - ')}
                    </p>
                </div>
            </div>
            <p>
                <h6>Productora</h6>
                {detallePelicula.production_companies.map((productora) => productora.name).join('  ||  ')}
            </p>
            
            <Link to="https://www.youtube.com/watch?v=3N84gAPPKXE">
                <button className='btn btn-dark'>Ver Trailer</button>
            </Link>  
        </div>
    </div>
  </div>
</div>
    <Trailer url={pathURL}/>  
    <Actores url={pathURL} classImg={classImg}/>
</>
    )
}

export{
    DetallePeliculas
}