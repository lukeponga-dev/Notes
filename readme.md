# Title: Note Management Application
* @file Notes-2/readme.md
* @description Documentation: Note Management Application

This documentation outlines the structure and functionality of a web-based note management application. 
The application allows users to add, display, and delete notes. It utilizes HTML for structure, CSS for styling, and JavaScript for dynamic behavior.

HTML Structure:
- `<textarea id="noteInput">`: A text area where users can type their notes.
- `<button id="addNoteBtn">`: A button to add the note to the display and backend.
- `<div id="notesContainer">`: A container where added notes are displayed.

CSS Styling:
The application uses CSS for styling. Key elements include:
- Body and Headers: Basic font and alignment settings.
- `.note`: Style for each note displayed, including background, border, and shadow.
- `.delete-btn`: Style for the delete button associated with each note.
- Input and Button: Styling for the note input area and the add note button.


JavaScript Functionality:
- `addNote()` Function:
    - Captures the text from the `#noteInput` textarea.
    - Uses fetch to send the note to the server via a POST request.
    - On success, it calls `displayNotes()` to refresh the displayed notes.
    - Clears the input area after adding the note.

- `removeNote()` Function:
    - Identifies the note to be removed based on its position.
    - Updates the local storage and the display by removing the selected note.

- `displayNotes()` Function:
    - Fetches notes from the server.
    - Clears the existing notes from the `#notesContainer`.
    - Iterates over the fetched notes, creating a new div for each note and appending it to the container.

- `formatNote()` Function:
    - Formats the note text based on certain patterns:
        - Headers (#, ##, ###) are converted to h1, h2, h3.
        - Lines starting with - are converted to list items.
        - Text enclosed in ** is made bold.
        - Comma-separated lines are formatted as table rows.
        - Wraps list items in ul and table rows in table if present.

Event Listeners:
- `DOMContentLoaded`: Calls `displayNotes()` when the page loads to display existing notes.

Security Considerations:
- Input sanitization is not explicitly mentioned but is crucial to prevent XSS attacks.
- The application should sanitize user input before displaying it on the page.

Limitations:
- The application's functionality depends on server-side endpoints (/notes) for storing and retrieving notes, which are not defined in the provided code.
- The formatting function assumes specific patterns for formatting, which may not cover all user expectations.
- The application does not provide a way to edit notes once they are added.


This documentation provides an overview of the note management application's structure, styling, and behavior, offering insights into its functionality and user interaction.
