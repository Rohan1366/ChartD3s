import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Avatar from '@mui/material/Avatar';
import Sidebar from './Sidebar';

const theme = createTheme({
  palette: {
    background: {
      default: '#fff', // Set background color to white
    },
  },
});

const Navbar = () => {
  return (
    

<ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" style={{ background: '#fff' }}>
        <Toolbar>
          

          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center',paddingBottom:'10px'}}>
            {/* Search Bar */}

            <InputBase
            placeholder="Search..."
            style={{
              background: '#f2f2f2', // Light grey background color
              borderRadius: '5px',
              
              paddingLeft: '40px',
              paddingTop:'2px',
              paddingBottom:'2px'
            }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon style={{ color: '#888888' }} /> {/* Grey search icon */}
              </InputAdornment>
            }
          />

            {/* Bell Icon */}
            <IconButton aria-label="notifications icon" sx={{ p: '10px' }}>
              <NotificationsIcon />
            </IconButton>

            {/* Profile Photo */}
            <IconButton aria-label="  " sx={{ p: '10px' }}>
              <Avatar alt="User" src="https://i.pinimg.com/originals/97/31/02/9731022f0be7c965e880505461643850.jpg" />
            </IconButton>

            {/* Drop Down Arrow */}
            <IconButton aria-label="drop down arrow" sx={{ p: '10px' }}>
              <ArrowDropDownIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {/* Rest of your application content */}


      

    </ThemeProvider>
    
  );
};

export default Navbar;
