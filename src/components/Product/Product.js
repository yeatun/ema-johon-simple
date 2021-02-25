import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import { faRandom } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    return (
        <div className = 'product'>
            <div>
                <img src={props.product.img} alt=""/>
            </div>
            <div> 
                <h3 className='product-name'>{props.product.name}</h3>
                <br/>
                <p><small> <b> by:</b> <b> {props.product.seller}</b></small></p>
                <p> <b>${props.product.price}</b></p>
                
                <p><small><b>only {props.product.stock} left in stock - order soon</b> </small></p>
                <button className ='main-button' onClick ={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
           
        </div>
    );
};

export default Product;