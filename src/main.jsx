import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Carousal from './component/Carousal.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import Header from './component/Header.jsx'
import Card from './component/Card.jsx'
import Product from './component/Product.jsx'
import Cart from './component/Cart.jsx'
import Cartitem from './component/Cartitem.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<App/>}/>
      <Route path='product/:productId' element={<Product/>}>
        {/* <Route path='cart' element={<Cart/>}/> */}
      </Route>
      <Route path='/product/cart' element={<Cart/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
  )
 )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
