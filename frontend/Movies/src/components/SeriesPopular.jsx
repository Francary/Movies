import {getApi} from '../utils/conexionAPI.js'
import { useState, useEffect } from 'react'
import { SeriesCard } from './SeriesCard.jsx'
import Slider from "react-slick";
import { settings } from "../utils/slider.js";

const pathURL = '/tv/popular'
const idioma = ""//"?language=es-AR"


const SeriesPopular = ()=>{
    const [series , setSeries] = useState([])

    useEffect(() =>{
        getApi(`${pathURL}${idioma}`).then((data) =>{
            // console.log(data.results);
            setSeries(data.results)
        })   
    },[])


    return(
       
        <div className='max-width  slider-container'>
            <h2 className="max-width mt-1">Top 20 TV Shows :</h2>
            <Slider {...settings}>
                {series.map((serie) =>(
                    <SeriesCard  key={serie.id} serieMap = {serie}/>
                ))}
            </Slider>          
        </div>
    )


}

export {
    SeriesPopular
}