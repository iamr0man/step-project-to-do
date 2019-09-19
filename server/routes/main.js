const bodyParser = require('body-parser');

const notes = require('./notes');
const lists = require('./lists');

module.exports = function (app, database) {

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    });

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: false
    }));

    app.set('view engine', 'pug');
    app.set('views', './views');

    app.use('/lists', lists.routeLists(database));
};