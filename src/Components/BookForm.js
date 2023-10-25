import React from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import './BookForm.css';
import StarRatingInput from '../StarRatingInput';

function BookForm({ initialFormState, handleSubmit, handleChange }) {

    const handleRatingChange = (rating) => {
        handleChange({ target: { name: 'classificacao', value: rating } });
    };

  return (
    <div className='wrapper-form'>
      <Container>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="titulo" className='form-label'>Titulo</Label>
            <Input type="text" name="titulo" id="titulo" placeholder={initialFormState.titulo} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="autor">Autor</Label>
            <Input type="text" name="autor" id="autor" placeholder={initialFormState.autor} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="resenha">Resenha</Label>
            <Input type="text" name="resenha" id="resenha" placeholder={initialFormState.resenha} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="classificacao">Classificação</Label>
            <StarRatingInput value={initialFormState.classificacao} onChange={handleRatingChange} />
          </FormGroup>
          <FormGroup>
            <Button color="dark" type="submit">
              Enviar
            </Button>{' '}
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
}

export default BookForm;
