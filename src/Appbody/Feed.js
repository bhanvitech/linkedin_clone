import React ,{useEffect, useState} from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOptn from './InputOptn';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Posts from './Posts';
import {db} from '../firebase';
import firebase from 'firebase';
import {login, selectUser} from '../features/userSlice'
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move'

function Feed() {
  const user=useSelector(selectUser);
  const [input,setInput]=useState('')
  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    db.collection("posts")
    .orderBy('timestamp','desc')
    .onSnapshot((snapshot)=>//accessing firebase through db.collection of posts , and onsnapshot is basically gives us a realtime listener connection to db, it gives post collection 
    setPosts(snapshot.docs.map((doc)=>({//everytime post chng it update the state of post and docs ie every colletion has its doc , on every single doc it maps

      id :doc.id ,//it return an object of its id and data
       data:doc.data(),//ie data sotored behind
      }))
    )
    );
  },[])
  //this is for input for writing post , so whenever we write post in it 
  const sendPost=e=>{
    e.preventDefault();//it will not refresh the page ie removing default property of it
    //on writing posts it push into post that we r actually listening to
    //add an object to db
    db.collection('posts').add({
      name:user.displayName,
      description:user.email,
      message:input,
    photoUrl:user.photoUrl ||"",
  timestamp:firebase.firestore.FieldValue.serverTimestamp() 
})
  setInput("");
  }

  return (
    <div className='feed'>
        <div className='feed_inputContainer'>
                <div className='feed_input'>
                    <CreateIcon/>   
                    <form>
                        <input value={input}  onChange={e=>setInput(e.target.value)}type='text'/>
                        <button onClick={sendPost} type='submit'>
                            Send
                            </button>   
                    </form>         
                </div>
               
                <div className='feed_inputOptions'>
                <InputOptn Icon={ImageIcon} title='Photo' color='#70B5F9'/>
                <InputOptn  Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
                <InputOptn  Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
                <InputOptn  Icon={CalendarViewDayIcon} title='Write Article' color='#7FC15E'/>
               
                  </div>
         
        </div>
        <FlipMove>
        {posts.map(({id,data:{name,description,message,
        photoUrl}})=>(
        <Posts 
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
        ))}
        </FlipMove>
            
            
    </div>
    
  )
}
 
export default Feed