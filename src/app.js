require('dotenv').config();
const express = require('express');
const app = express();
const eLayouts = require('express-ejs-layouts');


/*
****SET VIEW ENGINE
*/
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(eLayouts);
app.use(express.static('public'));


/*
****IMPORT ALL ROUTES COMPONENT
*/
const indexRoute = require('./routes/index.Route');







/*
****USE ALL ROUTES THEN EXPORTS
*/
app.use('', indexRoute);

module.exports = app;