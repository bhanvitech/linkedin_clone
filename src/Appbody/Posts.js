import React, { forwardRef } from 'react'
import Avatar from '@mui/material/Avatar'
import './Posts.css'
import InputOptn from './InputOptn'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Posts=forwardRef(({name,description,message,photoUrl},ref) =>{
  return (
    <div ref={ref} className='post'>
        <div className='post_header'>
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className='post_info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className='post_body'>
            <p>{message}</p>
        </div>
        <div className='post_buttons'>
            <InputOptn Icon ={ThumbUpOffAltIcon} title='Like' color='gray'/>
            <InputOptn Icon ={ChatIcon} title='Comment' color='gray'/>
            <InputOptn Icon ={ShareIcon} title='Share' color='gray'/>
            <InputOptn Icon ={SendIcon} title='Send' color='gray'/>
            </div>
    </div>
  )
})

export default Posts