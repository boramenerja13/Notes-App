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

  const handleCreateCategory = (newCategory) => {
    console.log("New Category Created:", newCategory);
  };

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

      <Box display="flex" sx={{ height: '100vh', paddingTop: '0px' }}>
        <Sidebar onCreateCategory={handleCreateCategory} />

        <Box
          sx={{
            flexGrow: 1,
            padding: '10px',
            paddingLeft: '10px',
            marginLeft: '50px', 
            backgroundColor: '#ffffff',
            height: '100%',
            overflowY: 'auto', 
          }}
        >
          <CreateNote />
        </Box>
      </Box>
    </div>
  );
}

export default App;
