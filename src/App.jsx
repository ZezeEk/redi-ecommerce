import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import ProductList from './components/product/ProductList'
import Cart from './components/cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        {/* <Header />
        <Main /> */}
        <ProductList/>
        {/* <Cart /> */}
      </div>
    </>
  )
}

export default App
