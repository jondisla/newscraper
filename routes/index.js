var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Hello',
        condition: false,
        anyArray: [1, 2, 3]
    });
})

module.exports = router;