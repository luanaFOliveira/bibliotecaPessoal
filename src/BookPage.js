import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import NavBar from './Components/NavBar';
import BookForm from './Components/BookForm';
import { useNavigate,useParams } from 'react-router-dom';
import './BookPage.css';
import StarRating from './Components/StarRating';
import { Link } from 'react-router-dom';

const onDelete = (id_livro) => {
    if (!window.confirm("Deseja realmente excluir este livro?")) return;
      
    try {

        fetch(`http://localhost:8000/api/livros/${id_livro}`, {
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

        await fetch(`http://localhost:8000/api/livros/${id_livro}`, {
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
    useEffect(() => {
        getLivro();
    },[]);


    return(<div>
        <NavBar />
        <Container>
        <div className='card text-center'>
            <h1>{livro.titulo}</h1>
            <h3>{livro.autor}</h3>
            <div class="card-body">{livro.resenha}</div>
            <div className="d-flex align-items-center">
                <h4 className="mr-2">Classificação:</h4>
                <StarRating rating={livro.classificacao} />
                <div className="ml-auto">
                    <Link to={`/editBook/${id_livro}`} className="card-link">Editar</Link>
                    <a href="/" className="card-link" onClick={() => onDelete(id_livro)}>Excluir</a>
                </div>
            </div>
        </div>
        </Container>
    </div>);

}

export default BookPage;

