import React, { useState, useEffect } from 'react';
import ProfileMenu from './ProfileMenu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Utils/Firebase';
import { addUser, removeUser } from '../Utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NETFLIX_LOGO } from '../Utils/Constants';
import { Button } from '@mui/material';
import { toggleGptSearchView } from '../Utils/gptSlice';
import lang from '../Utils/langConstants';
import { changeLanguage } from '../Utils/configSlice';

const Header = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('en');
  const configLang = useSelector((store) => store.configSlice.language);
  const isGptViewer = useSelector((store) => store.gpt.showGptSearch);

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function MouseOver(event) {
    setMenuVisible(true);
  }
  function MouseOut(event) {
    setMenuVisible(false);
  }
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    dispatch(changeLanguage(option));
    setMenuVisible(false); // Hide the menu after selection
  };
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());

    if (!isGptViewer) {
      navigate('/gptsearch');
    } else {
      navigate('/browse');
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        if (!isGptViewer) {
          navigate('/browse');
        }
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });
    // unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute  w-screen px-20 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <div>
        <img className="w-52" src={NETFLIX_LOGO} alt="logo" />
      </div>
      {user && (
        <div className="flex  gap-4 m-5">
          <div>
            <Button
              className="!bg-red-700  !text-white rounded-md py-3 px-6 text-lg"
              onClick={handleGptSearchClick}
            >
              {isGptViewer ? 'Home Page' : 'GPT Search'}
            </Button>
          </div>
          <div>
            <h1 className="text-xl text-white py-2">
              {lang[configLang].hi} {user?.displayName} !
            </h1>
          </div>
          <div onMouseOver={MouseOver} onMouseOut={MouseOut} className="flex">
            <img className="w-12 h-12 " alt="userIcon" src={user?.photoURL} />
            {isMenuVisible ? (
              <ArrowDropUpIcon fontSize="large" style={{ color: 'white' }} />
            ) : (
              <ArrowDropDownIcon fontSize="large" style={{ color: 'white' }} />
            )}
          </div>
        </div>
      )}

      {isMenuVisible && (
        <ProfileMenu
          onOptionSelect={handleOptionSelect}
          onMouseEnter={MouseOver} // Prevent menu from disappearing
          onMouseLeave={MouseOut}
        />
      )}
    </div>
  );
};

export default Header;
