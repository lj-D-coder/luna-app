"use client"
import { FunctionComponent, useEffect } from 'react'
import useLocalStorageState from 'use-local-storage-state'

import { Quantifier, Operation } from './Quantifier'
import { CartProps } from './products'
import { TotalPrice } from './TotalPrice'
import { usePathname } from 'next/navigation';


export const Cart: FunctionComponent = () => {

  const handleCheckout = () => {
    console.log('Checkout clicked. Cart details:', cart);
    console.log(totalPrice);
  }

  const [cart, setCart] = useLocalStorageState<CartProps>('cart', {})
  const location = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const handleRemoveProduct = (productId: number): void => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart }
      delete updatedCart[productId]
      return updatedCart
    })
  }

  const handleUpdateQuantity = (productId: number, operation: Operation) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart }
      if (updatedCart[productId]) {
        if (operation === 'increase') {
          updatedCart[productId] = { ...updatedCart[productId], quantity: updatedCart[productId].quantity + 1 }
        } else {
          updatedCart[productId] = { ...updatedCart[productId], quantity: updatedCart[productId].quantity - 1 }
        }
      }
      return updatedCart
    })
  }


  const getProducts = () => Object.values(cart || {})

  const totalPrice = getProducts().reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0)

  return (
    <section className="p-4 mt-32">
      <h1>Cart</h1>

      <div className="flex flex-col">
        {getProducts().map(product => (
          <div className="flex border-t border-l border-r border-dotted px-1 py-0.5 items-center" key={product.id}>
            <img className='max-w-12 h-auto m-2.5' src={product.thumbnail} alt={product.title} />
            <h3 className='text-blue-600 font-bold text-base leading-5 m-0.5 flex-grow'>{product.title}</h3>
            <Quantifier
              removeProductCallback={() => handleRemoveProduct(product.id)}
              productId={product.id}
              handleUpdateQuantity={handleUpdateQuantity} />
          </div>
        ))}
      </div>
      <TotalPrice amount={totalPrice} />
      {totalPrice > 0 && (
        <div className='mt-4 flex justify-center'>
          <button onClick={handleCheckout} className='px-4 py-2 bg-blue-500 text-white rounded'>Checkout</button>
        </div>
      )}
    </section>
  )
}
