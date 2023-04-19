import * as React from 'react';
import { Link } from 'react-router-dom';
import './BackButton.css'

export const BackButton = () => {
  return (

    <Link to="/cart"><button className="backbutton">Back to cart</button></Link> 
  )
}