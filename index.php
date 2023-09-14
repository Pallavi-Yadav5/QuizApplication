<?php
include "db.php";
if(isset($_POST['submit']))
{
    $email=$_POST['email'];
    $cn=$_POST['cn'];
    $pass=$_POST['pass'];
    
    
    $query="INSERT INTO `cre_acc`(`Email`, `PhNo`, `Pass`) VALUES ('$email','$cn','$pass')";
		//$resultset=mysqli_query($con,$query);
		if ($con->query($query) === TRUE)
		{
			echo "<script type='text/javascript'>alert('Account Created Successfully!');</script>";
           
		}
		else 
		{
			echo "<script type='text/javascript'>alert('Error during insertion!');</script>";	
		}	
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <title>Quiz Application</title>
    <link rel="stylesheet" href="index11.css">
</head>
<body>
    <ul>
        <li><a class ="active" href="index.php" ><b>Home</b></a></li>
        <li><a href="About.html"><b>About</b></a></li>
        <li><a href="register.php"><b>Courses</b></a></li>
        <li style="float:right"><a href="logout.php"><b>Logout</b></a></li>
    </ul> 
<div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
            <img src="home.jpg" id="log2">
        </div>
    </div>
</div>

<div class="col-sm-6" id="log3">
      <div class="card-9">
        <div class="card-body">
               <form method="post">
               <br><br><H3><span>Create Account</span></H3>
                <p><input type="email" id="email" name="email" placeholder="Email address" value="<?php if(isset($_POST['submit']))echo $_POST['email'];?>" required></input></p><br>
                <p><input type="text" id="cn" name="cn" placeholder="Phone number" maxlength="10" value="<?php if(isset($_POST['submit']))echo $_POST['cn'];?>" required></input></p><br>
                <p><input type="password" id="pass" name="pass" placeholder="Create Password" value="<?php if(isset($_POST['submit']))echo $_POST['pass'];?>" required></input></p><br>
                <p style="text-align:center"><span><input type="submit" name="submit" class="log5" Value="Create Account" required></input></span></p>
                <br><h5 style="text-align:center; color: white;">Have an Account? <span><a href="login.php">Log in</span> </h5></a>
               </form>
           </div>
        </div>
    </div>
</div>
</body>
</html>