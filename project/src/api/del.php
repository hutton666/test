<?php
    include 'conn.php';
    $bid = isset($_REQUEST['bid']) ? $_REQUEST['bid']:'';
    $sql = "DELETE FROM cart WHERE id = $bid";
    $res = $conn->query($sql);

    if($res){
        echo 'yes';
    }else{
        echo 'no';
    }
?>