<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Contact Form Submission</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="css/sdd-styles.css" />

</head>
<body>
  <header>
    <h1>Stylin' Digital Designs</h1>
      <div id="banner">

        <!-- Navigation -->
        <nav class="navbar navbar-expand-md">
          <a class="navbar-brand" href="#"><img src="images/SDD-Logo.png" /></a>
          <button class="navbar-toggler navbar-light bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="skills.html">Skills</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Portfolio
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="index.html#applications">Web Applications</a>
                  <a class="dropdown-item" href="index.html#webpage-designs">Webpage Designs</a>
                  <a class="dropdown-item" href="index.html#mobile-app-design">Mobile App Designs</a>
                  <a class="dropdown-item" href="index.html#websites">Websites</a>
                  <a class="dropdown-item" href="index.html#games">Games</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </nav>

      </div>
  </header>
    <main>
      <section class="main_category contact">
            <div class="message_sent_confirmation">
                <?php include('php/processContactFormData.php'); ?>
            </div>

        <footer>
            <p>&copy; 2017 Stylin Digital Designs | Designed and Developed by Nicholas Romano | Raleigh, NC</p>
        </footer>

      </section>
    </main>

</body>
</html>
