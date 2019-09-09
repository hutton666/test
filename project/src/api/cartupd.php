<?php
    include 'conn.php';//引入外部文件到这来
    $bid = isset($_REQUEST['bid']) ? $_REQUEST['bid']:'';
    $uname = isset($_REQUEST['uid']) ? $_REQUEST['uid']:'';
    $imgurl = isset($_REQUEST['imgurl']) ? $_REQUEST['imgurl']:'';
    $price = isset($_REQUEST['price']) ? $_REQUEST['price']:'';
    $bname = isset($_REQUEST['bname']) ? $_REQUEST['bname']:'';
    $bNum = isset($_REQUEST['bNum']) ? $_REQUEST['bNum']:'';
    $totalNum = isset($_REQUEST['totalNum']) ? $_REQUEST['totalNum']:'';

    $sql = "INSERT INTO cart (bid,uid,imgurl,price,bname,bNum,totalNum) VALUES ($bid,'$uname','$imgurl','$price','$bname',$bNum,$totalNum)";
    $res = $conn->query($sql);
    if($res){
        echo 'yes';
    }else{
        echo 'no';
    }
?>