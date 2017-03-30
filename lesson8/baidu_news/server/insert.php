<?php
    header("Content-type:application/json; charset = utf-8");
    require_once('dblink.php');
    if (!$con) {
        die("Could not connect:" . mysql_error());
    } else {
        mysql_select_db("news", $con);

        $newstitle = $_POST['newstitle'];
        $newstype = $_POST['newstype'];
        $newsimg = $_POST['newsimg'];
        $newssrc = $_POST['newssrc'];
        $addtime = $_POST['addtime'];

        $sql = "INSERT INTO `newslist`( `newstype`, `newstitle`, `newsimg`, `newssrc`, `addtime`) VALUES ('$newstype','$newstitle','$newsimg','$newssrc','$addtime')";
        //$sql = "INSERT INTO `newslist`( `newstype`, `newstitle`, `newsimg`, `newssrc`, `addtime`) VALUES ('新闻类型','新闻标题','图片地址','laiyuan','2017-01-08')";
        mysql_query("set names 'utf8'");
        $query = mysql_query($sql, $con);
        if ($query) {
            echo "插入成功";

        } else {
            die('Error: ' . mysql_error());
        }
        mysql_close($con);
    //    $result = mysql_query($sql,$con);
    //    echo json_encode(array('success' => 'ok'));


}
?>