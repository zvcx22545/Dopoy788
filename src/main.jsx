import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Register from './components/Register/Register.jsx'
import Play from './components/Play/play.jsx'
import Blog from './components/Blog/Blog.jsx'
import Listpoy from './components/ListPoy/ListPoy.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/play",
    element: <Play/>
  },
  {
    path: "/Blog",
    element: <Blog/>
  },
  {
    path: "/ListPoy",
    element: <Listpoy/>
  },
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)