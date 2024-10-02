import React from 'react';
import './App.css';
import Navbar from '../src/components/navbar';
// import Sidebar from './components/sidebar';
// import CreateNote from './components/createNote';
import { Box, CssBaseline } from '@mui/material';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      {/* Static Navbar */}
      <Navbar />
      <Box display="flex">
        {/* Sidebar with adjustable margins */}
        {/* <Sidebar /> */}
        {/* Main Content for Notes */}
        {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <CreateNote />
        </Box> */}
      </Box>
    </div>
  );
}

export default App;
