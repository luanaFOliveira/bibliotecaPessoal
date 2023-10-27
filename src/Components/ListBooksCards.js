import React from 'react';
import './ListBooksCards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRating from './StarRating';
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
//                                    <a href="/" className="card-link" onClick={() => onDelete(id_livro)}>Excluir</a>

function Card({titulo,autor,classificacao,id_livro}){
    
    return (
        <div className="col-4 bg-transparent">
            <Link to={`/book/${id_livro}`} className='link-card'>
            <div className="card custom-card">
                <div className="card-body">
                    <div className="card-content">
                        <div className="text-content">
                            <h5 className="card-title">{titulo}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{autor}</h6>
                            <div className="card-footer">
                                <StarRating rating={classificacao} />
                                <div className="card-links">
                                    <Link to={`/editBook/${id_livro}`} className="card-link">Editar</Link>
                                    <Link to={`/`} className="card-link" onClick={() => onDelete(id_livro)}>Excluir</Link>
                                </div>
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
}

function ListBooksCards({livros}){
    return (
        <div className="row bg-transparent">
          {livros.map((card, index) => (
            <Card key={index} titulo={card.titulo} autor={card.autor} classificacao={card.classificacao} id_livro={card.id}/>
          ))}
        </div>
    );
}


export default ListBooksCards;
