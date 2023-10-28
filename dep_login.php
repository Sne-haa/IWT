
<?php
session_start();
include("config.php");

echo "inside php";
if (isset($_POST['password'])){
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    echo "if tag";
    $query = "SELECT * FROM users WHERE username = '$username' && password='$password';";
    $result = mysqli_query($conn, $query); 
    $data = mysqli_fetch_assoc($result);
    echo "query";
    if ($result) {
        $total = mysqli_num_rows($result);
        echo "$total";

        if ($total == 1) {
            session_start();
            $_SESSION['username'] = $data['username'];
            header("location:index.html");
        } else {
            // echo "<script>alert('Login Failed! Wrong email or password');</script>";
            // echo "Login failed";
        }
    } else {
        echo "Query execution failed: " . mysqli_error($conn);
    }
}
?>