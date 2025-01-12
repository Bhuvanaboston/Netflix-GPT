import React, { useState } from 'react';
import ProfileMenu from './ProfileMenu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { useSelector } from 'react-redux';

const Header = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const user = useSelector((store) => store.user);
  console.log(user);
  function MouseOver(event) {
    setMenuVisible(true);
  }
  function MouseOut(event) {
    setMenuVisible(false);
  }
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    console.log(`Selected: ${option}`);
    setMenuVisible(false); // Hide the menu after selection
  };
  return (
    <div className="absolute  w-screen px-20 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <div>
        <img
          className="w-52"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      {user && (
        <div
          className="flex  gap-4 m-5"
          onMouseOver={MouseOver}
          onMouseOut={MouseOut}
        >
          <h1 className="text-xl ">Hi {user?.displayName} !</h1>

          <img
            className="w-12 h-12 "
            alt="userIcon"
            src="https://occ-0-2484-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABelYeQhdDSleXnwq1Y7EyxtTDiSw3ZgK2EnBQR5Y-Yav3LC10tCzbIcvsA34KEM-SgBfopzYVOVyKm80bahrQiAqpBqGf2w.png?r=15e"
          />
          {isMenuVisible ? (
            <ArrowDropUpIcon fontSize="large" />
          ) : (
            <ArrowDropDownIcon fontSize="large" />
          )}
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
