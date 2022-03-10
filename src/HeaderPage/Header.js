import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import linkedimg from '../assets/lkb.png'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from '../firebase'
import {logout, selectUser} from '../features/userSlice'

function Header() {
  
  const dispatch=useDispatch();
  const logoutOfApp =()=>{
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className='header'>
      
        <div className='header_left'>
            <img src={linkedimg} alt=''/>
            
            <div className='header_search'>
                <SearchIcon/>
                <input placeholder='Search' type='text'/>
            </div>
        </div>
        <div className='header_right'>
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
            <HeaderOption Icon={ChatIcon} title='Messaging'/>
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
            <HeaderOption avatar={true} title='me'
            onClick={logoutOfApp}
            />
        </div>
    </div>
  ) 
}

export default Header