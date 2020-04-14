<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Triran Bulldogs</title>

<script src="js/jquery-3.2.1.min.js"></script>
<script src="bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<script src="js/responsiveslides.js"></script>

<link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap.min.css">
<link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap-theme.min.css">
<link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">
<link rel="stylesheet" href="css/triran.css" >
<script>
  $(function() {
    $("#rslides").responsiveSlides({
      maxwidth: 1200,
      speed: 3000
    });
  });
</script>
</head>
<body>

<!-- Banner -->
<?php include('common/banner.php') ?>

<!-- Navigation -->
<?php include('common/nav.php') ?>

<h1 class="welcome-heading">Welcome to Triran Bulldogs</h1>

<section id="slideshow">
  <div id="slides_container">
    <ul id="rslides">
      <li><a href="available_puppies.html"><img u="image" src="images/slideshow/bulldog_running-group-slideshow.jpg" class="img-responsive" /></a></li>
      <li><a href="available_puppies.html#dot-bio"><img u="image" src="images/slideshow/dog_dot-slideshow.jpg" class="img-responsive" /></a></li>
      <li><a href="available_puppies.html#milesjr-bio"><img u="image" src="images/slideshow/dog_milesjr_2-slideshow.jpg" class="img-responsive" /></a></li>
      <li><a href="available_puppies.html"><img u="image" src="images/slideshow/bulldog-group-pool-slideshow.jpg" class="img-responsive" /></a></li>
      <li><a href="available_puppies.html#louie-bio"><img u="image" src="images/slideshow/dog_louie-slideshow.jpg" class="img-responsive" /></a></li>
      <li><a href="available_puppies.html"><img u="image" src="images/slideshow/two-bulldogs-blanket-slideshow.jpg" class="img-responsive" /></a></li>
      <li><a href="available_puppies.html#et-bio"><img u="image" src="images/slideshow/dog_et-slideshow.jpg" class="img-responsive" /></a></li>
      <li><a href="available_puppies.html"><img u="image" src="images/slideshow/two-bulldogs-sleeping-slideshow.jpg" class="img-responsive" /></a></li>
      <li><a href="available_puppies.html#twix-bio"><img u="image" src="images/slideshow/dog_twix-slideshow.jpg" class="img-responsive" /></a></li>
      <li><a href="available_puppies.html"><img u="image" src="images/slideshow/bulldog-pile-slideshow.jpg" class="img-responsive" /></a></li>
      <li><a href="available_puppies.html#po-bio"><img u="image" src="images/slideshow/dog_po-slideshow.jpg" class="img-responsive" /></a></li>
      <li><a href="available_puppies.html#nala-bio"><img u="image" src="images/slideshow/dog_nala-slideshow.jpg" class="img-responsive" /></a></li>
    </ul>
  </div>
</section>

<section class="intro">
	<p>We specialize in breeding the highest quality exotic English Bulldogs.
    The dogs we breed are selected with the best qualities in manor, physical appearance, cuteness and a variety
    of other factors. Every dog and puppy is loved and cared for in a happy home. The love and care we provide,
    gives our puppies the necessary qualities for their future families. All of our dogs are AKC registered with proper pedigrees. In addition, our dogs are updated with all their shots and deworming medications.</p>
	<p>If you are looking for an all-around perfect pet that everyone will adore, then take a look at our puppies for sale in the available puppies tab. These puppies are guaranteed to melt your heart with love and cuteness.
	</p>
</section>

<!--
<section class="content_container hide">

  <section class="summary">
  	<h1>Featured Videos</h1>
  	<p>Triran summary paragraph text. This text summarizes what Triran is and what it does.</p>
  </section>

  <div class="row">
    <div class="col-sm-6">
        <div class="video1">
            <h2>Video 1</h2>
        </div>
        <div class="col-sm-12">
        	<div class="caption">
                This is a caption.
            </div>
        </div>
     </div>
     <div class="col-sm-6">
        <div class="video2">
            <h2>Video 2</h2>
        </div>
        <div class="col-sm-12">
            <div class="caption">
                This is a caption.
            </div>
        </div>
     </div>
  </div>
</section>

</div>
-->
<!-- Footer -->
<div id="puppy-love-song">
  <h6>Puppy Love by Paul Anka</h6>
<audio controls autoplay loop>
  <source src="mp3/Puppy Love.m4a" type="audio/m4a">
  <p>Your browser doesn't support HTML5 audio.</p>
</audio>
</div>

<?php include('common/footer.php') ?>

</body>
</html>
