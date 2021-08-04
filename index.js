const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');

const app = express();

// config env file
dotenv.config({ path: './config.env' });

// accept json format
app.use(express.json());

// we link the router files to make our route easy 
app.use(require('./router/auth'));

const PORT = process.env.PORT || 5000;

// production
// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('./client/build'));
//     const path = require("path");
//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//         console.log(__dirname);

//     })
// }

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
})