import React from 'react'
import { CartProvider } from 'react-use-cart'
import Cart from '../cart/Cart'

const ShopCart = () => {
  return (
    <CartProvider>
        <Cart/>
    </CartProvider>
  )
}

export default ShopCart