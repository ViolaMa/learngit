<?php
    header("Content-type:application/json; charset = utf-8");
    require_once('dblink.php');

        $newstitle = $_POST['newstitle'];
        $newstype = $_POST['newstype'];
        $newsimg = $_POST['newsimg'];
        $newssrc = $_POST['newssrc'];
        $addtime = $_POST['addtime'];

        $sql = "INSERT INTO `newslist`( `newstype`, `newstitle`, `newsimg`, `newssrc`, `addtime`) VALUES ('$newstype','$newstitle','$newsimg','$newssrc','$addtime')";
        //$sql = "INSERT INTO `newslist`( `newstype`, `newstitle`, `newsimg`, `newssrc`, `addtime`) VALUES ('新闻类型','新闻标题','图片地址','laiyuan','2017-01-08')";

        $query = mysql_query($sql, $con);
        if ($query) {
            //echo "插入成功";
            echo json_encode(array('success'=>$sql));
        } else {
            die('Error: ' . mysql_error());
        }
        mysql_close($con);
    //    $result = mysql_query($sql,$con);
    //    echo json_encode(array('success' => 'ok'));

?>