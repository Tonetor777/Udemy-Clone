<!DOCTYPE html>
<html>
    <head>
        <title>strip</title>
    </head>
    <body>
        <h1 style="text-align: center; color: green;">Thank you for your payment</h1>
        <small style="text-align: center;">We hope you will enjoy the courses that we provides and find it life changing. </small>
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