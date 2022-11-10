<?php

header('Access-Control-Allow-Origin: *');

// Check for empty fields
if(empty($_POST['farmers'])      ||
   empty($_POST['name'])    ||
   empty($_POST['email'])    ||
   empty($_POST['phone'])     ||
   empty($_POST['location'])  ||
   empty($_POST['farmname'])  ||
   empty($_POST['plotsize'])  ||
   empty($_POST['farmowner'])  ||
   empty($_POST['additional'])  ||
   count($_POST['crops[]']) < 0  ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }

$farmer = $_POST['farmers'];
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$location = strip_tags(htmlspecialchars($_POST['location']));
$farmname = strip_tags(htmlspecialchars($_POST['farmname']));
$plotsize = strip_tags(htmlspecialchars($_POST['plotsize']));
$farmowner = strip_tags(htmlspecialchars($_POST['farmowner']));
$additional = strip_tags(htmlspecialchars($_POST['additional']));

$selectedCrops = implode(' | ', $_POST['crops']);

   
// Create the email and send the message
$to = 'kmkansi@paperinstrument.com'; 
$email_subject = "Website's Expression of Interest Form:  $farmer";
$email_body = "You have received a new message from your Website's Expression of Interest Form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nLocation: $location\n\nFarm Name: $farmname\n\nPlot Size: $plotsize\n\nFarm Owner's Name: $farmowner\n\nAdditional Message: $additional\n\n\n\nSelected Crops: $selectedCrops\n\n";

$headers = "From: kmkansi@paperinstrument\n";

$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>
