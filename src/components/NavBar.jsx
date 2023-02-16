import swapi from '../axios/config';


const NavBar = () => {
    const getDados = 
    swapi.get()
  return (
    <nav className="navbar">
        <a href='' onClick={() => {}}>Personagens</a>
        <a>Filmes</a>
        <a>Planetas</a>
        <a>Veiculos</a>
        <a>Especies</a>
    </nav>
    )
}

export default NavBar