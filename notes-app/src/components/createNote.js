import React, { useState } from 'react';
import { Box, Button, TextField,  Paper } from '@mui/material';

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
        maxWidth: '1000px', 
        padding: '24px', 
        borderRadius: '10px',
        margin: 'auto',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.16)', 
      }}
    >
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

      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="success"
          onClick={handleSave}
          sx={{ 
            height: '40px', 
            width: '150px',
            backgroundColor: '#71CF48',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#5BA738',
            },
          }}
        >
          Save Changes
        </Button>
      </Box>
    </Paper>
  );
}