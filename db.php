<?php
$host="localhost";
$user="root";
$pass="";
$databse="quiz";

//$con=mysql_connect($host,$user,$pass,$databse);
$con=mysqli_connect('localhost','root','admin','quiz');
if (!$con)
{
	die("Connection Failed:".mysqli_connect_error());
}
else
{
	echo "<script type='text/javascript'></script>";
	
}


?>