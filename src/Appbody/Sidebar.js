import React from 'react'
import Avatar from '@mui/material/Avatar';
import './Sidebar.css'
import bg from '../assets/bg1.jpg'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Sidebar() {
  const user=useSelector(selectUser);

    const recentitem=(topic)=>(
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
            </div>
    )
  return (
    <div className='sidebar'>
        <div className='sidebar_top'>
            <img src={bg} alt=''/>
            <Avatar src={user.photoUrl} className='sidebar_avatar'>
              {user.email[0]}
              </Avatar>
            <h2>{user.displayName}</h2>
            
            <h4>{user.email}</h4>
            </div>
            <div className='sidebar_stats'>
                <div className='sidebar_stat'>
                    <p>Who viewed your profile</p>
                    <p className='sidebar_statNumber'>2,543</p>
                    </div>
                    <div className='sidebar_stat'>
                    <p>Views on post</p>
                    <p className='sidebar_statNumber'>2,773</p>
                    </div>
                </div>
                <div className='sidebar_bottom'>
                <p>Recent</p>    
                {recentitem('reactjs')}
                {recentitem('softwareEngineer')}
                {recentitem('javascript')}
                {recentitem('html')}
                {recentitem('css')}
                </div>
    </div>
  )
}

export default Sidebar