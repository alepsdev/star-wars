import axios from 'axios';
import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import modal from '../components/modal';
import swapi from '../axios/config';


var Home = () => {
    const [dados, setDados] = useState([])

    const getDados = async() => {
        try{
            const ret = await swapi.get("/people/")
            
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
        <p></p>
        Perfornagens
        {dados.length === 0 ? (<p>Carregando...</p>) : (
           <div>
                <ul >
                    {dados?.results.map(dado => {
                        return(
                            <li key={dado.url}>
                                <Link>{dado.name}</Link>
                            </li>
                            
                        )
                    })}
                </ul>
            </div>
        )}
    </div>
  );
};

export default Home
