import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../Utils/Firebase';
const ProfileMenu = ({ onOptionSelect, onMouseEnter, onMouseLeave }) => {
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
        <li
          style={{ padding: '5px 10px', cursor: 'pointer' }}
          onClick={() => onOptionSelect('Option 1')}
        >
          Option 1
        </li>
        <li
          style={{ padding: '5px 10px', cursor: 'pointer' }}
          onClick={() => onOptionSelect('Option 2')}
        >
          Option 2
        </li>

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
