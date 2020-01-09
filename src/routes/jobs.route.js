const express = require('express');
const router = express.Router();



router.get('/', (req, res) =>{
    res.render('jobs')
});


router.get('/new', (req, res) =>{
    res.render('jobs_new')
});
module.exports = router;