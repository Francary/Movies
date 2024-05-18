import { getApi } from "../utils/conexionAPI.js"
import { useState , useEffect } from "react"
import { useParams } from "react-router-dom"


const Trailer = ({url}) =>{
    const [trailer, setTrailer] = useState(null)
    const {id} = useParams()

    useEffect(() =>{
        const pathURL = `/${url}/${id}/videos`
         getApi(`${pathURL}`).then((data =>{
          
            console.log(data.results[0].key);
            setTrailer(data.results[0].key)
        })
    )},[id])

    if(trailer != null)
    
return(
    <div className="max-width ">
        <h2>Trailer:</h2>
        <div className="mt-3 mb-3  rounded-3 container-trailer">
            
            <iframe className="rounded-3" width="600" height="400" src={`https://www.youtube.com/embed/${trailer}?autoplay=1`} frameborder="0" allow="autoplay;" allowfullscreen></iframe>
        </div>
    </div>
    
)
}

export {
    Trailer
    
}