import { Box } from "@mui/system";
import React from "react";
import NavBar from "../NavBar/NavBar";

const UserPage = ({ children }) => {
  return (
    <Box className='userPage'>
      <NavBar />
      <div className='userPage__Content'>{children}</div>
    </Box>
  );
};

export default UserPage;
