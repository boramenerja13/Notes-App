import React from 'react';
import './App.css';
import Navbar from '../src/components/navbar';
import Sidebar from './components/sidebar';
import { Box, CssBaseline } from '@mui/material';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />
      <Box display="flex">
        <Sidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, marginTop: '64px' }} 
        ></Box>        
      </Box>
    </div>
  );
}

export default App;
