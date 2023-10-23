import React,{useState,useEffect} from 'react';
//import './ListBooks.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListBooksCards from './Components/ListBooksCards';
import NavBar from './Components/NavBar';



function ListBooks(){
    
 
    
    const [livros,setLivros] = useState([]);

    const getLivros = () =>{
        fetch('http://localhost:8000/api/livros', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            mode: 'cors' 
          })
            .then(response => response.json())
            .then(livros => setLivros(livros))
            .catch(error => {
              console.error(error);
            });
    }

    useEffect(() => {
        getLivros();
    },[]);
    
   /*
    const livros = [
        {
          titulo: 'Livro 1',
          autor: 'Autor 1',
          resenha: 'Esta é a resenha do Livro 1. É um livro muito interessante.',
          classificacao: 3,
          imagem: 'caminho/para/imagem1.jpg',
        },
        {
          titulo: 'Livro 2',
          autor: 'Autor 2',
          resenha: 'Este é o Livro 2. O autor é muito renomado.',
          classificacao: 4,
          imagem: 'caminho/para/imagem2.jpg',
        },
    ];
*/
    return (
        <div>
            <NavBar />
            <ListBooksCards livros={livros}/>  
        </div>
    );
}


export default ListBooks;
