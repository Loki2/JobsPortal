const express = require('express');
const router = express.Router();



router.get('/', (req, res, next) =>{
    res.render('index')
})

router.get('/jobs', (req, res, next) => {
    res.render('jobs/index')
})



module.exports = router;