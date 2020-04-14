function validateContactForm() {

  var form_valid = true;

  $('.form-control').each(function() {
    var id = $(this).attr("id");
    var value = $(this).val();
    var input = validateInput(id, value);

    if (input === 0) {
      //input is valid
      console.log(id + " with value " + value + " is valid.");
      $("#" + id).next().hide();
    }
    else if (input === -1) {
      //input is invalid
      console.log(id + " with value " + value + " is invalid.");
      $("#" + id).next().show();
      form_valid = false;
    }
  });

  return form_valid;

}

function validateInput(id, value) {

  var input = 0;
  switch (id) {
      case "fname":
      case "lname":
        input = value.search(/^['-\w]+['-\w\s]+$/);
    break;
      case "email":
        input = value.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/);
    break;
      case "phone1":
      case "phone2":
      case "phone3":
        input = value.search(/^[\d]+$/);
    break;
      case "message":
        input = value.search(/^((?![<>\{\}\]\[]).).*$/);
      break;
      default:
        return -1;
  }
  return input
}
