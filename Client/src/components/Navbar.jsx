import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#32a89b",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="container-fluid">
        {/* Logo estilizado a la izquierda */}
        <a className="navbar-brand fw-bold text-white fs-3" href="/">
          Turismo Córdoba
        </a>

        {/* Botón colapsable en dispositivos móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "none", outline: "none" }}
        >
          <span
            className="navbar-toggler-icon"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 30 30%22 fill=%22%23FFFFFF%22><path d=%22M0 3h30v4H0zM0 13h30v4H0zM0 23h30v4H0z%22/></svg>')",
            }}
          ></span>
        </button>

        {/* Menú principal */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link text-white fw-bold fs-5 link-hover"
                href="/"
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white fw-bold fs-5 link-hover"
                href="/fotos"
              >
                Lugares
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white fw-bold fs-5 link-hover"
                href="/mapa"
              >
                Mapa
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white fw-bold fs-5 link-hover"
                href="/cosas-que-hacer"
              >
                Actividades
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white fw-bold fs-5 link-hover"
                href="/eventos"
              >
                Eventos
              </a>
            </li>
          </ul>
          {/* Botón "Iniciar sesión" */}
          <button
            className="btn btn-light text-dark fw-bold ms-3"
            style={{
              borderRadius: "20px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            }}
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
