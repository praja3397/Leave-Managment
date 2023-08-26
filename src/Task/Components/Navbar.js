import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate =useNavigate()
    const handleLogin=()=>{
        navigate("/login")
    }

    const handleLogout=()=>{
      localStorage.removeItem("login")
      navigate("/login")
    }

    const handleHome=()=>{
      navigate("/")
    }
  const logout= JSON.parse(localStorage.getItem("login"))
    
  return (
    <>
      <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Leave Management
          </Typography>
          <Button color="inherit" onClick={handleHome}>Home</Button>
          {logout ? <Button color="inherit" onClick={handleLogout}>Logout</Button>:<Button onClick={handleLogin} color="inherit">LogIn</Button>}
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar
