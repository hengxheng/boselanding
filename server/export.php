<?php 
	// Start the session
	session_start();
    include("settings.php"); 
    if (isset($_SESSION['admin'])){  

    $conn = new mysqli($db, $username, $password, $dbname);

    $select = "SELECT * FROM {$table_name}";

    $result = $conn->query( $select );

    $header = "Name\tEmail\tPhone\tState\tPhoto\tLink\tSubscription\t";
    
    $line = '';
    while($row = $result->fetch_assoc()) {
        $line .= "{$row['name']}\t{$row['email']}\t{$row['phone']}\t{$row['state']}\t{$row['upload_file']}\t{$row['link']}\t{$row['newsletter']}\t\n";
    }
    $data = trim( $line );
    $data = str_replace( "\r" , "" , $data );
    if ( $data == "" )
    {
        $data = "\n(0) Records Found!\n";                        
    }

    header("Content-Type: application/force-download");
    header("Content-type: application/octet-stream");
    header("Content-Type: application/download");
    
    header("Content-Disposition: attachment; filename=c_results.xls");
    header("Pragma: no-cache");
    header("Expires: 0");
    print "$header\n$data";
}
else{
    echo "Login to export data";
}
?>