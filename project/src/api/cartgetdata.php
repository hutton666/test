<?php
    include 'conn.php';//引入外部文件到这来
    $sql = 'SELECT * FROM cart';
    $res = $conn->query($sql);
    $data = $res->fetch_all(MYSQLI_ASSOC); //得到一个数组 [{},{},{}]
    echo json_encode($data,JSON_UNESCAPED_UNICODE);//把对象转成字符串 JSON_UNESCAPED_UNICODE防止中文转义
    $conn->set_charset('utf8');
    //关闭连接，防止资源浪费
    $res->close();
    $conn->close();
?>