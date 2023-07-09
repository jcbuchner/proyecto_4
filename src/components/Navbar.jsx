import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Restaurant "Fondo de Bikini"</h1>
      <div className="links">
        <a href="#">Inicio</a>
        <a href="/">Historia</a>
        <a href="#menuss">Menu</a>
        <a href="#reservita">Reservas</a>
        <a href="#contactanos">Contactanos</a>
      </div>
    </nav>
  )
}

export default Navbar;
