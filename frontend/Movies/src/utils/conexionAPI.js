const API = 'https://api.themoviedb.org/3'

const getApi = (path) => {

    return fetch(API +path,{
        headers:{
            Aut
        }
    })


}

export {
    getApi
}