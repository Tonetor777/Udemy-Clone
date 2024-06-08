<?php
 require_once 'dbconfig.php';

header("Access-Control-Allow-Origin: http://localhost:8003");
header("Access-Control-Allow-Methods: POST");  
header("Access-Control-Allow-Headers: Content-Type, Authorization");  
$targetDirectory="";
$targetFile="";


if (!isset($_FILES["file"])) {
    echo json_encode(array('error' => 'No file uploaded.'));
} else {
    $targetDirectory = "C:\\xampp\\htdocs\\udemy\\PHP\\uploads\\";
    $targetFile = $targetDirectory . basename($_FILES["file"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));


    // Check if file already exists
if (file_exists($target_file)) {
    echo json_encode(array('error' => 'Sorry, file already exists.'));
    $uploadOk = 0;
    }

    // Check file size
    if ($_FILES["file"]["size"] > 10000000000) { 
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
             
                                   
            //connect to database
            $db = new Database();
            $conn = $db->getConnection();

                if ($conn->connect_error) {
                   die("Connection failed: " . $conn->connect_error);
                }else{
                    echo json_encode(array('success' => 'connected to database successfully.'
                                   ));  
                }
    
    $filename=  $_FILES["file"]["name"];
    $filesize =  $_FILES["file"]["size"];
    $filetype =  strtolower(pathinfo($targetFile,PATHINFO_EXTENSION));
    // Insert the file information into the database
                $sql = "INSERT INTO files (filename, filesize, filetype, filepath) VALUES ('$filename', '$filesize', '$filetype', '$targetFile')";

                if ($conn->query($sql) === TRUE) {
                    echo json_encode(array( "The file " . basename($_FILES["file"]["name"]) . " has been uploaded and the information has been stored in the database."
                ));
                } else {
                    echo json_encode(array( "Sorry, there was an error uploading your file and storing information in the database: " . $conn->error
                ));
                }

                $conn->close();
            } else {
                echo json_encode(array( "Sorry, there was an error uploading your file."
            ));
            }


                                   
        // } else {
        //     echo json_encode(array('error' => 'File upload failed.'));
        // }
    }

    
  
    

   
}

?>
