import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CreateEditNote from './components/CreateEditNote';
import Category from './components/Category';
import { Box, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const localCategories = JSON.parse(localStorage.getItem('categories')) || []
  const [categories, setCategories] = useState(localCategories);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];
    setCategories(storedCategories);

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Router>
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
          <Sidebar />
          <Box
            sx={{
              flexGrow: 1,
              padding: '10px',
              paddingLeft: '10px',
              backgroundColor: '#ffffff',
              height: '100%',
              overflowY: 'auto',
            }}
          >
            <Routes>
              <Route path="/" element={<CreateEditNote categories={categories} />} />
              <Route path="/category/:categoryId" element={<Category categories={categories} />} />
              <Route path="/create-note" element={<CreateEditNote categories={categories} />} />
            </Routes>
          </Box>
        </Box>
      </div>
    </Router>
  );
}

export default App;
