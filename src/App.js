import React, { useState } from 'react';
import SignIn from './components/SignIn';
import './styles/app.css'

function App() {
  
  let [loggedIn, setLoggedIn] = useState(false);

  return (
    (loggedIn ?  null : <SignIn />)
  );
}

export default App;
