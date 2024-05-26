import {SeriesCard} from '../components/SeriesCard.jsx'
import {getApi} from '../utils/conexionAPI.js'
import { useState, useEffect } from "react"
import Slider from "react-slick";
import { settings } from "../utils/slider.js";
import { useParams } from "react-router-dom";




const SeriesDelActor = () => {
    
    const [serie , setSerie] = useState([])
    const{id} = useParams()
    const pathURL = `/person/${id}/tv_credits`
  
    useEffect(() =>{
        
        getApi(pathURL).then((data =>{
            // console.log(data.cast);
            setSerie(data.cast)
            
            
        })
    )},[])
    if(serie.length >0)
    return(
     
        <div className='max-width  slider-container'>
            <h2>TV:</h2>
            {serie.length >1 ?(

            <Slider {...settings}>
                {serie.map((serie) =>(
                    <SeriesCard key={serie.id} serieMap = {serie}/>
                ))}
            </Slider>
            )
            :
            serie.map((serie) =>(
                <SeriesCard key={serie.id} serieMap = {serie}/>
            ))
            
            }
        </div>
              
    )

}


export {
    SeriesDelActor
}