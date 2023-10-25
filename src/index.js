import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListBooks from './ListBooks';
import AddBook from './AddBook';
import EditBook from './EditBook';
import BookPage from './BookPage';

const router = createBrowserRouter([
  {
      path:"/",
      element:<ListBooks/>,
  },
  {
    path:"/listBooks",
    element:<ListBooks/>,
  },
  {
    path:"/addBook",
    element:<AddBook/>,
  },
  {
    path:"/editBook/:id_livro",
    element:<EditBook/>,
  },
  {
    path:"/book/:id_livro",
    element:<BookPage/>,
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  <RouterProvider router={router}/>,
  </StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
