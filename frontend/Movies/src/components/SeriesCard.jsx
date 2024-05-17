import { Link } from "react-router-dom"

const SeriesCard = ({serieMap}) =>{

    const imgURL = `https://image.tmdb.org/t/p/w300${serieMap.poster_path}`

    return(
        
            <div className='card-medium grid'>
                <Link className='link-card' to={`/series/${serieMap.id}`}>
                    {serieMap.poster_path != null ? (<img  className='img-medium'  src={imgURL} alt={serieMap.name} />):(<i class={`fa-solid fa-film avatar d-flex align-items-center justify-content-center img-medium`}></i>)}
                    {/* <img  className='img-medium'  src={imgURL} alt="" /> */}
                    <small>{serieMap.name != null ? serieMap.name :  serieMap.title}</small>
                </Link>
            </div>
        
        
    )
}

export {
    SeriesCard
}