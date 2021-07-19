import classes from './SignIn.module.scss';
import Box from '@material-ui/core/Box';

function SignIn(props) {

  function signInWithGoogle() {
    const provider = new props.firebase.auth.GoogleAuthProvider();
    props.auth.signInWithPopup(provider);
  }
  return (
    <Box className={classes.container} boxShadow={5}>
      <button className={classes.signInBtn} onClick={signInWithGoogle}>Sign In With Google</button>
    </Box>
  )
}

export default SignIn