import { ActoresPopular } from "../components/ActoresPopular";
import { PeliculasPopular } from "../components/PeliculasPopular";
import { SeriesPopular } from "../components/SeriesPopular";

const LandingPage = () => {

    return (
        <>
           <PeliculasPopular/> 
           <SeriesPopular/>
           <ActoresPopular/>
        </>
    )
}

export {
    LandingPage
}