import React, { useState } from 'react';
import { Form, Button } from 'reactstrap';

/*
function BookForm({ props }) {

  const [book, setBook] = useState({
    titulo: props.book ? props.book.titulo : '',
    autor: props.book ? props.book.autor : '',
    resenha: props.book ? props.book.resenha : '',
    classificacao: props.book ? props.book.classificacao : '',
    imagem: props.book ? props.book.imagem : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { titulo, autor, classificacao, resenha,imagem } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [titulo, autor, classificacao, resenha,imagem];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const book = {
        titulo,
        autor,
        classificacao,
        resenha,
        imagem
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    setBook((prevState) => ({
        ...prevState,
        [name]: value
    }));
    
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="titulo"
            value={titulo}
            placeholder="Enter name of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="autor">
          <Form.Label>Book autor</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="autor"
            value={autor}
            placeholder="Enter name of autor"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="resenha">
          <Form.Label>resenha</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="resenha"
            value={resenha}
            placeholder="Enter available resenha"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="classificacao">
          <Form.Label>Book classificacao</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="classificacao"
            value={classificacao}
            placeholder="Enter classificacao of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="imagem">
          <Form.Label>URL imagem</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="imagem"
            value={imagem}
            placeholder="Enter url image of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;
*/