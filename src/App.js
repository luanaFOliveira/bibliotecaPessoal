import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import ListBooksCards from './Components/ListBooksCards';
import  { Route,Routes } from "react-router-dom";
import ListBooks from './ListBooks';
import AddBook from './AddBook';

function App() {

  return (
    <Routes>
      <Route path="/" element={<ListBooks/>}></Route>
      <Route path="/listBooks" element={<ListBooks/>}></Route>
      <Route path="/addBook" element={<AddBook/>}></Route>
    </Routes>
  );
}

export default App;
