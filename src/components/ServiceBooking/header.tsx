"use client"
import { FunctionComponent, useEffect } from 'react'
import Link from 'next/link';
import useLocalStorageState from 'use-local-storage-state'
import Image from 'next/image';

import logo from '@/assets/images/Luna_Naanna_logo.png'
import { CartWidget } from './CartWidget'
import { CartProps } from './products'

export const Header: FunctionComponent = () => {
  
  const [cart,] = useLocalStorageState<CartProps>('cart', {})

  const productsCount: number = Object.keys(cart || {}).length

  return (
    <header className='w-full flex items-center bg-[#a8b8ee] fixed right-0 left-0 top-0 justify-between z-10'>
      <div>
        <Link href="/">
          <Image src={logo} className="w-32 ml-20" alt="Shopping Cart Application" />
        </Link>
      </div>
      <div>
        <CartWidget productsCount={productsCount} />
      </div>
    </header>
  )
}