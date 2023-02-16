import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchBar from "./components/searchBar";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <SearchBar/>
      <div className="container">
        <Outlet/>
      </div>
    </div>
  )
}

export default App
