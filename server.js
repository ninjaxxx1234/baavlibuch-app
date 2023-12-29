// server.js
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB setup
mongoose.connect('mongodb://localhost:27017/pwa_database', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Models
const ConnectionModel = mongoose.model('Connection', { count: Number });
const TextModel = mongoose.model('Text', { text: String, userId: String });
const UserModel = mongoose.model('User', { userId: String, friendList: [String] });

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: './uploads',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg');
  },
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for logging connections
app.use((req, res, next) => {
  console.log('Connection made');
  ConnectionModel.create({ count: 1 }, (err) => {
    if (err) console.error('Error logging connection:', err);
  });
  next();
});

// Routes
app.post('/submit', upload.single('photo'), async (req, res) => {
  try {
    const { id, friendId, password } = req.body;

    // Store text in MongoDB
    const newText = new TextModel({ text: id, userId: id });
    await newText.save();

    // Call Django API for NLP
    const response = await axios.post('http://django-api-url/ngrams', { text1: id, text2: friendId });
    const ngrams = response.data;

    // Store encrypted photo on disk
    const userPhotoPath = `./uploads/${id}-photo.jpg`;
    // Perform encryption and save the photo to the specified path

    // Add user ID to MongoDB
    const newUser = new UserModel({ userId: id, friendList: [] });
    await newUser.save();

    // Update friend's friendList
    await UserModel.updateOne({ userId: friendId }, { $push: { friendList: id } });

    res.status(200).json({ ngrams });
  } catch (error) {
    console.error('Error processing form data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
