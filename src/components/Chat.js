import { useState, useRef, useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import classes from './Chat.module.scss';

import Message from './Message';

function Chat(props) {

  const autoScrollDownRef = useRef();
  const messagesRef = props.firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(55);

  const [messages] = useCollectionData(query, {idField: 'id'});

  const [formValue, setFormValue] = useState('');

  async function sendMessage(e) {
    e.preventDefault();

    const {uid} = props.auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: props.firebase.firestore.FieldValue.serverTimestamp(),
      uid
    });

    setFormValue('');
  }
  useEffect(() => {
    autoScrollDownRef.current.scrollIntoView({behavior: 'smooth'});
  },[messages])

  return (
    <>
    <main>
      <div className={classes.chatContainer}>
        {messages && messages.map( msg => {
          return <Message key={msg.id} message={msg} auth={props.auth} />
        })}
        <div className={classes.test} ref={autoScrollDownRef}></div>
      </div>
    </main>
    <form onSubmit={sendMessage}>
      <input value={formValue} onChange={e => setFormValue(e.target.value)}/>
      <button type={"submit"}>Send</button>
    </form>
    </>
  )
}

export default Chat;