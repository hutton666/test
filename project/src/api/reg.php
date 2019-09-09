<?php
    include 'conn.php';
    $name = isset($_REQUEST['txt']) ? $_REQUEST['txt'] : '';
    $psw = isset($_REQUEST['psw']) ? $_REQUEST['psw'] : '';
 
    $sql = "INSERT INTO userinfo (username,psw) VALUES ('$name','$psw')";

    $res = $conn->query($sql);

    if($res){
        echo 'yes';
    }else{
        echo 'no';
    }
?>