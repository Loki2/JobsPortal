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
const indexRoute = require('./routes/index.route');
const blogRoute = require('./routes/blog.route');
const productRoute = require('./routes/product.Route');
const serviceRoute = require('./routes/service.route');
const aboutRoute = require('./routes/about.route');
const contactRoute = require('./routes/contact.route');
const jobsRoute = require('./routes/jobs.route');







/*
****USE ALL ROUTES THEN EXPORTS
*/
app.use('', indexRoute);
app.use('/blogs', blogRoute);
app.use('/products', productRoute);
app.use('/services', serviceRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);
app.use('/jobs', indexRoute);
app.use('/new_jobs', jobsRoute);
module.exports = app;