import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import NavBar from './Components/NavBar';
import BookForm from './Components/BookForm';
import { useNavigate,useParams } from 'react-router-dom';


function EditBook(){

    const params = useParams();
    const id_livro = params.id_livro;

    const [livro_temp,setLivroTemp] = useState([]);

    const getLivroTemp = async () =>{

        await fetch(`http://localhost:8000/api/livros/${id_livro}`, {
            method: 'GET',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            mode: 'cors' 
        })
            .then(response => response.json())
            .then(livro_temp => setLivroTemp(livro_temp))
            .catch(error => {
            console.error(error);
            });
    }
    useEffect(() => {
        getLivroTemp();
    },[]);

    const initialFormState = {
        titulo: livro_temp.titulo,
        autor: livro_temp.autor,
        resenha: livro_temp.resenha,
        classificacao: livro_temp.classificacao
    };

    
    const [livro, setLivro] = useState(initialFormState);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target
        setLivro({ ...livro, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
       
        await fetch(`http://localhost:8000/api/livros/${id_livro}`, {
            method:'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(livro)
        });
        setLivro(initialFormState);
        navigate('/');
        
    }

    return(<div>
        <NavBar />
        <Container>
            <h1>Editar Livro</h1>
            <BookForm initialFormState={initialFormState} handleSubmit={handleSubmit} handleChange={handleChange}/>
        </Container>

    </div>);

}

export default EditBook;