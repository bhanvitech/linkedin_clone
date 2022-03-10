import React from 'react'
import './Widget.css'
import InfoIcon from '@mui/icons-material/Info'
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"
function Widget() {
    const newsArticle=(heading,subtitle)=>(
        <div className='widgets_article'>
            <div className='widgets_articleLeft'>
                    <FiberManualRecordIcon/>
                </div>
                <div className='widgets_articleRight'>
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>                
                </div>    
            </div>
    )
  return (
    <div className='widgets'>
        <div className='widgets_header'>
            <h2>LinkedIn News</h2>
            <InfoIcon/>
            </div>
            {newsArticle("Bhanvi is back","top news-9999 readers")}
            {newsArticle("Bhanvi is back","top news-9999 readers")}
            {newsArticle("Bhanvi is back","top news-9999 readers")}
            {newsArticle("Bhanvi is back","top news-9999 readers")}
            {newsArticle("Bhanvi is back","top news-9999 readers")}
        </div>
  )
}

export default Widget