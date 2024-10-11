import React, { useState, useEffect } from 'react';
import { Box, Paper, Button, IconButton, TextField } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import CreateEditNote from './CreateEditNote';
import SearchIcon from '@mui/icons-material/Search';
import NotesList from './NotesList';

export default function Category({ categories, onSaveNote }) {
  const { categoryId } = useParams();
  const category = categories.find((cat) => cat.id === categoryId);
  const navigate = useNavigate();

  const [selectedNote, setSelectedNote] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const allNotes = JSON.parse(localStorage.getItem('notes')) || [];
  const notes = allNotes.filter((note) => note.category === category.name);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setSelectedNote(null);
  }, [categoryId]);

  const handleSelectNote = (note) => {
    if (!selectedNote || selectedNote.id !== note.id) {
      setSelectedNote(note);
    } else {
      setSelectedNote(null);
    }
    console.log('log from parent', note)
  };

  const handleDeleteNote = () => {
    if (selectedNote) {
      const updatedNotes = allNotes.filter((note) => note.id !== selectedNote.id);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      setSelectedNote(null);
      }
      };

  const handleSaveNote = (updatedNote) => {
    const updatedNotes = allNotes.map((note) =>
    note.id === updatedNote.id ? updatedNote : note
    );
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setSelectedNote(null);
  }

  const handleCreateNoteClick = () => {
    navigate('/create-note');
  };
  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
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
      }}
    >

      <Grid container spacing={2}>
        <Grid item xs={12} md={selectedNote ? 6 : 12}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCreateNoteClick}
              sx={{ marginRight: '10px', backgroundColor: '#71CF48' }}
            >
              Create Note
            </Button>
            <TextField
              variant="outlined"
              placeholder="Search..."
              size="small"
              value={searchQuery}
              onChange={handleSearchChange}
              InputProps={{
                endAdornment: (
                  <IconButton color="primary" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          </Box>
          <NotesList notes={filteredNotes} onSelectNote={handleSelectNote} />
        </Grid>
        {selectedNote && (
          <Grid item xs={12} md={6}>
            <CreateEditNote 
            key={selectedNote.id} 
            note={selectedNote}
            onSave={handleSaveNote}
            onDelete={handleDeleteNote}
             />
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}

