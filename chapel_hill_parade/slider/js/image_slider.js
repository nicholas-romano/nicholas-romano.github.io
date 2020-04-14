$(document).ready(function () {

        var options = {

			$AutoPlay: 1,
      $Loop: 1,
      $SlideDuration: 1000

		};

        var jssor_slider1 = new $JssorSlider$('slides_container', options);

		//responsive code begin
        //remove responsive code if you don't want the slider scales
        //while window resizing

        function ScaleSlider() {
            var parentWidth = $('#slides_container').parent().width();
			console.log('container width' + parentWidth);
            if (parentWidth) {
                jssor_slider1.$ScaleWidth(parentWidth);

            }
            else
                window.setTimeout(ScaleSlider, 30);
        }
        //Scale slider after document ready
        ScaleSlider();


        //Scale slider while window load/resize/orientationchange.
        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
        //responsive code end

 });
