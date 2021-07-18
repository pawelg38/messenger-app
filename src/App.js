import Layout from './components/layout/Layout';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import Chat from './components/Chat';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyB_vdOpJp7onAWnGIouA9fAB9bk6pqPS5o",
  authDomain: "messenger-app-1299f.firebaseapp.com",
  projectId: "messenger-app-1299f",
  storageBucket: "messenger-app-1299f.appspot.com",
  messagingSenderId: "841782407529",
  appId: "1:841782407529:web:90fd16e1e33584d96c0df8"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <Layout>
      <section>
        <SignOut auth={auth}/>
        {user ? <Chat firestore={firestore} auth={auth} firebase={firebase} /> : <SignIn firebase={firebase} auth={auth}/>}
      </section>
    </Layout>
  );
}

export default App;
