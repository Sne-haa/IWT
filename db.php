<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "company";

// Create a connection
$db = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}
?>



