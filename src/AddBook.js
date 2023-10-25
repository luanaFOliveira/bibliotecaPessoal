import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'reactstrap';
import NavBar from './Components/NavBar';
import BookForm from './Components/BookForm';
import { useNavigate } from 'react-router-dom';
import './AddBook.css';

function AddBook(){

    const initialFormState = {
        titulo: '',
        autor: '',
        resenha: '',
        classificacao: ''
    };

    const [livro, setLivro] = useState(initialFormState);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target
        setLivro({ ...livro, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
       
        await fetch(`http://localhost:8000/api/livros`, {
        method:'POST',
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
        <h1 className='titulo-newBook'>Novo Livro</h1>
        <BookForm initialFormState={initialFormState} handleSubmit={handleSubmit} handleChange={handleChange}/>
        </Container>

    </div>);

}

export default AddBook;