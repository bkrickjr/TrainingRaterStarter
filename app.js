require('./config/config');
require('./global_functions');
const express = require('express');
const models = require('./models');
const sessions = require('./controllers/SessionsController')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ entended: false }));

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


app.get('/sessions', sessions.getAll)
app.get('/sessions/:sessionId', sessions.get)
app.post('/sessions', sessions.create);
app.put('/sessions', sessions.update);
module.exports = app;