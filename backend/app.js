const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
const students = require('./routes/api/students')

connectDB();
app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/students', students);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));