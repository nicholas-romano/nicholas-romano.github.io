<?php

  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    //var_dump($_POST);

    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptcha_secret = '6LdZh6IUAAAAAGF57BXqYCZ4qihOz1CGUJEQZLOI';
    $recaptcha_response = $_POST['recaptcha_response'];

    $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);

    $recaptcha = json_decode($recaptcha);

    if ($recaptcha->success==true) {

      if ($recaptcha->score >= 0.5) {

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
        ?>
        <h2>Thank you, <?php echo $name ?>.</h2>
                      <p>Your message has been sent. I will reply to your message with the email you provided as soon as I can.</p>
                      <p><a href="/">Go back to Stylin' Digital Designs home page.</a></p>
        <?php


      }
      else {
        //print_r($recaptcha);
        header('Location: contact.html');
      }

    }
    else {
      //print_r($recaptcha);
        header('Location: contact.html');
    }

  }
  else {
    //print_r($recaptcha);
    header('Location: contact.html');
  }

?>
