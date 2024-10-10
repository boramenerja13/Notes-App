import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#1F2A44' }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              width: '87px',
              height: '22px',
              ml: '14px',
              mr: '20px',
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '21.79px',
              color: 'white',
            }}
          >
            Your Notes
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
