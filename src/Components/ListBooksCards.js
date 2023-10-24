import React from 'react';
import './ListBooksCards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function StarRating({ rating }) {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star-icon" />);
    }
  
    return <div>{stars}</div>;
}

//<img src="https://via.placeholder.com/100x100" alt="Imagem do Livro 1" className="card-image" />
//                            <p className="card-text">{resenha}</p>

function Card({titulo,autor,classificacao}){
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
                                    <a href="#" className="card-link">Editar</a>
                                    <a href="#" className="card-link">Excluir</a>
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
            <Card key={index} titulo={card.titulo} autor={card.autor} classificacao={card.classificacao}/>
          ))}
        </div>
    );
}


export default ListBooksCards;
