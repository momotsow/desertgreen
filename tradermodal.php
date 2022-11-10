<!-- Contact Form in PHP -->
<?php
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

  if(!empty($email_address) && !empty($message)){
    if(filter_var($email_address, FILTER_VALIDATE_EMAIL)){
      $receiver = "kmkansi@paperinstrument.com"; //enter that email address where you want to receive all messages
      $subject = "From: $name <$email_address>";
      $body = "You have received a new message from your Website's Expression of Interest Form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nLocation: $location\n\nFarm Name: $farmname\n\nPlot Size: $plotsize\n\nFarm Owner's Name: $farmowner\n\nAdditional Message: $additional\n\n\n\nSelected Crops: $selectedCrops\n\n";
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