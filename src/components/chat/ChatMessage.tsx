import { Avatar } from '@mui/material'
import React from 'react'
import "./ChatMessage.scss"

const ChatMessage = () => {
  return (
    <div className='message'>
      <Avatar />
      <div className='messageInfo'>
        <h4>
          Formal
          <span className='messageTimestamp'>2023/02/12</span>
        </h4>

        <p>メッセージ本文</p>
      </div>
    </div>
  )
}

export default ChatMessage