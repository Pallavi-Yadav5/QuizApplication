<?php
include "db.php";

if(isset($_POST['Submit']))
{

$username=$_POST['uname'];
$password=$_POST['pass'];

$query="SELECT Pass FROM `cre_acc` WHERE `Email` = '$username'";
$rs = mysqli_query($con,$query);
		while($row=mysqli_fetch_array($rs))
		{
			 $db_pass=$row['Pass'];				
		}

if($db_pass == $password)
{
		session_id('ty');
		session_start();
		$_SESSION['Email']=$username;	
		echo '<script type="text/javascript">'; 
    
		echo 'alert("Login Success!");';  
        echo 'window.location.href = "register.php";';
        echo '</script>';
}
else
{
  	echo '<script type="text/javascript">'; 
		echo 'alert("Login Failed!");'; 
		echo '</script>';
}
}

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login.css">
    <title>Login Form</title>
    
</head>
<body>
<div class="container">
    <form method="post">
    <br><br><H3><span>Login</span></H3>
    <center><table style="width: 261px; height: 129px; border: 0; background-color: black; color: white;">
        <tr>
        <td>Username</td>&nbsp;&nbsp;&nbsp;
        <td><input name="uname" type="text" id="uname" placeholder="Email" required /></td>
        </tr>
        <tr>
        <td>Password</td>&nbsp;&nbsp;&nbsp;
        <td><input name="pass" type="password" id="pass"  placeholder="Password" required/></td>
        </tr><br>
        <tr>
        <td colspan="2"><div align="center">
            <input type="submit" name="Submit" value="Login" />
        </div></td>
        </tr>
    </table>
    </center><br><br>
    <p class="text-center text-white mt-5 mb-0"><h5 style="text-align:center; color: white;">Dont have an account? <a href="index.php" class="fw-bold text-body "><u class="text-warning">Create here</u></a></p>     
</form>
</div>
</body>
</html>