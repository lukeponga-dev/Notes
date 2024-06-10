const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 27017;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/notesDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Note Schema
const noteSchema = new mongoose.Schema({
  content: String,
  dateCreated: { type: Date, default: Date.now }
});

const Note = mongoose.model('Note', noteSchema);

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/notes', async (req, res) => {
  const note = new Note({
    content: req.body.content
  });
  await note.save();
  res.status(201).send(note);
});

app.get('/notes', async (req, res) => {
  const notes = await Note.find();
  res.status(200).send(notes);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});