import { Routes, Route} from "react-router-dom"

import { LandingPage } from "../pages/LandingPage"
import { Prueba } from "../components/Prueba"

import { PeliculasGrid } from "../components/PeliculasGrid"
import { DetallePeliculas } from "../pages/DetallePeliculas"

import { SeriesGrid } from "../components/SeriesGrid"
import { DetalleSeries } from "../pages/DetalleSeries"

import {ActoresGrid} from "../components/ActoresGrid"
import {DetalleActores} from "../pages/DetalleActores"




const Router = () => {
    return (
       
            <Routes>
                <Route path="/" element= {<LandingPage/>}/>

                <Route path="/peliculas" element={<PeliculasGrid/>}/>    
                <Route path="/peliculas/:id" element ={<DetallePeliculas/>}/> 

                
                <Route path="/series" element= {<SeriesGrid/>}/>    
                <Route path="/series/:id" element= {<DetalleSeries/>}/>    

                <Route path="/actores/" element ={<ActoresGrid/>}/>   
                <Route path="/actores/:id" element ={<DetalleActores/>}/>   


                <Route path="/prueba/" element ={<Prueba/>}/>    
            </Routes>      
       
    
    
     )
}

export {
    Router
}