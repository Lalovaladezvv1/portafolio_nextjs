"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
      if (window.scrollY > 0) setMenuOpen(false); // cierra menú al hacer scroll
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "header-active" : ""}>
      <div className="nav container">
        <a href="#home" className="logo">
          Eduardo Valadez
        </a>

        <ul className={`navbar ${menuOpen ? "open-menu" : ""}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>INICIO</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>ACERCA DE</a></li>
          <li><a href="#experiencia" onClick={() => setMenuOpen(false)}>EXPERIENCIA</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>CONTACTO</a></li>
        </ul>

        <div
          className={`menu-icon ${menuOpen ? "move" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </div>
      </div>
    </header>
  );
}
