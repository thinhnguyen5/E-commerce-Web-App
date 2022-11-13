const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');

//Middleware
app.use(cors());
app.use(bodyParser.json());
//Import ROUTES
const productsRoute = require('./routes/products');

app.use('/products', productsRoute);

//Storage
const Storage = multer.diskStorage({

    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer ({
    storage: Storage
});

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Connecting to DB')
);

//Listening the server
app.listen(4000);