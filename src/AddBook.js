import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import NavBar from './Components/NavBar';
import BookForm from './Components/BookForm';

/*
function AddBook(){
    const initialFormState = {
        titulo: '',
        autor: '',
        resenha: '',
        classificacao: '',
        imagem: ''
    };

    const [livro, setLivro] = useState(initialFormState);

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
    }

    return(<div>
        <NavBar />
        <Container>
        <h1>Novo Livro</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="titulo">Titulo</Label>
                    <Input type="text" name="titulo" id="titulo" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="autor">Autor</Label>
                    <Input type="text" name="autor" id="autor" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="resenha">Resenha</Label>
                    <Input type="text" name="resenha" id="resenha" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="classificacao">Classificacao</Label>
                    <Input type="text" name="classificacao" id="classificacao" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="imagem">URL da Capa</Label>
                    <Input type="text" name="imagem" id="imagem" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Button color="primary" type="submit">Save</Button>{' '}
                </FormGroup>
            </Form>
        </Container>
        </div>
    );
    
}

*/
function AddBook() {
    const [bookData, setBookData] = useState({
      titulo: '',
      autor: '',
      resenha: '',
      classificacao: '',
      imagem: ''
    });
  
    const handleOnSubmit = (book) => {
      console.log(book);
    };
  
    return (
      <React.Fragment>
        <BookForm book={bookData} handleOnSubmit={handleOnSubmit} />
      </React.Fragment>
    );
}
export default AddBook;