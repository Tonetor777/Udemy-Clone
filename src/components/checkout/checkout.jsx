import React, { useState } from "react";
export default function Checkout(){
    const [showForm, setShowForm] = useState(false);

  const handleRadioChange = () => {
    setShowForm(!showForm);
  };
  const [showPay, setShowPay] = useState(false);

  const handleRadio = () => {
    setShowPay(!showPay);
  };
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
    
        <div className="border mr-5  ml-5 h-auto"><input type="radio" name="select"  onChange={handleRadioChange}/> Credit/Debit Card
        {showForm && (
  <form className="ml-8">
    <div className="mb-4">
      <label >Name on card:</label> <br />
      <input type="text" id="name" name="name" className="border" required/>
    </div>
    <div className="mb-4">
      <label >Card number:</label><br />
      <input type="email" id="email" name="email" className="border" required/>
    </div>
    <div className="mb-4 flex ">
      <label  >Expired Date:</label>
      <input type="date" id="date" name="date" className="border" required />
      <label >CVC/CVV:</label>
      <input type="text" id="ccc" name="CVC" className="border" required />
    </div>

    <button type="submit" className="m-6 w-96 h-16 rounded bg-blue-500">
      Submit
    </button>
  </form>
)}</div>
        <div className="border mr-5  ml-5"><input type="radio" name="select" onClick={handleRadio}/> PayPal
      {showPay &&(
        <p className="text-xl ml-3">In order to complete your transcation, we will transfer you over to PayPal's secure servers.  </p>
      )

      }</div>
       </div>
        <div>
            <h2 className="text-4xl m-8">Summary</h2>
            <div className="mb-4">Original Price:</div>
            <div className="mb-4">Discounts:</div>
            <hr />
            <div className="mt-2">Total:</div>
<form action="http://localhost/resource/StripApi/checkout.php" method="post">
            <button className=" m-6 w-96 h-16 rounded bg-blue-500"> Complete Checkout</button>
            </form> </div>
        </div>
        </>
    )
}