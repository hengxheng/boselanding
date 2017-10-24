<?php 
	// Upload files

	$temp = explode(".", $_FILES["upload-photo"]["name"]);
	$extension = end($temp);

    $photo_dir = "upload/";
    
    $photo_name = md5(date('Y-m-d H:i:s:u'));
    $photo = $photo_name.".".$extension;
	$photo_file = $photo_dir.$photo;
	
	if (move_uploaded_file($_FILES["upload-photo"]["tmp_name"], $photo_file)) {
    } else {
        echo "Sorry, there was an error uploading your photo.";
    }

    echo $photo;
?>