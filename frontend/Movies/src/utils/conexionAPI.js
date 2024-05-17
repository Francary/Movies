import { miToken } from "./token.js"


const API = 'https://api.themoviedb.org/3'
let token = miToken


const getApi = (path) => {
    return (

        fetch( API + path , {
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            }
        })
        .then((results)=> {
            return results.json()
        })
    )
    } 

export {
    getApi
}