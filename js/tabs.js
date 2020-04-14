function changeTabs(project, id) {
  //console.log("project: " + project + " id: " + id);
  $('#' + project + ' .nav-item .nav-link').each(function () {
    $(this).removeClass('active');
  });

  $('#' + id).addClass('active');

  $('#' + project + '-content .tab-pane').each(function () {
    $(this).removeClass('show active');
  });

  $('#' + id + '-content').addClass('show active');
}
