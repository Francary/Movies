import { getApi } from "../utils/conexionAPI.js";
import { useState , useEffect } from "react";
import { Link, useParams } from "react-router-dom";


const Redes = () => {
    
    const [redes, setRedes] = useState([])
    const{id} = useParams()
    const pathURL = `/person/${id}/external_ids` // Consultar Redes Sociales de Actores

    useEffect(() =>{
        getApi(pathURL).then((data =>{
            console.log(data.facebook_id);
            setRedes(data)
        })
    )},[])

    return(

        <div className="d-flex gap-3 justify-content-center mb-3">
           
            <a href={`https://www.instagram.com/${redes.instagram_id}`} title="Visitar Instagram" target="_blank" > 
                
                <i className="fa-brands fa-instagram m-1 "></i>
            </a>
            <a href={`https://www.tiktok.com/@${redes.tiktok_id}`} title="Visitar Tiktok" target="_blank">
                <i className="fa-brands fa-tiktok m-1"></i>
            </a>
            <a href={`https://twitter.com/${redes.twitter_id}`} title="Visitar Twitter" target="_blank">
                <i className="fa-brands fa-twitter m-1"></i>
            </a>
            <a href={`https://www.facebook.com/${redes.facebook_id}`} title="Visitar Facebook" target="_blank">
                <i className="fa-brands fa-facebook m-1"></i>
            </a>
        </div>
    )
}

export {
    Redes
}