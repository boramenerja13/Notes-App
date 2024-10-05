import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import FolderIcon from '@mui/icons-material/Folder';
import AddIcon from '@mui/icons-material/Add';
import ListItemButton from '@mui/material/ListItemButton';

const drawerWidth = 370;

export default function Sidebar({ onCreateCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem('categories'));
    if (storedCategories) {
      setCategories(storedCategories);
    }
  }, []);

  const handleCreateCategory = (newCategory) => {
    const updatedCategories = [...categories, { name: newCategory }];
    setCategories(updatedCategories);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
    onCreateCategory(newCategory);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#f5f5f5',
            top: '64px',
          },
        }}
      >
        <Box
          sx={{
            width: drawerWidth,
            height: 'calc(100vh - 64px)',
            borderRadius: '10px 0px 0px 0px',
            backgroundColor: '#FFFFFF',
            boxShadow: 3,
            padding: '16px 0',
          }}
        >
          <Box sx={{ marginBottom: '2px' }}>
            <Button
              variant="contained"
              fullWidth
              startIcon={<AddIcon />}
              sx={{
                backgroundColor: '#71CF48',
                color: '#fff',
                height: '52px',
                marginBottom: '8px', 
              }}
              onClick={() => {
                const newCategory = prompt('Enter category name:');
                if (newCategory) {
                  handleCreateCategory(newCategory);
                }
              }}
            >
              Create Category
            </Button>
          </Box>

          <List sx={{ padding: 0 }}>
            {categories.map((category, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  sx={{
                    backgroundColor: '#1264A3',
                    color: '#fff',
                    marginY: '3px',
                    borderRadius: 1,
                    height: '42px',
                    width: '350px',
                  }}
                >
                  <FolderIcon sx={{ marginRight: 1 }} />
                  <ListItemText primary={category.name} sx={{ color: '#fff' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
