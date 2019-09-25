const mongoose = require('mongoose');
const notes = require('./src/routes/notes');
const lists = require('./src/routes/lists');
const main = require('./src/routes/main');

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

// DB Config
const db = require('./src/config/keys').uri;

mongoose.connect(db)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(express.static(path.join(__dirname, '/public/')));
app.use(bodyParser.json());
app.use(express.json())

app.use('/', notes);
app.use('/', lists);
app.use('/', main);


app.set('views', path.join(__dirname, '/template/views'));
app.set('view engine', 'pug');

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening the port ${port}...`));