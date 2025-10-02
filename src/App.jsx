import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Main from './component/Main'
import ProductList from './component/product/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        {/* <Header />
        <Main /> */}
        <ProductList/>
      </div>
    </>
  )
}

export default App
