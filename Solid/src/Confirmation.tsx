import "./Confirmation.css"
import { createSignal } from 'solid-js';

export default function() {
  const orderNumber = generateOrderNumber();

  return (
    <div className="confirm">
      <h1>Thank you for your order</h1>
      <h3>Your order was placed succesfully</h3>
      <p>We will send you an email with the details of your order in a few moments</p>
      <p className="ordernumber">Order number is: {orderNumber}</p>
      <p>Order date: {new Date().toLocaleDateString()}</p>
      <img src="https://static.vecteezy.com/system/resources/previews/002/206/240/original/fast-delivery-icon-free-vector.jpg" width={500} height={500}/>
    </div>
  );
}
function generateOrderNumber() {
  const [orderNumber, setOrderNumber] = createSignal("");

  const newOrderNumber = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
  setOrderNumber(newOrderNumber);

  return orderNumber();
}
