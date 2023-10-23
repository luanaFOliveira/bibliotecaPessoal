import React from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="/">Biblioteca Pessoal</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/listBooks">Meus Livros</a>
            <a className="nav-item nav-link" href="/addBook">Adicionar Livro</a>
            <a className="nav-item nav-link" href="#">Perfil</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
