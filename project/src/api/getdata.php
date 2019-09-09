<?php
    include 'conn.php';//引入外部文件到这来
    $sql = 'SELECT * FROM bookList';
    //2.执行语句
    $res = $conn->query($sql);//结果集：包含很多信息，其中数据部分就是我想要的，要特意用方法才能提取出来

    //3.提取数据(提取上面结果集里面的数据部分)
    $data = $res->fetch_all(MYSQLI_ASSOC); //得到一个数组 [{},{},{}]

    //4.把数组转成字符串，传给前端,一个接口文件只能有一个输出
    echo json_encode($data,JSON_UNESCAPED_UNICODE);//把对象转成字符串 JSON_UNESCAPED_UNICODE防止中文转义
    $conn->set_charset('utf8');
    //关闭连接，防止资源浪费
    $res->close();
    $conn->close();
?>