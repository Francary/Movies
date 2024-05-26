import { getApi } from "../utils/conexionAPI.js"
import { useState , useEffect } from "react"
import { useParams, Link } from "react-router-dom"


const TrailerButton = ({url}) =>{
    const [trailer, setTrailer] = useState(null)
    const {id} = useParams()

    useEffect(() =>{
        const pathURL = `/${url}/${id}/videos`
         getApi(`${pathURL}`).then((data =>{
          
            // console.log(data.results[0].key);
            setTrailer(data.results[0].key)
        })
    )},[id])

    if(trailer != null)
    
return(


<Link to={`https://www.youtube.com/watch?v=${trailer}`}>
    <button className='btn btn-dark'>Trailer</button>
</Link> 

    
)
}

export {
    TrailerButton
    
}