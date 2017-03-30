<?php
    header("Content-type:application/json; charset = utf-8");
    require_once('dblink.php');

    $newsid = $_GET['newsid'];

     $sql = "SELECT * FROM `newslist` WHERE `newsid`= {$newsid}";
     $result = mysql_query($sql,$con);
     $senddata = array();
     while($row = mysql_fetch_array($result)){
      array_push($senddata,array(
                'newsid' => $row['newsid'],
                'newstype' => $row['newstype'],
                                'newstitle' => $row['newstitle'],
                                'newsimg' => $row['newsimg'],
                                'newssrc' => $row['newssrc'],
                                'addtime' => $row['addtime'],
            ));
        }
        echo json_encode($senddata);

    mysql_close($con);

?>