<?php
header("Content-Type: application/json");
require_once('db.php');

$data = json_decode(file_get_contents("php://input"));
$name = $mysqli->real_escape_string($data->name);
$email = $mysqli->real_escape_string($data->email);
$phone = $mysqli->real_escape_string($data->phone);

$query = "INSERT INTO contacts (name, email, phone) VALUES ('$name', '$email', '$phone')";
if ($mysqli->query($query) === TRUE) {
    echo json_encode(["message" => "Contact added successfully"]);
} else {
    echo json_encode(["error" => $mysqli->error]);
}

$mysqli->close();
?>
