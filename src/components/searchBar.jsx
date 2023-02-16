import React from 'react'
import { useEffect, useState } from "react";
import swapi from '../axios/config';


const searchBar = () => {
    const [dados, setDados] = useState([])
    
    const getDados = async() => {
        console.log("dentro do getDados ? " + e)
        try{
            const ret = await swapi.get("/people/?search=" + e
            )
            
            setDados(ret.data)

        }catch(e) {
            console.log(e)
        }
    }

    useEffect(() => {
       getDados()
    }, [])

    return (
        <div>
            <h3>Busque um personagens</h3>
            <input required type="text" name="busca" id="busca" placeholder='Nome...' 
                onKeyDown={(e) => {
                    e.code == "Enter" ? console.log(e.target.value) : console.log("erro")
                }   
            }/>

            <div>
                {dados}
            </div>
        </div>
    )
}

export default searchBar
