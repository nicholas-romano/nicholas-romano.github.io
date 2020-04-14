<?php

  if (isset($_POST['submit'])) {

    $recaptcha_secret = '6LccgekUAAAAAHEs8t9NqVoT8qCUsNBB7pdxn5B6';
    $recaptcha_response = $_POST['g-recaptcha-response'];
    $userIP = $_SERVER['REMOTE_ADDR'];

    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response . '&remoteip=' . $userIP;

    $response = file_get_contents($recaptcha_url);

    $response = json_decode($response);

    if ($response->success) {
      //Verification Successful

      //code here to handle a successful verification
      $name = htmlentities($_POST["name"]);
      $company = htmlentities($_POST["company"]);
      $email = htmlentities($_POST["email"]);
      $phone1 = htmlentities($_POST["phone1"]);
      $phone2 = htmlentities($_POST["phone2"]);
      $phone3 = htmlentities($_POST["phone3"]);
      $message = htmlentities($_POST["message"]);

      $phone_number = $phone1 . $phone2 . $phone3;

      if (strlen($phone_number) !== 10) {
          $complete_phone_number = "N/A" ;
      }
      else {
          $complete_phone_number = '(' . $phone1 . ') ' . $phone2 . '-' . $phone3;
      }

      if (strlen($company) < 1) {
          $company_name = "N/A";
      }
      else {
          $company_name = $company;
      }

      $headers = "MIME-Version: 1.0" . "\r\n";
      $headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";

      $to = "nromano@stylindigitaldesigns.com, $email";
      $subject = "Stylin' Digital Designs Site Message Sent";
      $mail_message = ('<h2>Thank you, ' . $name . '.</h2>' .
                  '<p>Your message has been sent. We will reply to your message with the email you provided as soon as we can.</p>' .
                  '<p>Here is your message summary: </p>'.
                  '<ul class="no_bullets">'.
                      '<li><b>Name:</b> ' . $name . '</li>'.
                      '<li><b>Company:</b> '. $company_name .'</li>'.
                      '<li><b>Phone:</b> ' . $complete_phone_number . '</li>'.
                      '<li><b>Message:</b> ' . $message . '</li>'.
                  '</ul>');

      mail($to, $subject, $mail_message, $headers);
      
      echo '<h2>Thank you,' . $name . '</h2>
              <p>Your message has been sent. I will reply to your message with the email you provided as soon as I can.</p>
              <p><a href="index.html">Go back to Stylin\' Digital Designs home page.</a></p>';

    }
    else {
      //Verification failed:
      header('Location: contact.html#retry');
    }

  }
  else {
    //form not submitted:
    header('Location: contact.html');
  }
  
?>
  


