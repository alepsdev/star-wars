import {Link} from 'react-router-dom'

const NavBar = () => {
    
   

  return (
    <nav className="navbar">
        <h3>Busque um personagens</h3>
        <input required type="text" name="busca" id="busca" placeholder='Nome...' 
            onKeyDown={(e) => {
                e.code == "Enter" ? console.log(e.target.value) : console.log("n deu")
            }   
        }/>

    </nav>
    )
}

export default NavBar