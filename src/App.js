import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
}from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {
  const[loggedInUser , setLoggedInUser] = useState({});
  
  return (
   
   
       <UserContext.Provider value = {[loggedInUser,setLoggedInUser]}>
         <h3>mail : {loggedInUser.email}</h3>
     
     <Router>
     <Header></Header>
       <Switch>
         <Route path ="/Shop">
           <Shop></Shop>
         </Route>
         <Route path ="/review">
           <Review></Review>
         </Route>
         <PrivateRoute path ="/inventory">
           <Inventory></Inventory>
         </PrivateRoute>
         <Route path ="/login">
           <Login></Login>
         </Route>
         <PrivateRoute path ="/Shipment">
           <Shipment></Shipment>
         </PrivateRoute>
         <Route exact path ="/">
           <Shop></Shop>
         </Route>
         <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
         </Route>
         <Route path="*">
          <Notfound></Notfound>
         </Route>
       </Switch>
     </Router>
    
     </UserContext.Provider>
  );
}

export default App;
