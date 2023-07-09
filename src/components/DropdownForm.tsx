import React, { useState, useEffect } from 'react';
import { auth } from './config/config';
import '../Dropdown.css';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { User } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const DropdownForm = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [authUser, setAuthUser] = useState<User | null>(null);


  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
  };

  const handleRegisterClick = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        // ...
      }).catch((error) => {
        console.log(error);
      });
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential);
      // ...
    }).catch((error) => {
      console.log(error);
    });
  };

  const handleCloseForm = () => {
    setShowLoginForm(false);
    setShowRegisterForm(false);
  };
  
    
    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthUser(user);
        } else {
          setAuthUser(null);
        }
      });
      return () => listen();
    })
  
    const handleSignout = () => {
      signOut(auth).then(() => {
        alert('Signed out')
      }).catch((error) => 
        console.log(error));
    };

  return (
    <div className='DropdownForm'>
      <ul className='Login'>
        <li>
          <button className='userBtn' onClick={handleLoginClick}>
            Login
          </button>
        </li>
        <li>
          <button className='userBtn' onClick={handleRegisterClick}>
            Register
          </button>
        </li>
      </ul>

      {(showLoginForm || showRegisterForm) && (
        <div className='DropdownForm-content'>
          <button className='closeBtn' onClick={handleCloseForm}>
            x
          </button>

          {showLoginForm && (
            <form onSubmit={handleLoginSubmit}>
              <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type='submit'>Login</button>
              {authUser ? <><p>Logged in as {authUser.email}</p><button onClick={handleSignout}>Signout</button></> : <p>Not logged in</p>}
            </form>
          )}

          {showRegisterForm && (
            <form onSubmit={handleRegisterSubmit}>
              <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type='password'
                placeholder='Re-enter Password'
                value={reEnterPassword}
                onChange={(e) => setReEnterPassword(e.target.value)}
              />
              <button type='submit'>Register</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownForm;
