import {Link} from 'react-router-dom'

const ActoresCard = ({actorMap ,classImg}) =>{

    const imgURL = `https://image.tmdb.org/t/p/w300${actorMap.profile_path}`
    const imgAvatar = '/Img/harry-1.webp'

        // if(actorMap.profile_path != null)

    return(  

        <div className='card-medium grid' >
            <Link className='link-card' to={`/actores/${actorMap.id}`} > 

                { actorMap.profile_path != null ? (<img src={ imgURL} className={classImg}  alt={actorMap.name} />):(<i class={`fa-solid fa-user-tie avatar d-flex align-items-center justify-content-center ${classImg} `}></i>)}
            
                {/* <img src={ actorMap.profile_path != null ? imgURL: imgAvatar} className=    {classImg}  alt={actorMap.name} /> */}
                <small >{actorMap.name}</small>      
                {/* {<i class="fa-solid fa-user-tie"></i> } */}
            </Link>
        </div>  
 
    )
}

export {
    ActoresCard
}