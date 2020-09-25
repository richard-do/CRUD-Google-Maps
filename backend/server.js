const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
// will allow us to parse json 
app.use(express.json());

app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`);
});