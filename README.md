# Notes-App

This is a notes-taking application built using React and Material UI, allowing users to create, edit, and delete notes categorized into different categories. The app saves notes locally in the browser.

## Project Setup

To run the project locally, follow these steps:

## Prerequisites

Ensure you have the following installed:
Node.js (version 18.3.1 or higher)
npm (node package manager)

## Installation

1. Clone the repository using the following command:
    git clone git@github.com:boramenerja13/Notes-App.git

2. Navigate into the project directory:
    cd notes-app

3. Install the required dependencies:
    npm install

4. Start the development server:
    npm start

5. Open your web browser and navigate to http://localhost:3000 to access the application.

## Features

- Create Notes: Users can create new notes with a title, content, and a desired category.
- Edit Notes: Modify existing notes, update their content, and assign them to categories.
- Delete Notes: Users can remove notes they no longer need.
- Search Notes: Search for notes within a selected category.
- Categories Management: Organize notes into categories for better organization.

## Usage

1. Start by navigating to the app's homepage.
2. Click on the "Create Note" button to create a new note.
3. Fill in the title, content, and select a category for the note.Click the "Save" button to save the note.
4. View and manage your notes under each category.
5. Use the search bar to find specific notes within a category.
6. Click on a note to edit or delete it.

## Key components

- `App.js`: The main component that wraps the navbar, sidebar, and manages routing.
- `CreateEditNote.js`: Handles note creation, editing, and deletion.
- `Category.js`: Manages categories and their associated notes.
- `NotesList.js`: Displays the list of notes.


## Dependencies

This project uses the following libraries:

React: "^18.3.1" - Frontend framework
React Router DOM: "^6.26.2" - For handling routes
Material UI: "^6.1.1" - For UI components
uuid: "^10.0.0" - For generating unique IDs for notes
(To see all dependencies, check the package.json file)


