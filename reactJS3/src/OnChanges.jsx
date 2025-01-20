import React, {useState}from 'react';



function OnChanges (){
    const [name,setname]= useState("");
    const [quantity, setquantity]= useState(); 
    const [comment, setcomment]= useState("");
    const [payment, setpayment] = useState("");
    const [shipping, setshipping]= useState("");




    function handleNameChange(event){
        setname(event.target.value);

    }

    function handleQuantityChange(event){
        setquantity(event.target.value);
    }

    function handleCommentChange(event){
        setcomment(event.target.value);

    }

    function handlePaymentChange(event){
        setpayment(event.target.value);
    }

    function handleShippingChange(event){
        setshipping(event.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>name: {name}</p>

            <br />
            <input value={quantity} OnChange={handleQuantityChange} type="number"/>
            <p>quantity: {quantity}</p>
            
            <br />
            <textarea  value={comment} OnChange={handleCommentChange}
            placeholder="enter delivery instructions" />
            <p>comment: {comment}</p>

            <br />
            <select value={payment} OnChange = {handlePaymentChange}>
                <option value="">select an option</option>
                <option value="visa">Visa</option>
                <option value="mastercard">mastercard</option>
                <option value="giftcard">giftcard</option>
            </select>
            <p>payment: {payment}</p>

            <label>
                <input type="radio" value ="Pick up"
                     checked ={shipping === "Pick up"}/>
                Pick up
            </label>
            <br />

            <label >
            <input type="radio" value ="delivery"
                     checked ={shipping === "delivery"}/>
                delivery
            </label>
            <p>shipping: {shipping}</p>
        </div>
    );

}
export default OnChanges