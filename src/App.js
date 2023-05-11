import React, { useEffect, useState } from 'react';
import SignIn from './components/SignIn';
import Home from './components/Home';
import app from './config/config';
import { FacebookAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import './styles/app.css'

function App() {  
  let [user, setUser] = useState({impl: null, accessToken: ''});
  let [loggedIn, setLoggedIn] = useState(false);
  const provider = new FacebookAuthProvider();
  const auth = getAuth(app);

  function signIn(e) {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        setUser((prevState) => ({
          ...prevState,
          impl: result,
          accessToken: token
        }));
        setLoggedIn(true);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    (loggedIn ?  <Home user={user}/> : <SignIn click={signIn}/>)
  );
}

export default App;
