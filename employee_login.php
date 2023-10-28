<?php
// Include the database connection file
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Authenticate the employee (you should replace this with secure authentication)
    $sql = "SELECT * FROM employees WHERE username = '$username' AND password = '$password'";
    $result = $db->query($sql);

    if ($result->num_rows === 1) {
        // Employee authenticated
        // Redirect to employee_details.php
        header("Location: employee_details.php");
        exit();
    } else {
        echo "Employee authentication failed. Please check your username and password.";
    }

    // Close the database connection
    $db->close();
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Employee Login</title>
</head>
<body>
    <h1>Employee Login</h1>
    <form method="post" action="">
        <input type="text" name="username" placeholder="Username" required>
        <input type="text" name="password" placeholder="Password" required>
        <button type="submit">Login</button>
    </form>
</body>
</html>
