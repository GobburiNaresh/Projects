const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

//const errorController = require('./controllers/error');

const sequelize = require('./util/database');

const Activity = require('./models/product');
var cors = require('cors');

const app = express();

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views');

const activityRoutes = require('./routes/product');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/activity', activityRoutes);

sequelize
  .sync()
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });