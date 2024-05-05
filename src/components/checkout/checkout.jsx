import React from "react";
export default function Checkout(){
    return(
        <>
        <div className="flex space-x-9">
        <div className="m-10 border shadow-lg">
            <h1 className="text-6xl m-10 pl-8">Checkout</h1>
       <h2 className="text-4xl m-8">Billing address</h2>
        <form action="" className="">
          
            <label htmlFor="" className="ml-4">Country *</label><br />
      <div className="w-80 border m-6">
       <select name="" id="">
        <option value="ethiopia">Ethiopia</option>
        <option value="USA">united state of America</option>
       </select>
       </div></form>
        <h4 className="text-sm text-wrap m-7">Udemy is required by law to collect application transcation takes for purchase made in certain tax jurisdiction</h4>
        <h2 className="text-4xl m-8">Payment method</h2>
    
        <div className="border mr-5  ml-5 h"><input type="radio" name="select"/> Credit/Debit Card</div>
        <div className="border mr-5  ml-5"><input type="radio" name="select"/> PayPal</div>
       </div>
        <div>
            <h2 className="text-4xl m-8">Summary</h2>
            <div className="mb-4">Original Price:</div>
            <div className="mb-4">Discounts:</div>
            <hr />
            <div className="mt-2">Total:</div>

            <button className=" m-6 w-96 h-16 rounded bg-blue-500"> Complete Checkout</button>
        </div>
        </div>
        </>
    )
}