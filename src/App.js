import './App.css';
import  { Route,Routes } from "react-router-dom";
import ListBooks from './ListBooks';
import AddBook from './AddBook';
import EditBook from './EditBook';
import BookPage from './BookPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<ListBooks/>}></Route>
      <Route path="/listBooks" element={<ListBooks/>}></Route>
      <Route path="/addBook" element={<AddBook/>}></Route>
      <Route path="/editBook/:id_livro" element={<EditBook/>}></Route>
      <Route path="/book/:id_livro" element={<BookPage/>}></Route>
    </Routes>
  );
}

export default App;
