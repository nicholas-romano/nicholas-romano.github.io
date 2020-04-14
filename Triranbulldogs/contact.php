<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Contact Us</title>

<script src="js/jquery-3.2.1.min.js"></script>
<script src="bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<script src="js/custom.js"></script>
<script src="js/validate_contact_form.js"></script>

<link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap.min.css">
<link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap-theme.min.css">
<link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah" rel="stylesheet">
<link rel="stylesheet" href="css/triran.css" >
<script src='https://www.google.com/recaptcha/api.js'></script>
<script>
		$(document).ready(function () {
				if(window.location.href.indexOf("contactretry") > -1) {
					 $('#reCaptcha_error').remove();
					 $("#contactretry").prepend('<p id="reCaptcha_error">reCaptcha entry was incorrect. Please try again.</p>');
				}
				else {
						$('#reCaptcha_error').remove();
				}

		});
</script>
</head>
<body>

	<!-- Banner -->
<?php include('common/banner.php') ?>
<!-- Navigation -->
<?php include('common/nav.php') ?>

<section class="content_container">
	<h1>Contact</h1>
	<div id="contactretry" class="anchorlink"></div>
   	<div class="form_heading">
    	<h4>Send us any requests, questions, comments, or concerns about our products and services by completing the form below.</h4>
    </div>
    <div class="form_body">

     <form class="form-horizontal" onsubmit="return validateContactForm()" action="sendContactForm.php" method="post">
      <div class="form-group">
        <label for="fname" class="col-sm-2 control-label">First Name:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="fname" name="fname" maxlength="60">
					<p class="error">Invalid input.</p>
        </div>
      </div>
      <div class="form-group">
        <label for="lname" class="col-sm-2 control-label">Last Name:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="lname" name="lname" maxlength="60">
					<p class="error">Invalid input.</p>
        </div>
      </div>
      <div class="form-group">
        <label for="email" class="col-sm-2 control-label">Email:</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="email" name="email" maxlength="60">
					<p class="error">Invalid input.</p>
        </div>
      </div>
      <div class="form-group">
        <label for="phone" class="col-sm-2 control-label">Phone:</label>
        <div class="col-sm-10">
        		<div class="phone1">
               <input type="text" class="form-control" id="phone1" name="phone1" maxlength="3" size="3">
							 <p class="error">Invalid input.</p>
            </div>
            <div class="phone2">
               <input type="text" class="form-control" id="phone2" name="phone2" maxlength="3" size="3">
							 <p class="error">Invalid input.</p>
            </div>
            <div class="phone3">
               <input style="width: 58px" type="text" class="form-control" id="phone3" name="phone3" maxlength="4" size="4">
							 <p class="error">Invalid input.</p>
            </div>
        </div>
      </div>
			<div class="form-group">
				<label for="message" class="col-sm-2 control-label">Message:</label>
				<div class="col-sm-10">
				   <textarea id="message" name="message" class="form-control" rows="10" cols="170" placeholder="Enter text here"></textarea>
						<p class="error">Invalid input.</p>
				</div>
			</div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <div class="checkbox">
            <label>
              <input id="subscribe" name="subscribe" type="checkbox" value="subscribe" checked> Join Mailing List (Your information is secure and you will not be spammed.)
							<p class="error">Invalid input.</p>
						</label>
          </div>
        </div>
      </div>
			<div class="form-group">
				<div class="col-sm-offset-2 col-sm-10">
					<div class="g-recaptcha" data-sitekey="6LfJ4G4UAAAAAM_A-J1bFOpeacMuvSjgA82AHEVa"></div>
				</div>
			</div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default">Send</button>
        </div>
      </div>
    </form>
   </div>
</section>
<!-- Footer -->
<?php include('common/footer.php') ?>

</body>
</html>
