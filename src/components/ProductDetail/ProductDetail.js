import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const [product,setProduct] = useState({})
    useEffect(() =>{
        fetch('https://shrouded-fjord-15103.herokuapp.com/product/'+ productKey)
        .then(res => res.json())
        .then(data => setProduct(data));
    },[productKey])

    // const product=fakeData.find(pd =>pd.key === productKey)
    return (
        <div>
            <h1>the is details</h1>
            {/* <h1>{productKey } detail coming soon......</h1> */}
            <Product  showAddToCart ={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;