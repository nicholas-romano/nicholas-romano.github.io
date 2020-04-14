
$(function() {
  //Turn on the click event when the page loads:
  $('.expandable').on('click', expandImage);

  //When the close button is clicked, remove the image:
  $('#content-body').on( 'click', '#imgOverlayContainer', '#close',  function() {
    //remove the overlay image:
    $('#imgOverlayContainer').remove();
    //Turn on the click event when the full image is closed:
    $('.expandable').on('click', expandImage);
  });
});

function expandImage() {
  //Center full size image on the page by finding the scroll amount:
  var scrollAmt = window.pageYOffset;

  //Center the image by subtracting 200px:
  var position = scrollAmt - 200;
  //Store class name, src, and alt in variables:
  var imgClass = $(this).attr('class');
  var imgSrc = $(this).attr('src');
  var imgAlt = $(this).attr('alt');

  //remove thumb.jpg from the original image and concatenate full.jpg:
  var res = imgSrc.split("thumb.jpg", 1);
  var largeImg = res + "full.jpg"

  //Add the variables to the new image overlay and add the image to the window:
  $(this).parent().parent().before('<div id="imgOverlayContainer" class="col-sm-12" style="position: absolute; top: ' + position + 'px; left: 0;"><button id="close">Close</button><h3>' + imgAlt + '</h3><img id="imgOverlay" class="' + imgClass + '" src="' + largeImg + '" alt="' + imgAlt + '" /></div>');

  //Turn off the click event when the image is expanded:
  $('.expandable').off('click', expandImage);
}
