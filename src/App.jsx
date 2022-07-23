import { NextUIProvider } from '@nextui-org/react';
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './navbar';
import './App.css';


const Product = lazy(() => import("./components/product"));
const Cart = lazy(() => import("./components/cart"));


function App() {

  return (
  <NextUIProvider>
    <Navbar />
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Product />}>Product</Route>
          <Route path='/cart' element={<Cart />}>Cart</Route>
        </Routes>
      </Suspense>
    </Router>

  </NextUIProvider>
  )
}

export default App
