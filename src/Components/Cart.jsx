import {  useState } from "react"
import './Cart.css'
import GooglePayButton from'@google-pay/button-react'



const Cart = ({cart,setCart}) => {
  const [quantities,setQuantities]= useState({})

  
  const handleQuantityChange = (id, amount) => {
    const newQuantities = {
      ...quantities,
      [id]: (quantities[id] || 0) + amount >= 0 ? (quantities[id] || 0) + amount : 0,
    };
    setQuantities(newQuantities);
    updateCartWithQuantities(newQuantities);
  }

  const updateCartWithQuantities = (newQuantities) => {
    const updatedCart = cart.map(item => {
      return {
        ...item,
        amount: newQuantities[item.id] || 0
      };
    });
    setCart(updatedCart);
  }


const total = cart.reduce(
  (accumulator, current) =>
    accumulator + current.price * (quantities[current.id] || 0),
  0
);



function handleRemove(id){
  const del = cart.filter(i=>id!==i.id)
  setCart(del)

   const updatedQuantities = { ...quantities };
    delete updatedQuantities[id];
    setQuantities(updatedQuantities);
}

  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td><b>Image</b></td>
            <td><b>Name</b></td>
            <td><b>Increase</b></td>
            <td><b>Qut</b></td>
            <td><b>Decrease</b></td>
            <td><b>Price</b></td>
            <td><b>Remove</b></td>
          </tr>
        </thead>
        <tbody>
          {cart.map((item)=>{
            return (
              <tr key={item.id}>
                <td><img src={item.image} height={'50px'} width={'50px'} alt="" /></td>
                <td>{item.title}</td>
                <td><button onClick={()=>handleQuantityChange(item.id, 1)}>+</button></td>
                <td>{quantities[item.id] ||0}</td>
                <td><button onClick={()=>handleQuantityChange(item.id, -1)}>-</button></td>
                <td>{item.price}</td>
                <td><button onClick={()=>handleRemove(item.id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6}>Total: {total}Rs</td>
            <td><button>
            <GooglePayButton style={{}} className="GooglePayButton"
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/>
              </button></td>
          </tr>
        </tfoot>
      </table>
      
    </div>
  )
}

export default Cart