// Importing required modules
const path = require('path');
const express = require('express');
const exphbs = ('express-handlebars');

const routes = require('./controllers/api/controller');

// Creating an Express application
const app = express();
const PORT = process.env.PORT || 3001;

// Setting up Handlebars as the view engine
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serving static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route handle for the root URL '/'
app.get('/', (req, res) => {
  res.render('main');
});

// Route handler for the '/secondary' URL
app.get('/secondary', (req, res) => {
  res.render('layout/secondary');
});

// Routing middleware
app.use(routes);

// Syncing Sequelize models with the database and starting the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});