<?php
require_once 'dbconfig.php';
header("Access-Control-Allow-Origin: http://localhost:8003");
header('Content-Type: application/json');
header("Access-Control-Allow-Methods: POST");  
header("Access-Control-Allow-Headers: Content-Type, Authorization");  

 $db= new Database();
$conn =  $db->getConnection();

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

$sql = "SELECT id, filename, filesize, filetype FROM files";
$result = $conn->query($sql);

$files = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $files[] = $row;
    }
}

echo json_encode($files);

$conn->close();
?>
