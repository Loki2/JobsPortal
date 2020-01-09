const express = require('express');
const router = express.Router();



router.get('/', (req, res, next) =>{
    res.render('product')
})

router.get('/new', (req, res) => {
    res.send("This new product pages");
})

module.exports = router;