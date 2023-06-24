import React from "react";
import { Button } from "@mui/material";
import { UseAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Account = () => {

  const{GoogleLogOut, user} = UseAuth()
  const navigate = useNavigate()

  const handleLogOut = () =>{
    GoogleLogOut()
    navigate('/')
  }
  
  return (
    <div>
      <p>Welcome {user?.displayName}</p>
      <Button variant="contained" onClick={handleLogOut}>Log Out</Button>
    </div>
  );
};

export default Account;
