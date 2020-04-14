function validateContactForm() {

    var allCorrect = true;

    var name = $("#contact_form #name").val();
    var company = $("#contact_form #company").val();
    var email = $("#contact_form #email").val();
    var message = $("#contact_form #message").val();

    if(name === "") {
       $(".name_error").show();
       allCorrect = false;
    }
    else {
        $(".name_error").hide();
            var pass = name.search(/^['-\w]+['-\w\s]+$/);
            if (pass === 0){ //name field is valid
                $(".name_valid_error").hide();
                $(".name_error").hide();
            }
            else { //name field is invalid
                allCorrect = false;
            }
    }

    if (company === "") { //If field is empty, hide error
            $(".company_valid_error").hide();
        }
        else {
            var pass = company.search(/^['-\w]+['-\w\s]+$/);
            if (pass === 0){ //company field is valid
                $(".company_valid_error").hide();

            }
            else { //company field is invalid

                allCorrect = false;
            }
        }

    if(email === "") {
       $(".email_error").show();
       allCorrect = false;
    }
    else {
        $(".email_error").hide();
        var pass = email.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/);
            if (pass === 0){ //email field is valid
                $(".email_valid_error").hide();

            }
            else { //email field is invalid
                allCorrect = false;
            }
    }

    if(message === "") {
       $(".message_error").show();
       allCorrect = false;
    }
    else {
        $(".message_error").hide();
        var pass = message.search(/^['-\w\.$!\d,?/@();]+['-\w\s\.$!\d,?/@();]+$/);
            if (pass === 0){ //message field is valid
                $(".message_valid_error").hide();
                $(".message_error").hide();
            }
            else { //message field is invalid
                allCorrect = false;
            }
    }

    if(allCorrect === false) {
        return false;
    }
    else {
        return true;
    }
}
