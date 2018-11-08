const express = require('express');
require('./config/config');
const models = require('./models');

const app = express();

app.get( '/', (req, res) => { res.send("Helloworld!") } );

models.sequelize        //accessing models\index.js which is exporting sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

if (CONFIG.app == 'dev') {
    models.sequelize.sync();
}

module.exports = app;
