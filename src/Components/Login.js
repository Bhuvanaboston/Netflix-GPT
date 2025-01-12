import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../Utils/Validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    let message = '';
    if (!isSignInForm) {
      message = checkValidData(
        email.current.value,
        password.current.value,
        name.current.value
      );
    }
    message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      // Sign UP logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              navigate('/browse');
            })
            .catch((error) => {
              setErrorMessage(error.code + ': ' + error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ': ' + errorMessage);
        });
    } else {
      // Sign In logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ': ' + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg"
          alt="background-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0  bg-opacity-75 text-white rounded-lg"
      >
        <h1 className="text-3xl text-white py-4  px-2 font-bold ">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 w-full bg-slate-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 m-2 w-full bg-slate-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full bg-slate-800"
        />
        <p className="text-lg text-red-700 font-bold">{errorMessage}</p>
        <button
          className="p-2 my-5 mx-2 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignUpForm}>
          {isSignInForm
            ? ' New to Netflix ? Sign Up now'
            : 'Already registered? Sign In now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
