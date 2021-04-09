import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


import SimpleCardForm from './SimpleCardForm';



const stripePromise = loadStripe('	pk_test_51IeFbyB9GZIXDCxSahg31yeeSglIZOouUMM8UT68J516dBUJiIkyVHiIvMIL2dHzC2A3Wr0QSOey8x9CoIJoB9m100cMkPH2re');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
     <SimpleCardForm handlePayment ={handlePayment}></SimpleCardForm>
      </Elements>
      
    );
};

export default ProcessPayment;