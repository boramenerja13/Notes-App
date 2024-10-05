import React, { useState } from 'react';
import { Box, Button, TextField, Paper } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export default function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    console.log("Note Saved:", { title, content });
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: '100%', 
        maxWidth: '1440px', 
        height: 'calc(100vh - 60px)',
        padding: '24px', 
        borderRadius: '10px',
        margin: 'auto',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.16)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginBottom: '20px' }}>
        <Box display="flex">
          <Button
            variant="contained"
            sx={{ 
              backgroundColor: '#1264A3',
              width: '120px',
              height: '32px',
              gap: '0px',
              color: '#fff',
              margin: '0 10px',
              '&:hover': {
                backgroundColor: '#0E4C8A',
              },
            }}
          >
          </Button>

          <Button
            variant="contained"
            sx={{ 
              backgroundColor: '#1264A3',
              width: '120px',
              height: '32px',
              gap: '0px',
              color: '#fff',
              margin: '0 10px',
              '&:hover': {
                backgroundColor: '#0E4C8A',
              },
            }}
          >
          </Button>

          <Button
            variant="contained"
            sx={{ 
              background: '#71CF48',
              width: '120px',
              height: '32px',
              gap: '0px',
              color: '#fff',
              margin: '0 10px'
            }}
          >
          </Button>
        </Box>

        <Box display="flex">
          <Button
            variant="contained"
            sx={{ 
              backgroundColor: '#1264A3',
              width: '32px', 
              height: '32px',
              gap: '0px',
              color: '#fff',
              margin: '0 10px',
              '&:hover': {
                backgroundColor: '#0E4C8A',
              },
            }}
          />

          <Button
            variant="contained"
            sx={{ 
              backgroundColor: '#1264A3', 
              width: '32px', 
              height: '32px',
              gap: '0px',
              color: '#fff',
              margin: '0 10px',
              '&:hover': {
                backgroundColor: '#0E4C8A',
              },
            }}
          />

          <Button
            variant="contained"
            sx={{ 
              backgroundColor: '#1264A3', 
              width: '32px', 
              height: '32px', 
              color: '#fff',
              margin: '0 10px',
              '&:hover': {
                backgroundColor: '#0E4C8A',
              },
            }}
          />
        </Box>
      </Box>

    
      <Box>
        <TextField
          fullWidth
          variant="outlined"
          label="Add a title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ marginBottom: '20px' }}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Write your note here..."
          multiline
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          sx={{ marginBottom: '20px' }}
        />
      </Box>

      <Box display="flex" justifyContent="flex-end" sx={{ marginTop: 'auto', paddingTop: '20px' }}>
        <Button
          variant="contained"
          color="success"
          onClick={handleSave}
          endIcon={<CheckIcon />}  
          sx={{ 
            height: '40px', 
            width: '180px',
            backgroundColor: '#71CF48',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#5BA738',
            },
            paddingX: '20px', 
          }}
        >
          Save Changes
        </Button>
      </Box>
    </Paper>
  );
}

