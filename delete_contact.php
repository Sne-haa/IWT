<?php
header("Content-Type: application/json");
require_once('db.php');

if ($_SERVER["REQUEST_METHOD"] === "DELETE") {
    $id = $_GET["id"];
    $id = $mysqli->real_escape_string($id);

    $query = "DELETE FROM contacts WHERE id = $id";
    if ($mysqli->query($query) === TRUE) {
        echo json_encode(["message" => "Contact deleted successfully"]);
    } else {
        echo json_encode(["error" => $mysqli->error]);
    }
} else {
    echo json_encode(["error" => "Invalid request method"]);
}

$mysqli->close();
?>
