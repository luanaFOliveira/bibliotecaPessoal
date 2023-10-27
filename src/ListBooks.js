import React,{useState,useEffect} from 'react';
import './ListBooks.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListBooksCards from './Components/ListBooksCards';
import NavBar from './Components/NavBar';

function ListBooks() {
  const [livros, setLivros] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 9; // Quantidade de itens por página

  const getLivros = () => {
    const minId = (page - 1) * itemsPerPage + 1;
    const maxId = minId + itemsPerPage - 1;

    fetch(`https://bibliotecapessoal-62f86412a930.herokuapp.com/api/livros/pagina/${minId}/${maxId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    })
      .then(response => response.json())
      .then(livros => setLivros(livros))
      .catch(error => {
        console.error(error);
      });
  }
  useEffect(() => {
    getLivros();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <NavBar />
      <ListBooksCards livros={livros} />
      <div className='button-container'>
        <button type="button" class="btn btn-dark" onClick={() => setPage(page - 1)}>Página Anterior</button>
        <button type="button" class="btn btn-dark" onClick={() => setPage(page + 1)}>Próxima Página</button>
      </div>
    </div>
  );
}



export default ListBooks;
