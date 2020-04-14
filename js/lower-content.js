$(function() {

  $(".navbar-toggler-icon").on('click', function() {

    if ($(".navbar-collapse.collapse").hasClass("show")) {
      $("main").css("padding-top", "182px");
    }
    else {
      $("main").css("padding-top", "356px");
    }

  })

  $(window).resize(function() {
    // This will execute whenever the window is resized
    var banner_height = $("header").css("height");

    if (banner_height == '182px') {
        $("main").css("padding-top", "182px");
    }
    else {
        $("main").css("padding-top", "356px");
    }
  });

});
