import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import CreateNote from './components/createNote';
import CategoryPage from './components/categoryPage';
import { Box, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];
    setCategories(storedCategories);

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleCreateCategory = (newCategory) => {
    const updatedCategories = [...categories, { name: newCategory, notes: [] }];
    setCategories(updatedCategories);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
  };

  const handleSaveNote = (note) => {
    const updatedCategories = categories.map((category) => {
      if (category.name === note.category) {
        return {
          ...category,
          notes: [...category.notes, { title: note.title, content: note.content }],
        };
      }
      return category;
    });

    setCategories(updatedCategories);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
  };

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
          <Sidebar onCreateCategory={handleCreateCategory} />
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
            {/* <CreateNote categories={categories} onSaveNote={handleSaveNote} /> */}
            <Routes>
                <Route path="/" element={<CreateNote categories={categories} onSaveNote={handleSaveNote} />} />
                <Route path="/category/:categoryId" element={<CategoryPage categories={categories} />} />
            </Routes>
          </Box>
        </Box>
      </div>
  </Router>
  );
}

export default App;
