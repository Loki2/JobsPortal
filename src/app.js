/*
****Checking Production Enviroment
*/
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

// require('dotenv').config();
const express = require('express');
const app = express();
const eLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

/*
****Database connection setup
*/
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true});
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log('Connected to mongoose'))


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
const LoginRoute = require('./routes/login.route');
const RegisterRoute = require('./routes/register.route')







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
app.use('/login', LoginRoute);
app.use('/register', RegisterRoute)
module.exports = app;