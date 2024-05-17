import { Link } from "react-router-dom"

const SeriesCard = ({serieMap}) =>{

    const imgURL = `https://image.tmdb.org/t/p/w300${serieMap.poster_path}`

    return(
        
            <div className='card-medium grid'>
                <Link className='link-card' to={`/series/${serieMap.id}`}>
                    <img  className='img-medium'  src={imgURL} alt="" />
                    <small>{serieMap.name}</small>
                </Link>
            </div>
        
        
    )
}

export {
    SeriesCard
}