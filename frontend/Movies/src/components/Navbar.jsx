import { NavLink } from "react-router-dom"

const Navbar = ()=>{

    return(
        <nav className="navbar bg-dark border-bottom border-body Collapse " data-bs-theme="dark">
        <div className="container-fluid max-width justify-content-start gap-5">

            <NavLink  className="navbar-brand " to='/'>Home</NavLink>

            <NavLink  className="navbar-brand" to='/peliculas'>Peliculas</NavLink>

            <NavLink  className="navbar-brand" to='/series'>Series</NavLink>


            <NavLink  className="navbar-brand" to='/actores/'>Actores</NavLink>
            
            {/* <NavLink  className="navbar-brand" to='/prueba/'>Prueba</NavLink> */}
        </div>
        </nav>







    )
}

export {

    Navbar
}

