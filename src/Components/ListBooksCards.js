import React from 'react';
import './ListBooksCards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function StarRating({ rating }) {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star-icon" />);
    }
  
    return <div>{stars}</div>;
}

//<img src="https://via.placeholder.com/100x100" alt="Imagem do Livro 1" className="card-image" />
//                            <p className="card-text">{resenha}</p>

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

function Card({titulo,autor,classificacao,id_livro}){
    
    return (
        <div className="col-3 bg-transparent">
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
                                    <a href="/" className="card-link" onClick={() => onDelete(id_livro)}>Excluir</a>
                                </div>
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ListBooksCards({livros}){
    return (
        <div className="row">
          {livros.map((card, index) => (
            <Card key={index} titulo={card.titulo} autor={card.autor} classificacao={card.classificacao} id_livro={card.id}/>
          ))}
        </div>
    );
}


export default ListBooksCards;
