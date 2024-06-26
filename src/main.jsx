import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Home from './Pages/Home'
import Blogs from './Pages/Blogs'
import Bookmarks from './Pages/Bookmarks';


const router = createBrowserRouter([
  {
   path: '/',
   element: <MainLayout></MainLayout>,
   children: [
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/blogs',
      element: <Blogs></Blogs>,
      loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7')
    },
      {
        path: '/bookmarks',
        element: <Bookmarks></Bookmarks>
      }
   ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
