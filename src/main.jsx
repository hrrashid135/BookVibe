import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import Books from './Components/Books.jsx'
import BookDetailsPage from './Pages/BookDetailsPage.jsx'
import ListedBooks from './Pages/ListedBooks.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      { 
        index: true,
        loader: () => fetch('/booksData.json'),
        element: <Books></Books>
      }
    ]
  },
  {
    path: "/book/:bookId",
    loader: async ({params}) => {
      const response = await fetch('/booksData.json');
      const books = await response.json();
      return books.find(book => book.bookId === parseInt(params.bookId));
    },
    element: <BookDetailsPage></BookDetailsPage>
  },
  {
    path : "/listed-books",
    element : <ListedBooks></ListedBooks>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
