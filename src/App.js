import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import './App.css';
import {login, logout,selectUser } from './features/userSlice';
import Feed from './Appbody/Feed';
import Sidebar from './Appbody/Sidebar';
import Header from './HeaderPage/Header';
import Login from './Login';
import {auth} from './firebase';
import Widget from './Appbody/Widget';

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        //user is logged 
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoUrl:userAuth.photoURL,

        }))
      }
      else{
        //user is logout
        dispatch(logout());
      }
    })
  },[]);
  return (
    <div className="app">
    
    <Header/>
    {!user?(
      <Login/>
    ):(
    <div className='app_body'>
    <Sidebar/>
    <Feed/>
    <Widget/>
    </div>
    )}
    </div>
  );
}

export default App;
