<?php
  $name = strip_tags(htmlspecialchars($_POST['namecontact']));
  $email_address = strip_tags(htmlspecialchars($_POST['emailcontact']));
  $phone = strip_tags(htmlspecialchars($_POST['phonecontact']));
  $location = strip_tags(htmlspecialchars($_POST['locationcontact']));
  $services = strip_tags(htmlspecialchars($_POST['servicescontact']));
  $additional = strip_tags(htmlspecialchars($_POST['additionalcontact']));
 

  if(!empty($email_address) && !empty($additional)){
    if(filter_var($email_address, FILTER_VALIDATE_EMAIL)){
      $receiver = "kmkansi@paperinstrument.com"; //enter that email address where you want to receive all messages
      $subject = "From: $name <$email_address>";
      $body = "You have received a new message from your Website's Expression of Interest Form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nLocation: $location\n\nServices: $services\n\nAdditional Message: $additional\n\n\n";
      $sender = "From: $email_address";
      if(mail($receiver, $subject, $body, $sender)){
         echo "Your message has been sent";
      }else{
         echo "Sorry, failed to send your message!";
      }
    }else{
      echo "Enter a valid email address!";
    }
  }else{
    echo "Email and message field is required!";
  }
?>