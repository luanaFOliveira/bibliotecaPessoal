import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import NavBar from './Components/NavBar';
import { useParams } from 'react-router-dom';
import './BookPage.css';
import StarRating from './Components/StarRating';
import { Link } from 'react-router-dom';

const onDelete = (id_livro) => {
    if (!window.confirm("Deseja realmente excluir este livro?")) return;
      
    try {

        fetch(`https://bibliotecapessoal-62f86412a930.herokuapp.com/api/livros/${id_livro}`, {
            method: 'DELETE',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            mode: 'cors' 
        });
        
        alert("Livro excluído com sucesso");
        } catch (error) {
        console.log(error);
        alert("Não foi possível excluir o livro.");
    }

}

function BookPage(){
    const params = useParams();
    const id_livro = params.id_livro;

    const [livro,setLivro] = useState([]);

    const getLivro = async () =>{

        await fetch(`https://bibliotecapessoal-62f86412a930.herokuapp.com/api/livros/${id_livro}`, {
            method: 'GET',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            mode: 'cors' 
        })
            .then(response => response.json())
            .then(livro => setLivro(livro))
            .catch(error => {
            console.error(error);
            });
    }
  
    getLivro();


    return(<div>
        <NavBar />
        <Container>
        <div className='card text-center'>
            <h1>{livro.titulo}</h1>
            <h3>{livro.autor}</h3>
            <div class="card-body">{livro.resenha}</div>
            <div className="d-flex align-items-center">
                <h4 className="mr-auto">Classificação:</h4>
                <StarRating rating={livro.classificacao} />
                <div className="ml-auto card-links">
                    <Link to={`/editBook/${id_livro}`} className="card-link">Editar</Link>
                    <a href="/" className="card-link" onClick={() => onDelete(id_livro)}>Excluir</a>
                </div>
            </div>
        </div>
        </Container>
    </div>);

}

export default BookPage;

