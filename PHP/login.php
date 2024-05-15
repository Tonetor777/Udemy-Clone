<?php
require_once 'dbconfig.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
function validateEmail($email)
{
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input = json_decode(file_get_contents("php://input"), true);

    if (
        isset($input['email']) && !empty($input['email']) &&
        isset($input['password']) && !empty($input['password'])
    ) {
        $email = htmlspecialchars($input['email']);
        $password = htmlspecialchars($input['password']);
        $db = new Database();
        $conn = $db->getConnection();
        $stmt = $conn->prepare("SELECT * FROM Users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();
        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();
            if (password_verify($password, $user['password'])) {
                echo json_encode(["message" => "Login successful", "user" => $user]);
            } else {
                echo json_encode(["message" => "Incorrect password"]);
            }
        } else {
            echo json_encode(["message" => "User not found"]);
        }
        $stmt->close();
        $conn->close();
    } else {
        echo json_encode(["message" => "Invalid email or password"]);
    }
} else {
    echo json_encode(["message" => "Invalid request method"]);
}
