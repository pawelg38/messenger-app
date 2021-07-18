import classes from './Message.module.scss';

function Message(props) {
  const {text, uid} = props.message;

  const messageClass = uid === props.auth.currentUser.uid ? classes.sent : classes.received;

  return (
    <div className={`${classes.message} ${messageClass}`}>
      <p>{text}</p>
    </div>
  )
}

export default Message;