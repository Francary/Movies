import {getApi} from '../utils/conexionAPI.js'
import { useState, useEffect } from 'react'
import { SeriesCard } from './SeriesCard.jsx'
import Slider from "react-slick";
import { settings } from "../utils/slider.js";

const pathURL = '/tv/popular'


const SeriesPopular = ()=>{
    const [series , setSeries] = useState([])

    useEffect(() =>{
        getApi(pathURL).then((data) =>{
            // console.log(data.results);
            setSeries(data.results)
        })   
    },[])


    return(
       
        <div className='max-width  slider-container'>
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