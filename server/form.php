<?php 
	
	include("settings.php");


	// Create connection
	$conn = new mysqli($db, $username, $password, $dbname);

	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 


	$fullname = mysqli_real_escape_string($conn, $_POST['fullname']);
	$phone = mysqli_real_escape_string($conn, $_POST['phone']);
	$email = mysqli_real_escape_string($conn, $_POST['email']);
	$state = mysqli_real_escape_string($conn, $_POST['state']);
	$link = mysqli_real_escape_string($conn, $_POST['link']);
	$photo = mysqli_real_escape_string($conn, $_POST['uploaded-file-name']);
	$newsletter = mysqli_real_escape_string($conn, $_POST['newsletter']);
	if(!$newsletter){
		$newsletter = "off";
	}

	$photo_dir = "upload/";

	$photo_file = $photo_dir.$photo;
	
	if (move_uploaded_file($_FILES["upload-photo"]["tmp_name"], $photo_file)) {
    } else {
        echo "Sorry, there was an error uploading your photo.";
    }


	$sql = "INSERT INTO {$table_name} (name, email, phone, state, upload_file, link, newsletter) VALUES ('{$fullname}', '{$email}', '{$phone}', '{$state}', '{$photo_file}', '{$link}', '{$newsletter}')";

	if ($conn->query($sql) === TRUE) {
	    
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}

	$conn->close();
	// header("Location: ".$base_url."/thankyou.php");
?>