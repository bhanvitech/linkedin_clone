import React from 'react'
import './HeaderOption.css' 

import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
function HeaderOption({avatar,Icon ,title,onClick }) {

    const user=useSelector(selectUser)
  
  return (
    <div onClick={onClick} className='header_option'>
        {Icon && <Icon className='header_option_icon'/>}
        {avatar && (<Avatar  className='header_option_icon' >{user?.email[0]}</Avatar> )}
        <h3 className='header_option_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption