<?php
 

header("Access-Control-Allow-Origin: http://localhost:8003");
header("Access-Control-Allow-Methods: POST");  
header("Access-Control-Allow-Headers: Content-Type, Authorization");  
 



if (!isset($_FILES["file"])) {
    echo json_encode(array('error' => 'No file uploaded.'));
} else {
    $targetDirectory = "C:\\xampp\\htdocs\\udemy\\PHP\\uploads\\";
    $targetFile = $targetDirectory . basename($_FILES["file"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

    // Check file size
    if ($_FILES["file"]["size"] > 10000000) { 
        echo json_encode(array('error' => 'File is too large.'));
        $uploadOk = 0;
    }

    // Allow certain file formats
    $allowedExtensions = array("jpg", "jpeg", "png", "gif", "pdf", "mp4", "mp3");
    if (!in_array($imageFileType, $allowedExtensions)) {
        echo json_encode(array('error' => 'Only JPG, JPEG, PNG, GIF, PDF files are allowed.'));
        $uploadOk = 0;
    }

    if ($uploadOk == 0) {
        echo json_encode(array('error' => 'File upload failed.'));
    } else {
        if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
            // File uploaded successfully, store file path in the database
            echo json_encode(array('success' => 'File uploaded successfully.'
                                   ));
                               
                                   
        } else {
            echo json_encode(array('error' => 'File upload failed.'));
        }
    }
    

   
}

?>
