<?php
  if (isset($_POST['g-recaptcha-response']) && $_POST['g-recaptcha-response']) {

    $secret = "6LfJ4G4UAAAAAAOP3Igkq5-blZgsw34o-m0bWKU_";
    $ip = $_SERVER['REMOTE_ADDR'];
    $captcha = $_POST['g-recaptcha-response'];
    $rsp = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$captcha&remoteip=$ip");

    $result = json_decode($rsp, TRUE);

    if ($result['success'] == 1) {

      if (isset($_POST['subscribe'])) {
        $subscribe = $_POST['subscribe'];
      }
      else {
        $subscribe = 'no subscribe';
      }

      //code here to handle a successful verification
      $fname = htmlentities($_POST["fname"]);
      $lname = htmlentities($_POST["lname"]);
      $email = htmlentities($_POST["email"]);
      $phone1 = htmlentities($_POST["phone1"]);
      $phone2 = htmlentities($_POST["phone2"]);
      $phone3 = htmlentities($_POST["phone3"]);
      $message = htmlentities($_POST["message"]);

      $complete_phone_number = '(' . $phone1 . ') ' . $phone2 . '-' . $phone3;

      $headers = "MIME-Version: 1.0" . "\r\n";
      $headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";

      $to = "rromano@triranbulldogs.com, $email";
      $subject = "Triran Bulldogs Message Sent";
      $mail_message = ('<h2>Thank you, ' . $fname . '.</h2>' .
                  '<p>Your message has been sent. We will respond to your message with the email you provided as soon as possible.</p>' .
                  '<p>Message summary:</p>'.
                  '<ul class="no_bullets">'.
                      '<li><b>Name: </b> ' . $fname . " " . $lname . '</li>'.
                      '<li><b>Email: </b> '. $email .'</li>'.
                      '<li><b>Phone: </b> ' . $complete_phone_number . '</li>'.
                      '<li><b>Message: </b> ' . $message . '</li>'.
                  '</ul>');


      mail($to, $subject, $mail_message, $headers);
      ?>
      <h2>Thank you, <?php echo $fname ?>.</h2>
                    <h4>Your message has been sent. We will respond to your message with the email you provided as soon as possible.</h4>
                    <p>Message Summary:</p>
                    <ul class="no_bullets">
                      <li>Name: <?php echo $fname . " " . $lname ?></li>
                      <li>Email: <?php echo $email ?></li>
                      <li>Phone: <?php echo $complete_phone_number ?></li>
                      <li>Message: <p><?php echo $message ?></p></li>
                      <li>Subscribe?: <?php echo $subscribe ?></li>
                    </ul>
                    <p><a href="index.php">Go back to TriranBulldogs home page.</a></p>
    <?php
    }
    else {
      header('Location: contact.php#contactretry');
    }
}
else {
  header('Location: contact.php#contactretry');
}
?>
