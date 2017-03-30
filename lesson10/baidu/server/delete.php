<?php
    header("Content-type:application/json; charset = utf-8");
    require_once('dblink.php');

        $newsid = $_POST['newsid'];

        $sql = "DELETE FROM `newslist` WHERE `newslist`.`newsid`={$newsid}";
        $query = mysql_query($sql, $con);

        if($query){
            echo json_encode(array('success' => 'ok'));
        }else{
            die('Error: ' . mysql_error());
        }
        mysql_close($con);

?>