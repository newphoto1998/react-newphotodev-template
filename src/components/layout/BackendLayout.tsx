import { Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import AppSidebar from "../shared/AppSidebar";
import AppNavbar from "../shared/AppNavbar";

function BackendLayout() {
  return (
    <>
      <CssBaseline />
      <div className="app">
        <AppSidebar />
        <main className="content">
          <AppNavbar />
          <div className="content_body">
            <Box m="10px">
              <Outlet />
            </Box>
          </div>
        </main>
      </div>
    </>
  );
}

export default BackendLayout;
