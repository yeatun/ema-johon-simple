import React from 'react';
import { useContext } from 'react';
import {UserContext} from '../../App'; 
import { useForm,  } from 'react-hook-form';
import "./Shipment.css"
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const onSubmit = data =>{ 
    // console.log('from submitted' ,data)
    const savedCart = getDatabaseCart()
    const orderDetails = {...loggedInUser, products: savedCart, shipment: data, orderTime: new Date()};

    fetch('http://localhost:7000/addOrder',{
      method : 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(orderDetails)
    })
    .then(res => res.json())
    .then(data =>{
      if (data){
        processOrder();
        alert('your order placed successfully');
      }
    })

  
  }

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    
    <form className ="ship-form" onSubmit={handleSubmit(onSubmit)}>
      
 
      <input name="name" defaultValue ={loggedInUser.name} ref={register({ required: true })} placeholder ="your name" />
      {errors.name && <span className='error'>name is required</span>}
      
 
      <input name="email" defaultValue ={loggedInUser.email} ref={register({ required: true })} placeholder ="your email" />
      {errors.email && <span className='error'>email is required</span>}
   
      <input name="address" ref={register({ required: true })}placeholder ="your address"/>
      {errors.address && <span className='error'>address is required</span>}
      <input name="phone no" ref={register({ required: true })}placeholder ="your phone no" />
      {errors.phone && <span className='error'>phone no is required</span>}
      
      <input type="submit" />
    </form>
  );
};

export default Shipment;