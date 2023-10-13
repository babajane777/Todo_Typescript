import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Helloworld } from './components/helloworld';
import { Mobilelayout } from './components/Layouts/Mobilelayout';
import { WebLayout } from './components/Layouts/webLayout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './components/styles.css';
import { Dashboard } from './components/dashboard';
import { Box, Theme, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.css';


function App() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const browserRouter = createBrowserRouter([{
    path: "/",
    element : matches? <Mobilelayout/> : <WebLayout/> ,
    children: [{
      index: true,
      element: <Dashboard />
    }
    ]
  }
  ])
  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;
