<?php
    header("Content-type:application/json; charset = utf-8");
    require_once('dblink.php');

    $newstitle = $_POST['newstitle'];
        $newstype = $_POST['newstype'];
        $newsimg = $_POST['newsimg'];
        $newssrc = $_POST['newssrc'];
        $addtime = $_POST['addtime'];
        $newsid = $_POST['newsid'];

        $sql = "UPDATE `newslist` SET `newstitle`= '{$newstitle}',`newstype`='{$newstype}',`newsimg`='{$newsimg}',
                `addtime`= '{$addtime}',`newssrc` = '{$newssrc}' WHERE `newsid`={$newsid}";

        $query = mysql_query($sql,$con);

        if($query){
            echo json_encode(array('success'=>$sql));
        }else{
            die('Error: ' . mysql_error());
        }


    mysql_close($con);
?>