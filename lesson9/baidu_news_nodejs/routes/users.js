var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dblink = require('./db.js');

var connection = mysql.createPool(dblink);
/* 后台管理页面*/
//获取所有新闻列表
router.get('/getnews', function (req, res, next) {
    connection.query('SELECT * FROM `newslist` order by `newsid` desc', function (err, rows) {
        res.json(rows);
    });
});

//确认更新
router.post('/update', function (req, res, next) {
    var newsid = req.body.newsid,
        newstitle = req.body.newstitle,
        newstype = req.body.newstype,
        newssrc = req.body.newssrc,
        newsimg = req.body.newsimg,
        addtime = req.body.addtime;
    connection.query("UPDATE `newslist` SET `newstitle`= ?,`newstype`=?,`newsimg`=?,`addtime`= ?,`newssrc` = ? WHERE `newsid`=?", [newstitle, newstype, newsimg, addtime, newssrc, newsid], function (err, rows) {
        console.log(rows.changedRows);
        res.json(rows);
    })
});

//模态框取值
router.get('/currentNews', function (req, res) {
    var newsid = req.query.newsid;
    connection.query('SELECT * FROM `newslist` WHERE `newsid`=?', [newsid], function (err, rows) {
        res.json(rows);
    })
});

//删除新闻
router.post('/delete', function (req, res) {
    var newsid = req.body.newsid;
    connection.query('DELETE FROM `newslist` WHERE `newslist`.`newsid`=?', [newsid], function (err, result) {
        console.log(result.affectedRows);
        res.json(result);
    });
});

//新建新闻
router.post('/insert', function (req, res) {
    var newstitle = req.body.newstitle,
        newstype = req.body.newstype,
        newssrc = req.body.newssrc,
        newsimg = req.body.newsimg,
        addtime = req.body.addtime;
    connection.query("INSERT INTO `newslist`( `newstype`, `newstitle`, `newsimg`, `newssrc`, `addtime`) VALUES (?,?,?,?,?)", [newstype, newstitle, newsimg, newssrc, addtime], function (err, result) {
        if (!err) {
            console.log(result.insertId);
            res.json(result);
        }
    })
})
module.exports = router;
