const mongoose = require('mongoose');
const notes = require('./routes/notes');
// const lists = require('./routes/lists');


const express = require('express');
const bodyParser = require('body-parser');
const app = express();

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

// DB Config
const db = require('./config/keys').uri;

mongoose.connect(db)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json());
app.use(express.json())
app.use('/notes', notes);
app.set('views', '../template/views/');
app.set('view engine', 'pug');


const port = process.env.POTY || 3000;
app.listen(port, () => console.log(`Listening the port ${port}...`))