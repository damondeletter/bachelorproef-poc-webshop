import * as React from 'react';
import { Link } from 'react-router-dom';
import './CheckoutButton.css'

export const CheckoutButton = () => {
  return (
    <Link to="/order">
      <button className='checkoutbutton'>Checkout</button></Link>
  )
}