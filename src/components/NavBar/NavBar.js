import { Button } from "@mui/material";
import React from "react";
import { USER_STORAGE_KEY } from "../../helpers/variables";
import { useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem(USER_STORAGE_KEY);

  const logUserOut = () => {
    localStorage.removeItem(USER_STORAGE_KEY);
    navigate("/");
  };

  const loginUser = () => navigate("/signin");

  return (
    <div className='userPage__Nav'>
      <div className='userPage__Nav__Logo'>
        <h2>Aime Diary</h2>
      </div>
      <div className='userPage__Nav__Buttons'>
        {user ? (
          <Button variant='contained' className='themedBg' onClick={logUserOut}>
            Sign Out
          </Button>
        ) : (
          <Button variant='contained' className='themedBg' onClick={loginUser}>
            Sign In
          </Button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
