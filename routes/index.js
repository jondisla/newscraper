var express = require('express');
var router = express.Router();
const Articles = require('../models/Article');

router.get('/', (req, res, next) => {
    Articles.find((err, content) => {
        res.render('index', {
            title: 'Hello',
            contents: Article
        });
    });
});

module.exports = router;