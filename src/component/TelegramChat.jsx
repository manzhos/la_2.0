import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Button
} from '@mui/material/';

import { telegramBotToken, telegramBotId } from '../config'

const TelegramChat = () => {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');
  const [myMessages, setMyMessages] = useState([]);
  const [status, setStatus] = useState('');
  const [botAnswers, setBotAnswers] = useState([]);
  const [dialog, setDialog] = useState([]);
  
  const botToken = telegramBotToken;
  const chatId = telegramBotId;
  const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const telegramGetUpdatesUrl = `https://api.telegram.org/bot${botToken}/getUpdates`;

  const idGenerate = () => {
    return Math.floor(100000 + Math.random() * 900000);
  }

  const sendMessage = async () => {
    const fullMessage = `${userId}: ${message}`
    // console.log('fullmessage:'. fullMessage);
    // console.log('fullmessage:'. chatId);
    try {
      await axios.post(telegramApiUrl, {
        chat_id: chatId,
        text: fullMessage,
      });
      setStatus('Message sent!');
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Failed to send message.');
    }
  };

  const fetchMessages = async (uuId) => {
    try {
      // console.log('FETCH userId:', uuId)
      const response = await axios.get(telegramGetUpdatesUrl);
      const messages = response.data.result;
      // console.log('messages:', messages)
      const answers = messages.filter(m => m.message?.reply_to_message?.text?.split(':')[0] === String(uuId));
      if(answers?.length){
        // console.log('answers:', answers);
        const allBotAnswers = [];
        answers.forEach(a => {
          const answer = {
            question: a.message.reply_to_message.text,
            answer: a.message.text
          };
          // console.log('answer:', answer);
          allBotAnswers.push(answer);
        })
        setBotAnswers(allBotAnswers);
      }
    } catch (error) {
      console.error('Error fetching updates:', error);
    }
  };

  useEffect(()=>{
    // console.log('myMessages:', myMessages)
    // console.log('botAnswers:', botAnswers)
    makeDialog();
  }, [myMessages, botAnswers]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();

    const messages = [...myMessages, message]
    setMyMessages(messages);

    setMessage('');
  };

  const makeDialog = () => {
    // myMessages
    // botAnswers
    const dialogArr = [];
    myMessages.forEach(m => {
      const question = m;
      const answer = botAnswers.find(a => a.question.split(': ')[1] === question)
      dialogArr.push({
        question: question,
        answer: answer ? answer.answer : false
      })
    })
    // console.log('dialogArr:', dialogArr)
    setDialog(dialogArr)
  }

  // set session id like useId
  useEffect(() => {
    let existingUserId = localStorage.getItem('userId');

    if (!existingUserId) {
      existingUserId = idGenerate();
      localStorage.setItem('userId', existingUserId);
    }
    // console.log('USER ID:', existingUserId)

    setUserId(existingUserId);
  }, []);

  // start fetch bot answers
  useEffect(() => {
    const intervalId = setInterval(() => {
      // console.log('update')
      fetchMessages(userId)
    }, 4000);
    return () => clearInterval(intervalId);
  }, [userId]);

  // UI logic
  const ChatIcon = () => {return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path 
        style={{ fill: 'white' }} 
        d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"
      />
    </svg>
  )}

  const SendIcon = () => {return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
      <path 
        style={{ fill: 'black' }} 
        d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
      />
    </svg>
  )}

  const CloseIcon = () => {return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24" height="24">
      <path 
        style={{ fill: 'white' }} 
        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
      />
    </svg>
  )}

  const [open, setOpen] = useState(false)

  return (
    <div>
      <div
        style={{ 
          position:"fixed", 
          bottom:"15px", 
          right:"10px",
          width:"40px",
          height:"40px",
          borderRadius:"20px",
          backgroundColor:"black",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          boxShadow: "0 5px 5px 1px rgba(0, 0, 0, 0.5)"
        }}
      >
        <div style={{ width:"60%", paddingTop:"4px", cursor:"pointer" }} onClick={()=>{setOpen(!open)}}>
          {open ? <CloseIcon /> : <ChatIcon />}
        </div>
        {open &&
          <div 
            id="dialog popup" 
            style={{
              position: "absolute",
              bottom: "50px",
              right: "10px",
              width: "85vw",
              maxWidth: "280px",
              // height: "85vh",
              maxHeight: "450px",
              background: "rgb(232, 225, 215)",
              border:"1px solid black",
              borderRadius: "12px",
              padding:"15px",

              boxShadow: "0 10px 10px 1px rgba(0, 0, 0, 0.25)"
            }}
          >
            <h3>Send a message to Telegram</h3>
            <div style={{
              padding:"15px",
              marginBottom: "10px",
              backgroundColor:"rgba(255, 255, 255, 0.5)",
              borderRadius:"6px",
              maxHeight:"300px",
              overflow:"auto"
            }}>
              {dialog.length > 0 ? (
                dialog.map((message, index) => (
                  <div style={{width:'100%'}}>
                    <p key={'q'+index} style={{textAlign:'right'}}>{message.question}</p>
                    <p key={'a'+index} style={{textAlign:'left'}}>{message.answer}</p>
                  </div>
                ))
              ) : (
                <p>No messages yet...</p>
              )}
            </div>
            <form onSubmit={handleSubmit}>
              <input
                value={message}
                onChange={(e) => {setMessage(e.target.value)}}
                placeholder="Type your message"
                style={{
                  height:"40px",
                  borderRadius:"6px",
                  border:"1px solid black",
                  width:"65%",
                  padding:"0 10px"
                }}
              />
              <Button type="submit"><SendIcon/></Button>
            </form>
            {status && <p className='tech-info'>{status}</p>}
          </div>
        }
      </div>
    </div>
  );
};

export default TelegramChat;
