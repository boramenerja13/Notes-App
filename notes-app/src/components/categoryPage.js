  import React from 'react';
  import { Box, Paper } from '@mui/material';
  import { useParams } from 'react-router-dom';
  
  export default function CategoryPage({ categories, onSaveNote }) {
    const { categoryId } = useParams();
    const category = categories[categoryId];
  
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
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginBottom: '20px',backgroundColor:'gray' }}>
          <Box display="flex">
          <h2>{category?.name}</h2>
          </Box>
        </Box>

      </Paper>
    );
  }
  
