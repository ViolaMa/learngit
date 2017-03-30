<?php
    header("Content-type:application/json; charset = utf-8");
    require_once('dblink.php');
    if (!$con) {
        die("Could not connect:" . mysql_error());
    } else {
        mysql_select_db("news", $con);

        $newsid = $_POST['newsid'];
        mysql_query("set names 'utf8'");
        $sql = "DELETE FROM `newslist` WHERE `newslist`.`newsid`={$newsid}";
        $query = mysql_query($sql, $con);

        if($query){
            echo json_encode(array('success' => 'ok'));
        }else{
            die('Error: ' . mysql_error());
        }

        mysql_close($con);
    }
?>