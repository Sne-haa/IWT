<?php
// Replace with your database connection code from db.php
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $username = $_POST['username'];
    $name = $_POST['name'];
    $password = $_POST['password'];

    $sql = "INSERT INTO employees (username, password, name, email) VALUES ('$username', '$password', '$name', '$email')";

    if ($db->query($sql) === TRUE) {
        echo "Employee registered successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . $db->error;
    }

    // Close the database connection
    $db->close();
}
?>


<!DOCTYPE html>
<html>
<head>
    <title>Employee Registration</title>
</head>
<body>
    <h1>Employee Registration</h1>
    <form method="post" action="">
        <input type="text" name="username" placeholder="Username" required>
        <input type="text" name="password" placeholder="Password" required>
        <input type="text" name="name" placeholder="Full Name" required>
        <input type="email" name="email" placeholder="Email" required>
        <button type="submit">Register</button>
    </form>
</body>
</html>
