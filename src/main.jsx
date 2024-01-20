import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import "./index.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Edit from './Edit.jsx';
import AppRoot from './AppRoot.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <AppRoot />,
    children : [
      {
        path : "/",
        element : <App />
      },
      {
        path : "/edit",
        element : <Edit />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
      <RouterProvider router={router} />
  </React.StrictMode>,
)
