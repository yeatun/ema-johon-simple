import React from 'react';

const Inventory = () => {
    const product={}
    const handleAddProduct =() =>{
        fetch('https://shrouded-fjord-15103.herokuapp.com/addProduct',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(product)
        })
    }

    return (
        <div>
                <form action="">
                    <p><span>name: </span><input type="text"/></p>
                    <p><span>price: </span><input type="text"/></p>
                    <p><span>quantity: </span><input type="text"/></p>
                    <p><span>product Image </span><input type="file"/></p>
                <button onClick={handleAddProduct}>Add Product</button>
                </form>

          
        </div>
    );
};

export default Inventory;