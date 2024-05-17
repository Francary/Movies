import { Router } from "./routes/router"
import { Navbar } from "./components/Navbar";
import {BrowserRouter} from "react-router-dom"

const App = () => {
    return (
        
        <BrowserRouter>
            <Navbar/>
            <Router/>
        </BrowserRouter>
        
        
       
    
    
    
     )
}

export {
  App
} 


