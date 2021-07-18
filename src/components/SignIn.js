import classes from './SignIn.module.scss';

function SignIn(props) {

  function signInWithGoogle() {
    const provider = new props.firebase.auth.GoogleAuthProvider();
    props.auth.signInWithPopup(provider);
  }
  return (
    <button onClick={signInWithGoogle}>Sign In With Google</button>
  )
}

export default SignIn