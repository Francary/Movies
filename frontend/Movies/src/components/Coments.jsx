import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import {collection, getDocs} from "firebase/firestore"
import {db} from '../firebase/firebase.js'



const Coments =({referencia})=>{
    const [coments, setComents] = useState([])
    const comentsCollection = collection(db,"coments")

    const getComents = async()=>{

        const data = await getDocs(comentsCollection)

        setComents(
            data.docs.map((doc) =>({
                ...doc.data(), id:doc.id
            }))
        )
        console.log(coments);
    }


    useEffect(() =>{
        getComents()
    },[])

    if(coments != null)
    return(
        <>

        <div className="max-width ">
        <h2>Comentarios:</h2>
            <div className="mt-3 mb-3  rounded-3 container-trailer">
                <div className="col">
                    <table className="table table-hover" >
                        <thead>
                            {coments.map((coment) => (
                                    coment.ref === referencia && (
                                        <tr key={coment.id}>
                                         
                                           <td>{coment.coment}</td>
                                        </tr>
                                    )
                                ))}
                        </thead>
                    </table>

                            <form className=" d-flex m-3 gap-3 col"  >
                                <input type="text" className="form-control" name="description"  id="description" placeholder="Escribir comentario" />
                                <button className="btn btn-dark" type="submit" >Comentar</button>
                            </form>  
                </div>

            </div>
                                   
                       
        </div>
        </>
    )
}

export{Coments}


