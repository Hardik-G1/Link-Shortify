const express = require('express');
const connectDB = require('./config/db');
var bodyparser = require("body-parser");
const app = express();

// Connect to database
connectDB();
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({
	extended: true
  }));
app.use(express.json());


// Define Routes
app.use('/', require('./routes/index'));
app.use('/shorten', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
