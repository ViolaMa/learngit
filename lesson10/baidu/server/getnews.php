<?php
header("Content-type:application/json; charset = utf-8");
require_once('dblink.php');

    if(@$_GET['newstype']) {
        $newstype =$_GET['newstype'];
        $sql = "SELECT * FROM `newslist` WHERE `newstype`='{$newstype}'";

        $result = mysql_query($sql, $con);
        $senddata = array();
        while ($row = mysql_fetch_array($result)) {
            array_push($senddata, array(
                'newsid' => $row['newsid'],
                'newstype' => $row['newstype'],
                'newstitle' => $row['newstitle'],
                'newsimg' => $row['newsimg'],
                'newssrc' => $row['newssrc'],
                'addtime' => $row['addtime'],
            ));
        }
        //$result = array("errcode" => 0, "result" => $arr);
        echo json_encode($senddata);
    } else {

        $sql = "SELECT * FROM `newslist`";

        $result = mysql_query($sql, $con);
        $senddata = array();
        while ($row = mysql_fetch_array($result)) {
            array_push($senddata, array(
                'newsid' => $row['newsid'],
                'newstype' => $row['newstype'],
                'newstitle' => $row['newstitle'],
                'newsimg' => $row['newsimg'],
                'newssrc' => $row['newssrc'],
                'addtime' => $row['addtime'],
            ));
        }
        //$result = array("errcode" => 0, "result" => $arr);
        echo json_encode($senddata);
    }
mysql_close($con);
?>