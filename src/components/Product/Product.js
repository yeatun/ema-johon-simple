import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Product = (props) => {
    const {img,name,seller,price,stock,key} = props.product;
    return (
        <div className = 'product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div> 
                <h3 className='product-name'><Link to = {"/product/" + key}>{name}</Link></h3>
                <br/>
                <p><small> <b> by:</b> <b> {seller}</b></small></p>
                <p> <b>${price}</b></p>
                
                <p><small><b>only {stock} left in stock - order soon</b> </small></p>
               {props.showAddToCart && <button className ='main-button' onClick ={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>}
            </div>
           
        </div>
    );
};

export default Product;