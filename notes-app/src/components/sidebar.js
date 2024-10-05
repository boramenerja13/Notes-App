import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import FolderIcon from '@mui/icons-material/Folder';
import AddIcon from '@mui/icons-material/Add';
import ListItemButton from '@mui/material/ListItemButton';

const drawerWidth = 370 ;

export default function Sidebar() {
  const [categories] = React.useState([
    { name: 'Category (1)' },
    { name: 'Category (2)' },
    { name: 'Category (3)' },
    { name: 'Category (4)' },
    { name: 'Category (5)' },
    { name: 'Category (6)' },
    { name: 'Category (7)' },
    { name: 'Category (8)' },
    { name: 'Category (9)' },
    { name: 'Category (10)' },
    { name: 'Category (11)' },
    { name: 'Category (12)' },
    { name: 'Category (13)' },
    { name: 'Category (14)' },
    { name: 'Category (15)' },
    { name: 'Category (16)' },
    { name: 'Category (17)' },
    { name: 'Category (18)' },
    { name: 'Category (19)' },
    { name: 'Category (20)' },
  ]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ 
          bgcolor: '#FFFFFF', 
          width: drawerWidth,
          height: '100%',
          top: '64px',
          left: '0px',
          gap: '0px',
          borderRadius: '10px 0px 0px 0px',
          opacity: '0px',
          position: 'fixed',
        }} />
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: '#f5f5f5',
              marginTop: 0, 
              padding: 0,
              top: '64px',
            },
          }}
        >
          <Box
            sx={{
              width: 370,
              height: 'calc(100vh - 64px)', 
              borderRadius: '10px 0px 0px 0px',
              backgroundColor: '#FFFFFF',
              boxShadow: 3, 
              padding: '16px 0', 
              position: 'relative', 
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
                  width: '370px',
                  marginY: '3px', 
                  marginLeft: 0,
                  marginRight: 0, 
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
                      marginLeft: 0,
                      marginRight: 0, 
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
      </Container>
    </React.Fragment>
  );
}
