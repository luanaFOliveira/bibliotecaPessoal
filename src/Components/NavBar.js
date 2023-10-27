import React from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//        <a className="navbar-brand" href="/">Biblioteca Pessoal</a>
//a className="nav-item nav-link" href="/listBooks">Meus Livros</a>
//<a className="nav-item nav-link" href="/addBook">Adicionar Livro</a>

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <Link to={`/`} className="navbar-brand">Biblioteca Pessoal</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to={`/listBooks`} className="nav-item nav-link">Meus Livros</Link>
            <Link to={`/addBook`} className="nav-item nav-link">Adicionar Livro</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
