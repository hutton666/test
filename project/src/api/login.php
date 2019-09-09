<?php
    include 'conn.php';

    //接收数据
    $name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';
    $psw = isset($_REQUEST['psw']) ? $_REQUEST['psw'] : '';

    $sql = "SELECT * FROM userinfo WHERE username ='$name' AND psw='$psw'";

    $res = $conn->query($sql);

    //除了select的语句，其他(update/insert/delete)都是返回布尔值,select 得到的是结果集
    if($res->num_rows) {
        //查询到，允许登陆
        echo 'yes';
    }else {
        echo 'no';
    }

?>