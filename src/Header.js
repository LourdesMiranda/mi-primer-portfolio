import React, { useState } from 'react';
import './style.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header sticky">
      <div className="header-content">
        <div className="logo-container">
          <img 
            src={process.env.PUBLIC_URL + "/images/lourdesmirandamoreno.jpg"}
            alt="Lourdes Miranda" 
            className="profile-img"
          />
          <h1>Hola, soy Lourdes</h1>
        </div>
        
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        
        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Proyectos</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Habilidades</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>Sobre mí</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;