import {Link} from 'react-router-dom'

const PeliculasCard = ({peliculaMap}) => {

    const imgURL = `https://image.tmdb.org/t/p/w300${peliculaMap.poster_path}`

  
    return (
        
            <div className='card-medium grid'>
                <Link className='link-card' to={`/peliculas/${peliculaMap.id}`}> 
                     {peliculaMap.poster_path != null ? (<img className='img-medium' src={imgURL } alt={peliculaMap.title} />):(<i className={`fa-solid fa-film avatar d-flex align-items-center justify-content-center img-medium`}></i>)}
                    <small>{peliculaMap.title}</small>          
                </Link>
            </div>       
           
    )
}

export {
    PeliculasCard
}

// https://image.tmdb.org/t/p/w300