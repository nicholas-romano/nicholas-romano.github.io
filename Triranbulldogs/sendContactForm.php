<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Contact Us</title>

<script src="js/jquery-3.2.1.min.js"></script>
<script src="bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>

<link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap.min.css">
<link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap-theme.min.css">
<link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah" rel="stylesheet">
<link rel="stylesheet" href="css/triran.css" >
</head>
<body>

<!-- Banner -->
<?php include('common/banner.php') ?>
<!-- Navigation -->
<?php include('common/nav.php') ?>

<section class="content_container">
  <div>
    <?php include('php/processContactForm.php'); ?>
  </div>
</section>

<!-- Footer -->
<?php include('common/footer.php') ?>

</body>
</html>
