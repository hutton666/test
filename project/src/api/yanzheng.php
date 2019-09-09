<?php
    include 'conn.php';
    $name = isset($_REQUEST['txt']) ? $_REQUEST['txt']:'';

    $sql = "SELECT * FROM userinfo WHERE username = '$name'";

    $res = $conn->query($sql);

    if($res->num_rows){
        echo 'no';
    }else{
        echo 'yes';
    }
?>