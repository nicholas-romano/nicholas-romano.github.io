<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Stud Services</title>

<script src="js/jquery-3.2.1.min.js"></script>
<script src="bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<script src="js/custom.js"></script>

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

<section class="summary">

  <div class="intro">
    <h1>Stud Services</h1>

  </div>
</section>

<section class="content_container">
  <div class="row">
    <div id="franky-bio" class="puppy_bio col-sm-6">
      <h3>Franky</h3>
      <p>Male - <span>Color - Black Tri</span></p>
      <p>Franky is a black-tri with a merley white spotted face. He has perfect bone structure and muscle tone with a ginormous head and has wrinkles galore. Franky is very chill and is great with kids. Birth date March 2017</p>
      <div class="photo-gallery">
        <div class="active-photo">
          <!-- Full-size Photo -->
          <img src="images/bulldogs/bios/full/Franky1_660w.jpg" class="img-responsive" alt="Franky" title="Franky" />
        </div>
        <!-- image thumbnails -->
        <ul class="gallery-thumbnails">
            <li><img src="images/bulldogs/bios/thumbnail/Franky1_150w.jpg" onclick="toggleSelect('franky-bio', 'Franky1_660w.jpg')" class="selected" alt="Franky" title="Franky" /></li>
            <li><img src="images/bulldogs/bios/thumbnail/Franky2_150w.jpg" onclick="toggleSelect('franky-bio', 'Franky2_660w.jpg')" class="not-selected" alt="Franky" title="Franky" /></li>
            <li><img src="images/bulldogs/bios/thumbnail/Franky3_150w.jpg" onclick="toggleSelect('franky-bio', 'Franky3_660w.jpg')" class="not-selected" alt="Franky" title="Franky" /></li>
        </ul>
      </div>
    </div>
    <div id="miles-bio" class="puppy_bio col-sm-6">
      <h3>Miles</h3>
      <p>Male - <span>Color - Blue Tri</span></p>
      <p>Miles is a blue-tri and has been successful in large litters to our females. He is a dominate carrier for all color tris. Miles has a very good temperament and is loyal. Birth Date Mar 2017.</p><br>
      <div class="photo-gallery">
        <div class="active-photo">
          <!-- Full-size Photo -->
          <img src="images/bulldogs/bios/full/Miles1_660w.jpg" class="img-responsive" alt="Miles" title="Miles" />
        </div>
        <!-- image thumbnails -->
        <ul class="gallery-thumbnails">
            <li><img src="images/bulldogs/bios/thumbnail/Miles1_150w.jpg" onclick="toggleSelect('miles-bio', 'Miles1_660w.jpg')" class="selected" alt="Miles" title="Miles" /></li>
            <li><img src="images/bulldogs/bios/thumbnail/Miles2_150w.jpg" onclick="toggleSelect('miles-bio', 'Miles2_660w.jpg')" class="not-selected" alt="Miles" title="Miles" /></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="row">
    <div id="louie-bio" class="puppy_bio col-sm-6">
      <h3>Louie</h3>
      <p>Male - <span>Color - Fawn and White</span></p>
      <p>Louie is fawn and white. He is a lilac and blue carrier and has green eyes. His parents are exotic colors as well. He's extremely smart and affectionate. Birth date March 2017.</p>
      <div class="photo-gallery">
        <div class="active-photo">
          <!-- Full-size Photo -->
          <img src="images/bulldogs/bios/full/Louie1_660w.jpg" class="img-responsive" alt="Louie" title="Louie" />
        </div>
        <!-- image thumbnails -->
        <ul class="gallery-thumbnails">
            <li><img src="images/bulldogs/bios/thumbnail/Louie1_150w.jpg" onclick="toggleSelect('louie-bio', 'Louie1_660w.jpg')" class="selected" alt="Louie" title="Louie" /></li>
            <li><img src="images/bulldogs/bios/thumbnail/Louie2_150w.jpg" onclick="toggleSelect('louie-bio', 'Louie2_660w.jpg')" class="not-selected" alt="Louie" title="Louie" /></li>
            <li><img src="images/bulldogs/bios/thumbnail/Louie3_150w.jpg" onclick="toggleSelect('louie-bio', 'Louie3_660w.jpg')" class="not-selected" alt="Louie" title="Louie" /></li>
        </ul>
      </div>
    </div>
  </div>
</section>
<!-- Footer -->
<?php include('common/footer.php') ?>

</body>
</html>
