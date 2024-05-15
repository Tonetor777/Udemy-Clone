<?php
require_once 'dbconfig.php';

loadEnv(__DIR__ . '/.env');


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    header("HTTP/1.1 200 OK");
    exit;
}

function validateEmail($email)
{
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function hashPassword($password)
{
    return password_hash($password, PASSWORD_BCRYPT);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input = json_decode(file_get_contents("php://input"), true);

    if (
        isset($input['firstName']) && !empty($input['firstName']) &&
        isset($input['lastName']) && !empty($input['lastName']) &&
        isset($input['email']) && validateEmail($input['email']) &&
        isset($input['password']) && !empty($input['password']) &&
        isset($input['role']) && in_array($input['role'], ['student', 'instructor', 'admin'])
    ) {
        $firstName = htmlspecialchars($input['firstName']);
        $lastName = htmlspecialchars($input['lastName']);
        $email = htmlspecialchars($input['email']);
        $password = hashPassword($input['password']);
        $role = htmlspecialchars($input['role']);

        $db = new Database();
        $conn = $db->getConnection();

        if (!$conn) {
            echo json_encode(["message" => "Database connection failed"]);
            exit;
        }

        $stmt = $conn->prepare("SELECT user_id FROM Users WHERE email = ?");
        if (!$stmt) {
            echo json_encode(["message" => "Prepare failed: " . $conn->error]);
            exit;
        }
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            echo json_encode(["message" => "Email already registered"]);
        } else {
            $stmt = $conn->prepare("INSERT INTO Users (first_name, last_name, email, password, role, created_at) VALUES (?, ?, ?, ?, ?, NOW())");
            if (!$stmt) {
                echo json_encode(["message" => "Prepare failed: " . $conn->error]);
                exit;
            }
            $stmt->bind_param("sssss", $firstName, $lastName, $email, $password, $role);

            if ($stmt->execute()) {
                echo json_encode(["message" => "Signup successful"]);
            } else {
                echo json_encode(["message" => "Execute failed: " . $stmt->error]);
            }
        }

        $stmt->close();
        $conn->close();
    } else {
        echo json_encode(["message" => "Invalid input"]);
    }
} else {
    echo json_encode(["message" => "Invalid request method"]);
}
