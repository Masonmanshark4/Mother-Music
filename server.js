// Importing required modules
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars'); // Corrected import

const routes = require('./controllers/api/index.js');

// Define a middleware function
const myMiddleware = (req, res, next) => {
  // Middleware logic here
  console.log('Middleware executed');
  next(); // Call next to pass control to the next middleware or route handler
};

// Creating an Express application
const app = express();
const PORT = process.env.PORT || 3001;

// Setting up Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Using the middleware function
app.use(myMiddleware);

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
