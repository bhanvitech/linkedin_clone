import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './Login.css'
import {auth} from './firebase'
import {login} from './features/userSlice'
function Login() {
  const [email,setEmail]=useState("");
  const [password,Setpasword]=useState("");
  const [name,setName]=useState("");
  const [profilepic,setProfilpic]=useState("");
  const dispatch=useDispatch()

  const loginToApp =(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then(
      (userAuth)=>{
        dispatch(
          login({
            email:userAuth.user.email,
            uid:userAuth.user.uid,
            displayName:userAuth.user.displayName,
            profileUrl:userAuth.user.photoURL,
          })
        )
      }
    )
      .catch((error)=>alert(error))
  };
  const register=()=>{
    if(!name){
      return alert("Please enter a full name!")
    }
    auth.createUserWithEmailAndPassword(email,password).then(
      (userAuth)=>{
        userAuth.user
        .updateProfile({
          displayName:name,
          photoURL:profilepic,
        })
        .then(()=>{
          dispatch(
            login({
              email:userAuth.user.email,
              uid:userAuth.user.uid,
              displayName:name,
              photoUrl:profilepic,  
            })
          )
        });
      }
    )
    .catch((error)=>alert(error));
  };
  return (
    <div className='login'>

        {/* <img src='https://news.hitb.org/sites/default/files/styles/large/
        public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks' alt=''/> */}
        
        <img src='https://pixabay.com/images/id-2668692/' alt=''/>
        
        
        
        <form>
          <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Full name(required if registering)' type='text'/>
          <input value={profilepic} onChange={(e)=>setProfilpic(e.target.value)} placeholder='Profile pic URL 'type='text'/>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' type='email'/>
          <input value={password} onChange={(e)=>Setpasword(e.target.value)} placeholder='Password' type='password'/>
          <button type='submit' onClick={loginToApp} >Sign In</button>
        </form>
        <p> Not a Linked member?{" "}
          <span className='login_register' onClick={register}>
            Register Now
            </span>
        </p>
        </div>
  )
}

export default Login