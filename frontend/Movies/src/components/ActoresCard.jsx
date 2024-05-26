import {Link} from 'react-router-dom'

const ActoresCard = ({actorMap ,classImg}) =>{

    const imgURL = `https://image.tmdb.org/t/p/w300${actorMap.profile_path}`
    
      
    return(  

        <div className='card-medium grid' >
            <Link className='link-card' to={`/actores/${actorMap.id}`} > 

                { actorMap.profile_path != null ? (<img src={ imgURL} className={classImg}  alt={actorMap.name} />):(<i className={`fa-solid fa-user-tie avatar d-flex align-items-center justify-content-center ${classImg} `}></i>)}
            
                <small >{actorMap.name}</small>      
                
            </Link>
        </div>  
 
    )
}

export {
    ActoresCard
}