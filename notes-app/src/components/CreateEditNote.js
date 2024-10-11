import React, { useState } from 'react';
import { Box, Button, TextField, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { v4 as uuidV4 } from 'uuid';

export default function CreateEditNote({ note, onSave, onDelete }) {
  const categories = JSON.parse(localStorage.getItem('categories')) || [];

  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');

  const category = note?.category || categories?.[0]?.name || ''
  const [selectedCategory, setSelectedCategory] = useState(category);


  const handleSave = () => {
    if (!title || !content) {
      // TODO: add popup instead of alert
      alert('Title or content cannot be empty');
      return;
    }

    const newNote = {
      id: note?.id || uuidV4(), 
      title,
      content,
      category: selectedCategory,
    };

    if (note) {
      onSave(newNote);
    } else {
      const notes = JSON.parse(localStorage.getItem('notes')) || [];
      notes.push(newNote); 
      localStorage.setItem('notes', JSON.stringify(notes));
    }

    setTitle('');
    setContent('');
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: '100%',
        maxWidth: '1440px',
        height: 'calc(90vh - 60px)',
        padding: '24px',
        borderRadius: '10px',
        margin: 'auto',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.16)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <TextField
          fullWidth
          variant="outlined"
          label="Add a title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ marginBottom: '20px' }}
        />

        <FormControl fullWidth variant="outlined" sx={{ marginBottom: '20px' }}>
          <InputLabel id="dynamic-select-label">Select an Option</InputLabel>
          <Select
            labelId="dynamic-select-label"
            value={selectedCategory}
            onChange={handleCategoryChange}
            label="Select an Option"
          >
            {categories?.map((category) => (
              <MenuItem key={category.name} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

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

      <Box display="flex" justifyContent="space-between" sx={{ marginTop: 'auto', paddingTop: '20px' }}>
        {note ? (
          <>
            <Button
              variant="contained"
              color="error"
              onClick={onDelete}
              sx={{
                height: '40px',
                width: '180px',
                backgroundColor: '#E53935',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#D32F2F',
                },
              }}
            >
              Delete Note
            </Button>
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
                marginRight: '10px',
              }}
            >
              Save Changes
            </Button>
          </>
        ) : (
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
            Create Note
          </Button>
        )}
      </Box>
    </Paper>
  );
}
