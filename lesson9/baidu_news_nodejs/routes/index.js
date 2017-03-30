var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dblink = require('./db.js');

/* 在主页获取新闻时的请求 */
router.get('/', function (req, res, next) {
    var newstype = req.query.newstype;

    var connection = mysql.createConnection(dblink);

    connection.connect();

    connection.query('SELECT * FROM `newslist` WHERE `newstype`= ?', [newstype], function (err, rows, fileds) {
        console.log(rows);
        res.json(rows);
    })

    connection.end();
});

module.exports = router;
