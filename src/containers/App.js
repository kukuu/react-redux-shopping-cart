import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const App = () => (
  <div>
    <h2>The Shopping Cart</h2>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App
