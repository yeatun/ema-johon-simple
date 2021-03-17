import React, { useContext, useState } from 'react';

import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { handleGoogleSignIn, initializeLoginFramework,handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';



function Login() {
  const [newUser,setNewUser] =useState(false)
  const [user,setUser] =useState({
    inSignedIn : false,
    name : '',
    email : '',
    password: '',
    photo : ''

  })
  initializeLoginFramework();

  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn =() =>{
      handleGoogleSignIn()
      .then(res => {
        handleResponse(res,true);
        })}
        const fbSignIn =() =>{
            handleFbSignIn()
            .then(res => {
                handleResponse(res,true);
        })
        };
  const signOut = () => {
    handleSignOut()
    .then(res => {
        handleResponse(res,false);
  })
}
   const handleResponse =(res , redirect) =>{
    setUser (res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
   }

  const handleBlur = (event) =>{
    
      // console.log(event.target.name,event.target.value);\
      let isFieldValid =true;
      if(event.target.name === 'email'){
           isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
         
      }
      if(event.target.name === 'password'){
        const isPasswordValid = event.target.value.length>6;
        const passwordHasNumber = /\d{1}/.test(event.target.value);
        isFieldValid =isPasswordValid && passwordHasNumber;
      }
        if(isFieldValid){
          const newUserInfo ={...user};
          newUserInfo [event.target.name] = event.target.value; 
          setUser (newUserInfo);
        }
  }
  const handleSubmit = (event) =>{
    // console.log(user.email, user.password)
  if(newUser && user.email && user.password){ 
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res =>{
        handleResponse(res,true);
      })
      }
      if(!newUser && user.email && user.password){

       signInWithEmailAndPassword(user.email,user.password)
       .then(res =>{
        handleResponse(res,true);
      })
      }
      event.preventDefault();
  }

 
  return (
    <div style ={{textAlign:"center"}} >
     
        {
          user.isSignedIn ?  <button onClick={signOut}>sign out</button> :
          <button onClick={googleSignIn}>sign in</button>
        }
        <br/>

        <button onClick ={fbSignIn}>facebook log in</button>
        {
          user.isSignedIn && <div>
            <p>welcome,{user.name}</p>
            <p>mail:{user.email}</p>
            <img src={user.photo} alt=""/>
          </div>
        }
      <h1>our own auth</h1>
      <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
      <label htmlFor="newUser">new user sign up</label>
     <form onSubmit = {handleSubmit}>
      {newUser && <input name ="name" type="text" onBlur ={handleBlur} placeholder ="your Name"  required/>}
          <br/>
     <input type="text" name ="email" onBlur ={handleBlur} placeholder ="mail address" required/>
      <br/>
      <input type="password" name="password" onBlur ={handleBlur} placeholder="password" required />
      <br/>
     <input type="submit" value={newUser ? 'sign up' : 'sign in'}/>
     </form>
     <p style ={{color : "red"}}>{user.error}</p>
     {user.success && <p style ={{color : "green"}}>user {newUser ? 'created': 'logged in'} successfully</p>}
    </div>
 
    )}

export default Login;