const express = require('express');

const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());


app.listen(5000, () => {
    console.log('Server listening on port', PORT);
})