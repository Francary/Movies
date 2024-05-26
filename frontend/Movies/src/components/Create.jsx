import {useState} from 'react'
import {Link } from "react-router-dom"
import {collection, addDoc } from 'firebase/firestore'
import {db} from '../firebase/firebase.js'

const Create = ({referecia ,getComents}) => {

    const [coment , setComent] = useState('')
    
     
    const comentsCollection = collection(db, "coments")

    const createComent = async (e) => {

        e.preventDefault()
        await addDoc(comentsCollection,{

            ref : referecia,
            coment : coment,
        })
        getComents( )
        setComent('')
        
    }
    
    return(

    <form className=" d-flex m-3 gap-3 col" onSubmit={createComent} >
        <input
            type="text"
            className="form-control"
            name="description"
            id="description"
            placeholder="Write Comment"
            value={coment}
            onChange={(e)=> setComent(e.target.value)} 
            />
        <button className="btn btn-dark" type="submit" >Comment</button>
    </form> 

  
    )
}

export {
    Create
}


