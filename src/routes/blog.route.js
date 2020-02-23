const express = require('express');
const router = express.Router();



router.get('/', (req, res, next) =>{
    res.render('blog')
})

router.get('/:blog_id', (req, res, next) =>{
    res.render('blog_single')
})

module.exports = router;