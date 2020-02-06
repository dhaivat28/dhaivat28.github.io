<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

$message = '<html><body>';
// $message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
// $message .= "<tr style='background: #eee;'><td><strong>First Name:</strong> </td><td>" . strip_tags($_POST['first_name']) . "</td></tr>";
// $message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
// $message .= "<tr><td><strong>Phone:</strong> </td><td>" . strip_tags($_POST['phone']) . "</td></tr>";
// $message .= "<tr><td><strong> Who are you seeking care for ? </strong> </td><td>" . implode(', ', $_POST['services_care_1']) . "</td></tr>";
// $message .= "<tr><td><strong>Which Care Services are Required  ? </strong> </td><td>" . implode(', ', $_POST['services_care_2']) ."</td></tr>";
// $message .= "<tr><td><strong>Which Care Services are Required  ? </strong> </td><td>" . implode(', ', $_POST['services_care_3']) ."</td></tr>";
// $message .= "<tr><td><strong> Care Hours </strong> </td><td>".strip_tags($_POST['care_hours'])."</td></tr>";
// $message .= "<tr><td><strong> Care Week</strong> </td><td>".strip_tags($_POST['care_week'])."</td></tr>";
// $message .= "<tr><td><strong> Desired Start Date ?</strong> </td><td>"  . strip_tags($_POST['desired_date']) . "</td></tr>";
// $message .= "<tr><td><strong> Question / Comment</strong> </td><td>"  . strip_tags($_POST['question']) ."</td></tr>";
// $message .= "</table>";
$message .= "Hello";
$message .= "</body></html>";

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    //Enable to see Debug Info
    $mail->SMTPDebug = SMTP::DEBUG_SERVER; 
   //  $mail->SMTPDebug = 0;                 
    //$mail->isSMTP();                                            // Send using SMTP
    $mail->Host = 'smtp.gmail.com';                   // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'aspironwebmailer';                     // SMTP username
    $mail->Password   = 'mailer123';                               // SMTP password
    $mail->SMTPSecure = 'tls';                                // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 587;                                    // TCP port to connect to

    // Sender's Email Address
    $mail->setFrom('aspironwebmailer@gmail.com');

    // Add a recipient
    $mail->addAddress('dhaivat28@gmail.com');


    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Service Inquiry Form';
    $mail->Body    = $message;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent.';
} catch (Exception $e) {
   echo 'Message could not be sent';
   echo 'Mailer Error: ' . $mail->ErrorInfo;
   exit;
}
?>