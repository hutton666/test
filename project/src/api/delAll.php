<?php
    include 'conn.php';
    $bid = isset($_REQUEST['bids']) ? $_REQUEST['bids']:'';
    $sql = "DELETE FROM cart WHERE id = $bid";
    $res = $conn->query($sql);

    if($res){
        echo 'yes';
    }else{
        echo 'no';
    }
?>