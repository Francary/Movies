import {Link} from 'react-router-dom'

const PeliculasCard = ({peliculaMap}) => {

    const imgURL = `https://image.tmdb.org/t/p/w300${peliculaMap.poster_path}`
   
    return (
        
            <div className='card-medium grid'>
                <Link className='link-card' to={`/peliculas/${peliculaMap.id}`}> 
                    <img className='img-medium' src={imgURL} alt={peliculaMap.title} />
                    <small>{peliculaMap.title}</small>          
                </Link>
            </div>       
           
    )
}

export {
    PeliculasCard
}

// https://image.tmdb.org/t/p/w300