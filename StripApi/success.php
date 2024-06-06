<!DOCTYPE html>
<html>
    <head>
        <title>strip</title>
    </head>
    <body>
        <h1>Thank you for your payment</h1>
    </body>
</html>
<?php
require 'dbconfig.php';

loadEnv(__DIR__ . '/.env');

$db = new Database();
$conn=$db->getConnection();

$sql="insert into Payments values (?,?,?,?,?);";
$stm=$conn->prepare($sql);
$stm->bind_param("iiisd",$pay_id,$user_id,$course_id,$amount,$pay_date);
$timestamp = time();

$date = date('Y-m-d H:i:s', $timestamp);
$pay_date= $date;
?>