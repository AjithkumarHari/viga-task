require('dotenv').config();
const express = require('express');
const router = require('./Router/router');
const connectDB = require('./Model/connection')

const app = express();
const port  = process.env.PORT;

app.use(express.json());
app.use('/api',router);

connectDB();

app.listen(port, () => console.log(`server running on port ${port}`));