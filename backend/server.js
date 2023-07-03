const express = require('express');
const app = express();
const mongoose = require('mongoose');
const blogRoutes = require('./routes/BlogRoutes');
const careerRoutes = require('./routes/careerRoutes');
const emailRoutes = require('./routes/emailRoutes');
const cors = require('cors');



// Connect to MongoDB
const mongoURI = 'mongodb+srv://aaqibimran0:Test786@secureweb.onauyzx.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));



// Set up middleware
app.use(express.json());
app.use(cors());



// Add routes
app.use(blogRoutes);
app.use(careerRoutes);
app.use(emailRoutes);



// Define routes

// Start the server
const port = 3000; // Change the port if needed
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
