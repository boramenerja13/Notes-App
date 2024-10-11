import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

export default function InteractiveList({ notes, onSelectNote }) {
    return (
        <List>
            {notes.map((note) => (
                <ListItem
                    key={note.id}
                    onClick={() => {
                        console.log("selected note", note);
                        onSelectNote(note);
                    }}
                    button
                >
                    <ListItemText
                        primary={note.title}
                        secondary={note.content}
                    />
                </ListItem>
            ))}
        </List>
    );
}
