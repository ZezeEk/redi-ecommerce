import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Main from './component/Main'
import ProductList from './component/product/ProductList'
import Cart from './component/cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        {/* <Header />
        <Main /> */}
        {/* <ProductList/> */}
        <Cart />
      </div>
    </>
  )
}

export default App
