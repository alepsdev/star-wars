import axios from 'axios';
import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import modal from '../components/modal';



var Home = () => {
    const [dados, setDados] = useState([])

    const getDados = async() => {
        try{
            const ret = await axios.get(
                "https://swapi.dev/api/people/"
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
        {dados.length === 0 ? (<p>Carregando...</p>) : (
            <div>
                <ul >
                    {dados?.results.map(dado => {
                        return(
                            <li key={dado.url}>
                                <Link onClick={modal()}>{dado.name}</Link>
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
