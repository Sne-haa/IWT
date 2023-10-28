<?php
$host = "localhost"; // Your MySQL host (usually "localhost")
$username = "root"; // Your MySQL username
$password = ""; // Your MySQL password
$database = "contact_manager"; // Your MySQL database name

// Create a connection to the database
$mysqli = new mysqli($host, $username, $password, $database);

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}
?>
