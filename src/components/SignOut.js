import classes from './SignOut.module.scss';

function SignOut(props) {
  return props.auth.currentUser && (
    <button className={classes.btn} onClick={()=>props.auth.signOut()}>Logout</button>
  )
}

export default SignOut;