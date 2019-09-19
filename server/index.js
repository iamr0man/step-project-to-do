  const express = require('express');
  const mongoClient = require('mongodb').MongoClient;
  const bodyParser = require('body-parser');

  const app = express();

  app.use(bodyParser.urlencoded({
      extended: false
  }));
  app.use(bodyParser.json());

  // DB Config
  const db = require('./config/keys').uri;

  const client = new mongoClient(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  });

  client.connect((err, connection) => {

      require('./routes/main')(
          app,
          connection.db('testing')
      );

      app.listen('3000', () => {
          console.log('We are live!');
      });

  });