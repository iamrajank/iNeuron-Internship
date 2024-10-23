import { useState } from 'react'
import React from 'react'
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect } from 'react';


const CheckOut = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit')
  const { cart } = useSelector((state) => state);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  const navigate = useNavigate()

  

  function submitHandler(event){
    event.preventDefault();
    toast.success("Thank You for the Shopping: Order is placed");
    navigate("/")


  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-14">
      <h2 className="text-2xl font-bold mb-6">Billing address</h2>

      <div className="flex flex-col">
              <div className="font-bold text-green-800 uppercase">
                Your Cart
              </div>
              <div className="text-2xl text-green-900 font-semibold uppercase">
                Summary
              </div>
              <p className="font-semibold mt-2">
                Total Items :<span className="font-normal"> {cart.length}</span>
              </p>

              <p className="">
                Total Amount :{" "}
                <span className="font-semibold">${totalAmount}</span>{" "}
              </p>
            </div>

            <hr></hr>
            <br></br>




      <form onSubmit = {submitHandler} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 ">First name</label>
            <input type="text" id="firstName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
            <input type="text" id="lastName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
        </div>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">@</span>
            <input type="text" id="username" className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Username" />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email (Optional)</label>
          <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input type="text" id="address" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="1234 Main St" />
        </div>
        <div>
          <label htmlFor="address2" className="block text-sm font-medium text-gray-700">Address 2 (Optional)</label>
          <input type="text" id="address2" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Apartment or suite" />
        </div>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-2">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
            <select id="country" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50">
              <option>Choose...</option>
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div className="col-span-6 sm:col-span-2">
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
            <select id="state" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50">
              <option>Choose...</option>
              <option>California</option>
              <option>New York</option>
              <option>Texas</option>
            </select>
          </div>
          <div className="col-span-6 sm:col-span-2">
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip</label>
            <input type="text" id="zip" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <input id="shipping-same" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <label htmlFor="shipping-same" className="ml-2 block text-sm text-gray-900">Shipping address is the same as my billing address</label>
          </div>
          <div className="flex items-center">
            <input id="save-info" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <label htmlFor="save-info" className="ml-2 block text-sm text-gray-900">Save this information for next time</label>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Payment</h2>
        <div className="space-y-2">
          <div className="flex items-center">
            <input id="credit" name="paymentMethod" type="radio" checked={paymentMethod === 'credit'} onChange={() => setPaymentMethod('credit')} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
            <label htmlFor="credit" className="ml-2 block text-sm text-gray-900">Credit card</label>
          </div>
          <div className="flex items-center">
            <input id="debit" name="paymentMethod" type="radio" checked={paymentMethod === 'debit'} onChange={() => setPaymentMethod('debit')} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
            <label htmlFor="debit" className="ml-2 block text-sm text-gray-900">Debit card</label>
          </div>
          <div className="flex items-center">
            <input id="paypal" name="paymentMethod" type="radio" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
            <label htmlFor="paypal" className="ml-2 block text-sm text-gray-900">PayPal</label>
          </div>
        </div>

        {paymentMethod !== 'paypal' && (
          <div className="space-y-4 mt-4">
            <div>
              <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">Name on card</label>
              <input type="text" id="cardName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Full name as displayed on card" />
            </div>
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Credit card number</label>
              <input type="text" id="cardNumber" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <label htmlFor="expiration" className="block text-sm font-medium text-gray-700">Expiration</label>
                <input type="text" id="expiration" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="MM/YY" />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                <input type="text" id="cvv" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="CVV" />
              </div>
            </div>
          </div>
        )}

        <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Continue to checkout
        </button>
      </form>
    </div>
  )
}

export default CheckOut;