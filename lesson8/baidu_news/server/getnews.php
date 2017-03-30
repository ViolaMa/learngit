<?php
header("Content-type:application/json; charset = utf-8");
require_once('dblink.php');
if (!$con) {
    //echo json_encode(array('success' => 'none'));
    die("Could not connect:" . mysql_error());
} else {
    mysql_select_db('news', $con);

    if(@$_GET['newstype']) {
        $newstype =$_GET['newstype'];
        $sql = "SELECT * FROM `newslist` WHERE `newstype`='{$newstype}'";

        mysql_query("set names utf8");
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

        mysql_query("set names utf8");
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
}
mysql_close($con);
?>