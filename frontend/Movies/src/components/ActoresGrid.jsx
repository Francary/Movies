import {getApi} from "../utils/conexionAPI.js"
import {useState , useEffect} from "react"
import { ActoresCard } from "./ActoresCard.jsx"


const pathURL ='/person/popular'
const classImg ='img-medium'
const ActoresGrid = () =>{

    const [actores, setActores] = useState([])

    useEffect(()=>{
        getApi(pathURL).then((data=>{
            console.log(data.results);
            setActores(data.results)
        }))
    },[])
    return(
        <>
            <ul className="grid max-width">
                {actores.map((actor)=>(
                    <ActoresCard key={actor.id} actorMap={actor} classImg={classImg}/>

                ))}
            </ul>
        </>
    )
}

export{
    ActoresGrid
}