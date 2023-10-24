import React, { useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

function BookForm({initialFormState,handleSubmit,handleChange}) {
    
    
    return(<div>
        <Container>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="titulo">Titulo</Label>
                    <Input type="text" name="titulo" id="titulo" placeholder={initialFormState.titulo} onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="autor">Autor</Label>
                    <Input type="text" name="autor" id="autor" placeholder={initialFormState.autor} onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="resenha">Resenha</Label>
                    <Input type="text" name="resenha" id="resenha" placeholder={initialFormState.resenha} onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="classificacao">Classificacao</Label>
                    <Input type="text" name="classificacao" id="classificacao" placeholder={initialFormState.classificacao} onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Button color="primary" type="submit">Enviar</Button>{' '}
                </FormGroup>
            </Form>
        </Container>
        </div>
    );
};

export default BookForm;
