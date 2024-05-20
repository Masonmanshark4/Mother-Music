// import dependencies
const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({helpers});
//const favicon = require('serve-favicon');
require('dotenv').config();

// for storing session data
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// session configuration
const sess = {
    secret: process.env.DB_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
        checkExpirationInterval: 1000 * 60 * 10, // will check every 10 minutes
        expiration: 1000 * 60 * 30 // will expire after 30 minutes
    })
};

// initialize express app
const app = express();
const PORT = process.env.PORT || 3001;

app.use(session(sess));

//app.engine('handlebars', exphbs({
//    defaultLayout: 'main',
//    layoutsDir: path.join(__dirname, './', 'views', 'layouts'),
//    partialsDir: path.join(__dirname, './', 'views', 'partials')}
//));
//app.set('views', path.join(__dirname, '..', 'views'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware
app.use(express.static(path.join(__dirname, 'Public')));
//app.use(favicon(path.join(__dirname, 'Public', 'favicon.ico')));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(routes);

sequelize.sync().then(() => {
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  })
});
