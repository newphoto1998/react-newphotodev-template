import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './Router'
import { ProSidebarProvider } from "react-pro-sidebar";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ProSidebarProvider>
        <Router />

  </ProSidebarProvider>,
)
