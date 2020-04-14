function toggleSelect(id, img) {
  //console.log("id: " + id + " img: " + img);
  $('#' + id + ' .photo-gallery .gallery-thumbnails li').on('click', '.not-selected', function() {
    //remove all selected thumbnails:
    $('#' + id + ' .photo-gallery .gallery-thumbnails li .selected').each(function () {
      $(this).addClass("not-selected");
      $(this).removeClass("selected");
    });
    //remove not-selected class from clicked one and add selected class:
    $(this).removeClass("not-selected");
    $(this).addClass("selected");

    //Swap active photo with new one:
    $('#' + id + ' .photo-gallery .active-photo img').attr('src', 'images/bulldogs/bios/full/' + img);

  });

}
