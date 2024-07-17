// @ts-ignore
import  { useState } from "react";
// @ts-ignore
import {  Box, IconButton,Menu,MenuItem, } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";
// @ts-ignore
import { Link, useNavigate } from "react-router-dom";
import {  useProSidebar } from "react-pro-sidebar";
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


function AppNavbar() {
  // @ts-ignore
    const navigate = useNavigate();
    const { collapseSidebar, toggleSidebar, broken } = useProSidebar();
  
  
    // const [anchorEl, setAnchorEl] = useState(null);
  
    // const handleMenuOpen = (event: any) => {
    //   setAnchorEl(event.currentTarget);
    // };
  
  
    const handleLogout = () => {
        localStorage.clear();
        // window.location.href = "http://dciapp.dci.daikin.co.jp/userreviewapp/";
        navigate("newphoto-Template-App/");
    };

    // const handleClose = () => {
    //   setAnchorEl(null);
    // };


  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <IconButton
      onClick={() => (broken ? toggleSidebar() : collapseSidebar())}
      className="text-blue-600"
    >
      <MenuIcon/>
    </IconButton>

    {/* icons */}
    <Box display="flex">
        {/* <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton> */}
        {/* <IconButton>
          <SettingsOutlinedIcon onClick={handleMenuOpen}/>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to="#" className="menu-bars">
              <MenuItem>Profile</MenuItem>
            </Link>
         
              <MenuItem onClick={handleLogout}>ออกระบบ</MenuItem>
            
          </Menu>
        </IconButton> */}
   
        <MenuItem className="text-black-600" onClick={handleLogout}> <PowerSettingsNewIcon/> &nbsp;LOGOUT</MenuItem>

      </Box>
  </Box>
  )
}

// const styles = {
//     AppBar: {
//       bgcolor: "#536DFE",
//     },
//     appLogo: {
//       borderRadius: 2,
//       width: 40,
//       marginLeft: 2,
//       cursor: "pointer",
//     },
//   };

export default AppNavbar