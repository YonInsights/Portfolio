<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $fullname = $_POST['fullname'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'yo2120018@gmail.com'; // Change this to your email address
  $subject = 'Message from Contact Form';
  $body = "Name: $fullname\nEmail: $email\n\n$message";

  if (mail($to, $subject, $body)) {
    echo 'Message sent successfully!';
  } else {
    echo 'Message could not be sent. Please try again later.';
  }
}
?>
