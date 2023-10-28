<?php
// Include the database connection file
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Authenticate the admin (you should replace this with secure authentication)
    $sql = "SELECT * FROM admins WHERE username = '$username' AND password = '$password'";
    $result = $db->query($sql);

    if ($result->num_rows === 1) {
        // Admin authenticated
        // Redirect to admin_details.php
        header("Location: admin_details.php");
        exit();
    } else {
        echo "Admin authentication failed. Please check your username and password.";
    }

    // Close the database connection
    $db->close();
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Admin Login</title>
</head>
<body>
    <h1>Admin Login</h1>
    <form method="post" action="">
        <input type="text" name="username" placeholder="Username" required>
        <input type="text" name="password" placeholder="Password" required>
        <button type="submit">Login</button>
    </form>
</body>
</html>
