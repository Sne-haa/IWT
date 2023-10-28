<?php
// Include the database connection file
require_once 'db.php';

// Fetch employee details
$employeeSql = "SELECT * FROM employees";
$employeeResult = $db->query($employeeSql);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Employee Details</title>
</head>
<body>
    <h1>Employee Details</h1>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
        </tr>
        <?php
        if ($employeeResult->num_rows > 0) {
            while ($row = $employeeResult->fetch_assoc()) {
                echo "<tr>";
                echo "<td>" . $row['id'] . "</td>";
                echo "<td>" . $row['name'] . "</td>";
                echo "<td>" . $row['email'] . "</td>";
                echo "</tr>";
            }
        } else {
            echo "No employee details found.";
        }
        ?>
    </table>
</body>
</html>
