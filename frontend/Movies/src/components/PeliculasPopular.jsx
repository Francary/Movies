import { PeliculasCard } from "./PeliculasCard"
import {getApi} from '../utils/conexionAPI.js'
import { useState, useEffect } from "react"
import Slider from "react-slick";
import { settings } from "../utils/slider.js";


const pathURL = '/movie/popular'

// Version con Glide Js
// import { glideJs } from "../utils/glide.js"
// const PeliculasPopular = () => {

//     const [popular , setPopular] = useState([])

//     useEffect(() =>{

//         getApi(pathURL).then((data =>{
//             console.log(data.results);
//             setPopular(data.results)
            
//         }))
//     },[])
//     glideJs()
    
//     return(
     
//         <div className='glide max-width '>
//             <div className='glide__track max-width' data-glide-el='track'>
//                 <ul className='glide__slides '>
//                 {popular.map((pelicula) =>(
                    
//                     <PeliculasCard key={pelicula.id} peliculaMap = {pelicula}/>
//                 ))}

//                 </ul>
//             </div>

//             <div className="glide__arrows max-width" data-glide-el="controls">
//                 <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
//                 <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
//             </div>
//         </div>
              
//     )

// }

const PeliculasPopular = () => {

    const [popular , setPopular] = useState([])

    useEffect(() =>{

        getApi(pathURL).then((data =>{
            console.log(data.results);
            setPopular(data.results)
            
        }))
    },[])
   
    return(
     
        <div className='max-width  slider-container'>
            <Slider {...settings}>
                {popular.map((pelicula) =>(
                    <PeliculasCard key={pelicula.id} peliculaMap = {pelicula}/>
                ))}
            </Slider>
        </div>
              
    )

}


export {
    PeliculasPopular
}