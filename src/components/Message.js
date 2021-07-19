import classes from './Message.module.scss';
import Box from '@material-ui/core/Box';

function Message(props) {
  const {text, uid, photoURL} = props.message;

  const messageClass = uid === props.auth.currentUser.uid ? classes.sent : classes.received;

  return (
    <Box className={`${classes.message} ${messageClass}`} boxShadow={5}>
      <img src={photoURL}/>
      {text}
    </Box>
  )
}

export default Message;