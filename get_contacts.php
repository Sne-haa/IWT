<?php
header("Content-Type: application/json");
require_once('db.php');

$query = "SELECT * FROM contacts";
$result = $mysqli->query($query);

$contacts = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $contacts[] = $row;
    }
}

echo json_encode($contacts);

$mysqli->close();
?>
