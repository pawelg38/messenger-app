import { useState, useRef, useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import classes from './Chat.module.scss';
import Box from '@material-ui/core/Box';

import Message from './Message';

function Chat(props) {

  const autoScrollDownRef = useRef();
  const messagesRef = props.firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(155);

  const [messages] = useCollectionData(query, {idField: 'id'});

  const [formValue, setFormValue] = useState('');
  
  useEffect(() => {
    autoScrollDownRef.current.scrollIntoView({behavior: 'smooth'});
  },[messages])

  async function sendMessage(e) {
    e.preventDefault();

    const {uid, photoURL} = props.auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: props.firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');
  }

  return (
    <div className={classes.container}>
      <div className={classes.chatBox}>
        {messages && messages.map( msg => {
          return <Message key={msg.id} message={msg} auth={props.auth} />
        })}
        <div ref={autoScrollDownRef}></div>
      </div>
      <form onSubmit={sendMessage}>
        <input placeholder={"send a message"} value={formValue} onChange={e => setFormValue(e.target.value)}/>
        <button type={"submit"}>Send</button>
      </form>
    </div>
  )
}

export default Chat;