import {BrowserRouter, Routes, Route,Link} from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { DetallePeliculas } from "./pages/DetallePeliculas"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<LandingPage/>}/>    
                <Route path="/pelicula/:peliculaId" element ={<DetallePeliculas/>}/>    
                <Route path="/hello" element= 'Hello World'/>    
            </Routes>      
        </BrowserRouter>
    
    
     )
}

export {
  App
} 


