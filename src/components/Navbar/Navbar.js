import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { UseAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, LogOut } = UseAuth();

  const handleLogOut = () =>{
    LogOut()
    navigate('/')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <div className="header">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {user?.displayName ? (
            <Button onClick={handleLogOut} color="inherit" sx={{ color: "white" }}>
              Log Out
            </Button>
          ) : (
            <Link to="/signin" color="primary">
              <Button color="inherit" sx={{ color: "white" }}>
                Login
              </Button>
            </Link>
          )}
        </div>
      </AppBar>
    </Box>
  );
}
