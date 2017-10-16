<?php 
    include("settings.php"); 

    $conn = new mysqli($db, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

    // sql to create table
    $sql = "CREATE TABLE IF NOT EXISTS {$table_name} (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
            name VARCHAR(60) NOT NULL,
            email VARCHAR(50),
            phone VARCHAR(50),
            state VARCHAR(50),
            upload_file VARCHAR(100),
            link VARCHAR(150),
            newsletter VARCHAR(10)
        )";
    if ($conn->query($sql) === TRUE) {
        echo "Table MyGuests created successfully";
    } else {
        echo "Error creating table: " . $conn->error;
    }

    $conn->close();
?>