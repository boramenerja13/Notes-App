import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import CreateNote from './components/createNote';
import { Box, CssBaseline } from '@mui/material';

function App() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="App">
      <CssBaseline />
      <Navbar
        sx={{
          position: 'fixed',
          width: '100%', 
          height: '50px',
          backgroundColor: '#FFFFFF',
          zIndex: 1100,
        }}
      />

      <Box display="flex" sx={{ height: '100vh', paddingTop: '50px' }}>
        <Sidebar
          sx={{
            width: '370px',
            height: '100%', 
            position: 'fixed',
            top: '50px', 
            left: '0', 
            borderRadius: '10px 0px 0px 0px',
            zIndex: 1000,
          }}
        />

        <Box 
          sx={{
            flexGrow: 1,
            marginLeft: '370px',
            padding: '20px',
            overflowY: 'auto',
            backgroundColor: '#f5f5f5',
          }}
        >
          <CreateNote />
        </Box>
      </Box>
    </div>
  );
}

export default App;
