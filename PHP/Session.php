<?php
session_start();

header("Access-Control-Allow-Origin: http://localhost:8001");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if (isset($_SESSION['user'])) {
    $user = $_SESSION['user'];
    echo json_encode(['user' => $user]);
} else {
    echo json_encode(['error' => 'User session not found']);
}
