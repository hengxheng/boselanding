<!doctype html>
<?php include("settings.php"); ?>
<html>
	<head>
		<title><?php echo $page_title; ?></title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<link rel="stylesheet" href="src/css/style.css" type="text/css">
		<link rel="stylesheet" href="src/css/lightbox.min.css" type="text/css">
	</head>
	<body>
		<header class="gallery-header">
			<div class="site-inner">
				<div class="gallery-header-inner">
					<div class="header-logo">
						<img src="src/images/ss_logo.png" alt="Sharp Shot">
					</div>	
					<nav class="site-nav">
						<ul>
							<li><a href="<?php echo $base_url; ?>/gallery.php">ENTRIES</a></li>
							<li><a href="<?php echo $base_url; ?>/#section-2">PRIZES</a></li>
							<li><a href="<?php echo $base_url; ?>/#section-3">REGISTER</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
		<div id="gallery-page" class="gallery-page">
			<div class="site-inner">
				<div class="gallery-block">
				<?php
					$conn = new mysqli($db, $username, $password, $dbname);
					
					if ($conn->connect_error) {
						die("Connection failed: " . $conn->connect_error);
					}
			
					
					$sql = "SELECT * FROM {$table_name} ORDER BY id DESC LIMIT {$per_page}";
					$result = $conn->query($sql);
					
					if ($result->num_rows > 0):
						 while($row = $result->fetch_assoc()) :?>
								<a href="<?php echo $base_url."/".$row['upload_file']; ?>" class="gallery-item" style="background: url(<?php echo $base_url."/".$row['upload_file']; ?>); background-size: cover;" data-lightbox="roadtrip" alt="<?php echo $row['name']; ?>">
								</a>  
						<?php endwhile;
					endif; 
					$conn->close();	
				?>
				</div>	
			</div>
		</div>
		<div id="loader-icon">LOADING..</div>
		<footer>	
			<div class="site-inner">
				<div class="footer-inner">
					<div class="footer-left">
						<span>&copy; 2017 Western Digital Corporation or its affiliates. All rights reserved.</span>
					</div>
					<div class="footer-right">
						<img src="src/images/footer-logo.png" alt="Sandisk WD">
					</div>
				</div>
			</div>
		</footer>
</body>
<script src="https://code.jquery.com/jquery-2.1.1.js"></script>
<script src="src/js/app.js"></script>
<script src="src/js/lightbox.min.js"></script>
	
</html>