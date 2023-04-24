import { PiletApi } from 'webshop-shell';
import AddButton from './AddButton.vue';
import Cart from './Cart.vue';
import {Link} from 'react-router-dom';
import * as React from 'react';
import OverviewProducts from './OverviewProducts.vue';

interface ButtonExtension {
  item: Object
}

interface CartItem {
  product_id: number,
  name: string,
  quantity: number,
  price: number,
  image: string,
  description: string,

}

export function setup(app: PiletApi) {

  app.setData('cart', []);

  const addToCart = (item) => {
    const cart = app.getData('cart');
    const itemIndex = cart.findIndex((cartItem) => {
      return cartItem.name === item.name;
    });
  
    if (itemIndex !== -1) {
      cart[itemIndex].quantity++;
      app.setData('cartLength', app.getData('cartLength') + 1);
    } else {
      item.quantity = 1;
      cart.push(item);
      app.setData('cartLength', app.getData('cartLength') + 1);
    }
  
    const cartLength = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  
    app.emit('update-cart', cart);
    app.setData('cart', cart);
    app.setData('cartLength', cartLength);
  };

  app.registerExtension<ButtonExtension>(
    'add-button', 
    app.fromVue(AddButton, { addToCart: addToCart})
  )

  const MenuComponent = () => {
    const [cartAmount, setCartAmount] = React.useState(0);

    const updateCartAmount = () => {
      let newCartAmount = app.getData('cart').reduce((total, item) => total + item.quantity, 0);
      setCartAmount(newCartAmount);
    };
  
    React.useEffect(() => {
      updateCartAmount();
      app.on('update-cart', updateCartAmount);
      return () => app.off('update-cart', updateCartAmount);
    }, [app.getData('cart').length]);
  
    return (
      <Link to="/cart">
        Cart ({cartAmount})
      </Link>
    );
  };
  

  app.registerMenu(MenuComponent);
  app.registerExtension('overview-products', app.fromVue(OverviewProducts, { cart : app.getData('cart') }));

  app.registerPage("/cart", app.fromVue(Cart, { cart: app.getData('cart') }) );

}
