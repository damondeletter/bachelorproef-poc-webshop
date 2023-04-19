import * as React from 'react';
import { PiletApi } from 'webshop-shell';
import { Link } from 'react-router-dom';
import { ProductPage } from './ProductPage';
import products from './mock/products';
import { BackButton } from './BackButton';
import { CheckoutButton } from './CheckoutButton';
import { RecommendedSection } from './RecommendedSection';


export function setup(app: PiletApi) {
  
  app.registerTile('Product', ({ piral }) => ( <ProductPage products={products} AddButton={({ item }) => <piral.Extension name="add-button" params={item} /> } /> ))
  app.registerExtension('about-link', () => <Link to="/about">About nomadr-webshop</Link>);
  app.registerExtension('checkout-button', CheckoutButton);
  app.registerExtension('back-button', BackButton);
  app.registerExtension('recommended-products', ({ piral }) => ( <RecommendedSection products={products} AddButton={({ item }) => <piral.Extension name="add-button" params={item} /> } /> ))

}
