import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../Utils/Firebase';
import { useSelector } from 'react-redux';

const ProfileMenu = ({ onOptionSelect, onMouseEnter, onMouseLeave }) => {
  const isGptViewer = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    // Implement sign-out logic here
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div
      className=" bg-black  bg-opacity-75  absolute  top-3/4 left-[85%] shadow-lg  p-2.5 z-[1000] text-white"
      onMouseEnter={onMouseEnter} // Keep menu visible when hovering over it
      onMouseLeave={onMouseLeave} // Hide menu when leaving it
    >
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {isGptViewer && (
          <>
            <li
              style={{ padding: '5px 10px', cursor: 'pointer' }}
              onClick={() => onOptionSelect('en')}
            >
              English
            </li>
            <li
              style={{ padding: '5px 10px', cursor: 'pointer' }}
              onClick={() => onOptionSelect('tn')}
            >
              தமிழ்
            </li>
            <li
              style={{ padding: '5px 10px', cursor: 'pointer' }}
              onClick={() => onOptionSelect('sp')}
            >
              Spanish
            </li>
          </>
        )}

        <li
          style={{ padding: '5px 10px', cursor: 'pointer' }}
          onClick={handleSignOut}
        >
          Sign Out
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
