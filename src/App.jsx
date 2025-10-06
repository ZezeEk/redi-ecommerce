import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import ProductList from './components/product/ProductList'
import CartPage from './components/cart/CartPage';
import { CartProvider } from './providers/CartProvider'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <CartProvider>
             <Router>
              <Header />
              <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
            </Router>
           {/* <Header /> */}
          {/*<Main /> */}
          {/* <ProductList/> */}
          {/* <Cart /> */}
        </CartProvider>     
      </div>
    </>
  )
}

export default App
