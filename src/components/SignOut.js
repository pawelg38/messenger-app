import classes from './SignOut.module.scss';

function SignOut(props) {
  return props.auth.currentUser && (
    <button onClick={()=>props.auth.signOut()}>SignOut</button>
  )
}

export default SignOut;