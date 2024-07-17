import { BrowserRouter, Route, Routes } from "react-router-dom";
import BackendLayout from "./components/layout/BackendLayout";
import AuthLayout from "./components/layout/AuthLayout";
import Dashboard from "./pages/Backend/Dashboard";
import Login from "./pages/Authentication/Login";
import TabOne from "./pages/Backend/Tabs/TabOne";
import TabTwo from "./pages/Backend/Tabs/TabTwo";
import Pages from "./pages/Backend/Pages";





function Router() {


  let BASE = import.meta.env.VITE_PATH;

 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path={`${BASE}`} element={<Login/>} />
            <Route path={`${BASE}/*`} element={<Login/>} />
          </Route>

          <Route element={<BackendLayout />}>
            <Route path={`/${BASE}/backend/dashboard`} element={<Dashboard/>} />
            <Route path={`/${BASE}/backend/pages`} element={<Pages/>} />
            <Route path={`/${BASE}/backend/tab-one`} element={<TabOne/>} />
            <Route path={`/${BASE}/backend/tab-two`} element={<TabTwo/>} />

                      
       
          </Route>
          
     
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
