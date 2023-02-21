import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import swapi from './axios/config';


const App = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const handleSearchChange = event => {
    setSearch(event.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    setLoading(true);
    swapi
      .get(`people/?search=${search}`)
      .then(response => {
        setData(response.data.results);
        setLoading(false);
        setError(null);
        setSearch('');
      })
      .catch(error => {
        setError(error);
        setLoading(false);
        setData([]);
      });
  };

  useEffect(() => {
    setLoading(true);
    swapi
      .get('people/')
      .then(response => {
        setData(response.data.results);
        setLoading(false);
        setError(null);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
        setData([]);
      });
  }, []);

  if (loading) {
    return (
      <>
        <a href="/"><img src="./src/assets/png/star-wars-logo.png" height='160'/></a>
        <p>Loading...</p>
      </>
    )
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <a href="/"><img src="./src/assets/png/star-wars-logo.png" height='160'/></a>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" value={search} onChange={handleSearchChange} onKeyPress={handleKeyPress} placeholder="Nome do personagem..."/>
      </form>
      <ul>
        {data.length == 1 ? (
          data.map(item => (
            <li key={item.url}>
              <h1>{item.name}</h1>
              <ul>
                <li>Aniversário: {item.birth_year}</li>
                <li>Gênero: {item.gender}</li>
                <li>Cor dos olhos: {item.eye_color}</li>
                <li>Filmes:</li>
                {/* {item.films.map(film => (
                  <ul>
                    <li>{film}</li>
                  </ul>
                ))} */}
              </ul>
            </li>
          ))
        ): (
          data.map(item => (
            <li key={item.url}>
              <h3>{item.name}</h3>
            </li>            
          ))
        )}
        
      </ul>
    </div>
  );
};

export default App;
