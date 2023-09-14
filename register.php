<?php
include "db.php";
if(isset($_POST['submit']))
{
    $name=$_POST['name'];
    $em=$_POST['em'];
    $mobile=$_POST['mb'];
    $dt=$_POST['dt'];
    $tm=$_POST['tm'];
    $Qualification=$_POST['class1'];
    
		$query="INSERT INTO `register`(`Name`, `Email`, `MoNo`, `Date`, `Time`, `Quali`)  VALUES ('$name','$em',' $mobile','$dt','$tm','$Qualification')";
		//$resultset=mysqli_query($con,$query);
		if ($con->query($query) === TRUE)
		{
			echo "<script type='text/javascript'>alert('Record Inserted Successfully!');</script>";
            header('location:courses.html');
		}
		else 
		{
			echo "<script type='text/javascript'>alert('Error during insertion!');</script>";
		}
        if(isset($_POST['submit']))
        {
            'window.location.href = "courses.html";';
        }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="register.css">
    <title>Register Form</title>
    
</head>
<body>
<div class="container">
    <form method="post">
    <H3><span>Register your Service</span></H3>
        <p><input type="text" id="name" name="name" placeholder="Enter your name" value="<?php if(isset($_POST['submit']))echo $_POST['name'];?>" required></input></p><br>
        <p><input type="text" id="em" name="em" placeholder="Enter your Email" value="<?php if(isset($_POST['submit']))echo $_POST['em'];?>" required></input></p><br>
        <p><input type="text" id="mb" name="mb" placeholder="Mobile Number" value="<?php if(isset($_POST['submit']))echo $_POST['mb'];?>" required></input></p><br>
        <p><input type="text" id="dt" name="dt" placeholder="Date (YYYY-MM-DD)" value="<?php if(isset($_POST['submit']))echo $_POST['dt'];?>" required></input></p><br>
        <p><input type="text" id="tm" name="tm" placeholder="Time" value="<?php if(isset($_POST['submit']))echo $_POST['tm'];?>" required></input></p><br>
        <p><label>Select your Qualification</label><select  id="class1" name="class1"> <option>10th</option><option>12th</option><option>B.E/Btech</option></select></input></p><br>
        <BR><p style="text-align:center" id="btn"><span></span><input type="submit" name="submit" Value="Register" required></input></span></p>
    </form>
</div>
</body>
</html>