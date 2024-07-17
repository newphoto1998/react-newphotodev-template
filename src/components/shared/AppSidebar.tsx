import { useEffect, useState } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import {
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";

import { Link } from "react-router-dom";


import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import StyleIcon from "@mui/icons-material/Style";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

function AppSidebar() {
  const { collapsed, toggleSidebar } = useProSidebar();

 
  const user_info: any = localStorage.getItem("user_info");
  const current_path = localStorage.getItem("currentPath");
  const empcode = user_info ? JSON.parse(user_info)[0].EmpCode : "";
  const name: string = user_info ? JSON.parse(user_info)[0].ShortName : "";
  const sect: string = user_info ? JSON.parse(user_info)[0].SECT_Long : "";
  const position: string = user_info ? JSON.parse(user_info)[0].Position : "";
  const image: string =
    "http://dcidmc.dci.daikin.co.jp/PICTURE/" + empcode + ".JPG";
  const [activeMenuItem, setActiveMenuItem] = useState(current_path);

  useEffect(() => {
    setActiveMenuItem(activeMenuItem);
  }, []);

  const handleMenuClick = (menu: string) => {


    setActiveMenuItem(menu);
    toggleSidebar();
    localStorage.setItem("currentPath", menu);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "auto",
      }}
    >
      <Sidebar
        style={{ color: "white" }}
        breakPoint="md"
        backgroundColor={"#858796"}
      >
        <div style={{ flex: 1, marginBottom: "130px" }}>
          <Box sx={styles.avatarContainer}>
            <Avatar
              sx={styles.avatar}
              alt="Masoud"
              src={image}
              className="mb-4"
            />

            {!collapsed ? (
              <Typography variant="body2">{name}</Typography>
            ) : null}
            {!collapsed ? (
              <Typography variant="body2" sx={{ color: "white" }}>
                {sect}
              </Typography>
            ) : null}
            {!collapsed ? (
              <Typography variant="body2" sx={{ color: "white" }}>
                {position}
              </Typography>
            ) : null}
          </Box>

          <Menu
            menuItemStyles={{
              button: ({ active }) => {
                return {
                  background: active ? "#858796" : "transparent",
                  color: active ? "black" : "",
                  "&:hover": {
                    backgroundColor: "gray",
                  },
                };
              },
            }}
          >


            <>
              <Link to={"/newphoto-Template-App/backend/dashboard"}>
                <MenuItem
                  active={activeMenuItem === "/newphoto-Template-App/backend/dashboard"}
                  onClick={() =>
                    handleMenuClick("/newphoto-Template-App/backend/dashboard")
                  }
                  icon={<HomeIcon />}
                >
                  Dashboard
                </MenuItem>
              </Link>

            

              <SubMenu icon={<PublishedWithChangesIcon />} label="Tab" >
                <Link
                  to={"/newphoto-Template-App/backend/tab-one"}
                  className="menu-bars"
                >
                  <MenuItem
                   style={{backgroundColor:"#858796"}}
                    active={
                      activeMenuItem ===
                      "/newphoto-Template-App/backend/tab-one"
                    }
                    
                    onClick={() =>
                      handleMenuClick("/newphoto-Template-App/backend/tab-one")
                    }
                    icon={<ShoppingBasketIcon  />}
                  >
                    Tab-1
                  </MenuItem>
                </Link>

                <Link
                  to={"/newphoto-Template-App/backend/tab-two"}
                  className="menu-bars"
                >
                  <MenuItem
                                     style={{backgroundColor:"#858796"}}

                    active={
                      activeMenuItem ===
                      "/newphoto-Template-App/backend/tab-two"
                    }
                    onClick={() =>
                      handleMenuClick("/newphoto-Template-App/backend/tab-two")
                    }
                    icon={<AssignmentTurnedInIcon  />}
                  >

                      Tab-2

                  </MenuItem>
                </Link>
              </SubMenu>

              <Link to={"/newphoto-Template-App/backend/pages"}>
                <MenuItem
                  active={activeMenuItem === "/newphoto-Template-App/backend/pages"}
                  onClick={() =>
                    handleMenuClick("/newphoto-Template-App/backend/pages")
                  }
                  icon={<StyleIcon />}
                >
                  Pages
                </MenuItem>
              </Link>
            </>
          </Menu>

      
        </div>
      </Sidebar>
    </div>
  );
}

const styles = {
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    my: 5,
  },
  avatar: {
    width: "40%",
    height: "auto",
  },
  yourChannel: {
    mt: 2,
    ml: 5,
    color: "white",
  },
};

export default AppSidebar;
