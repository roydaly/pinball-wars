require('dotenv').config();
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
// module allows use of sessions 
const session = require('express-session');
// imports passport local strategy 
const passport = require('./config/passportConfig');
// modules for flash messages 
const flash = require('connect-flash');
const isLoggedIn = require('./middleware/isLoggedIn');
const helmet = require('helmet');
const axios = require('axios'); 

//this is only used by the session store
const db = require('./models');

const app = express();

//this line makes the session use sequelize to write session data to a postgres table
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sessionStore = new SequelizeStore({
  db: db.sequelize, 
  expiration: 1000 * 60 * 30
});

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use(ejsLayouts);
app.use(helmet());

//configs express-sessions middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionStore
}));

//use this line once to setup the store table
sessionStore.sync();

// starts the flash middleware
app.use(flash());

// link passport to the express session
// must be below session *********
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req,res,next){
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});


app.get('/', function(req, res) {
  res.render('index');
});

app.get('/profile', isLoggedIn, function(req, res) {
   res.render('profile');
});

app.get('/search', isLoggedIn, function(req, res) {
  //adding today ********
  var pinballUrl = 'https://opdb.org/api/search/?q=' + req.query.name + '&api_token=' + process.env.API_KEY;
  // Use request to call the API
  console.log(pinballUrl);
  axios.get(pinballUrl).then( function(apiResponse) {
    var machine = apiResponse.data;
    console.log(machine);
   res.render('search', { machine });
  })
});

app.get('/show', isLoggedIn, function(req, res) {
   res.render('show');
});

app.use('/auth', require('./controllers/auth'));

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
