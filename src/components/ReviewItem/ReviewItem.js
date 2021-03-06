import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity,key,price} = props.product;
    return (
        <div style ={{borderBottom:'1px solid lightGray',marginBottom :'5px',paddingBottom:'5px',marginLeft:'200px'}} className="review-item">
            <h4 className ='product-name'>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <br/>
            <button onClick ={()=> props.removeProduct(key)} className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;