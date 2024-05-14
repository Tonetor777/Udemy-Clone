<?php
$targetDirectory = "uploads/";
$targetFile = $targetDirectory . basename($_FILES["file"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

// Check if file already exists
if (file_exists($targetFile)) {
    echo json_encode(array('error' => 'File already exists.'));
    $uploadOk = 0;
}

// Check file size
if ($_FILES["file"]["size"] > 5000000) { 
    echo json_encode(array('error' => 'File is too large.'));
    $uploadOk = 0;
}

// Allow certain file formats
if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    && $imageFileType != "gif" && $imageFileType != "pdf") { 
    echo json_encode(array('error' => 'Only JPG, JPEG, PNG, GIF, PDF files are allowed.'));
    $uploadOk = 0;
}

if ($uploadOk == 0) {
    echo json_encode(array('error' => 'File upload failed.'));
} else {
    if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
        echo json_encode(array('success' => 'File uploaded successfully.'));
    } else {
        echo json_encode(array('error' => 'File upload failed.'));
    }
}
?>
