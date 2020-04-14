$(function(){

    $("#contact_form #name").blur(function() {
        var name = $(this).val();

        if (name === ""){
            $(".name_error").show();
        }
        else {
            $(".name_error").hide();
            var pass = name.search(/^['-\w\.]+['-\w\s\.]+$/);
            if (pass === 0){ //name field is valid
                $(".name_valid_error").hide();
                $(".name_error").hide();
            }
            else { //name field is invalid
                $(".name_valid_error").show();

            }
        }
    });

    $("#contact_form #company").blur(function() {
        var company = $(this).val();

        if (company === "") { //If field is empty, hide error
            $(".company_valid_error").hide();
        }
        else {
            var pass = company.search(/^['-\w\.]+['-\w\s\.]+$/);
            if (pass === 0){ //company field is valid
                $(".company_valid_error").hide();

            }
            else { //company field is invalid
                $(".company_valid_error").show();

            }
        }
    });

    $("#contact_form #email").blur(function() {
        var email = $(this).val();

        if (email === ""){
            $(".email_error").show();
        }
        else {
            $(".email_error").hide();
            var pass = email.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/);
            if (pass === 0){ //email field is valid
                $(".email_valid_error").hide();
                $(".email_error").hide();
            }
            else { //email field is invalid
                $(".email_valid_error").show();

            }
        }
    });

    $("#contact_form #phone1").keyup(function() {
        var phone1 = $("#contact_form #phone1").val();

        if (phone1.length === 3) {
            $("#contact_form #phone2").focus();
        };

        var pass1 = phone1.search(/^\d{1,3}$/);

        if (pass1 !== 0){ //if phone field is invalid, remove character:
                $("#contact_form #phone1").val("");
            }
    });

    $("#contact_form #phone2").keyup(function() {
        var phone2 = $("#contact_form #phone2").val();

        if (phone2.length === 3) {
            $("#contact_form #phone3").focus();
        };

        var pass2 = phone2.search(/^\d{1,3}$/);

        if (pass2 !== 0) { //if phone field is invalid, remove character:
                $("#contact_form #phone2").val("");
            }
    });

    $("#contact_form #phone3").keyup(function() {
        var phone3 = $("#contact_form #phone3").val();

            if (phone3.length === 4) {
                $("#contact_form #message").focus();
            };

            var pass3 = phone3.search(/^\d{1,4}$/);

            if (pass3 !== 0) { //if phone field is invalid, remove character:
                $("#contact_form #phone3").val("");
            }
    });

    $("#contact_form #message").blur(function() {
        var message = $("#contact_form #message").val();


        if (message === "") { //If field is empty, show error
            $(".message_error").show();
        }
        else {
            var pass = message.search(/^['-\w\.$!\d,?/@();]+['-\w\s\.$!\d,?/@();]+$/);
            if (pass === 0){ //message field is valid
                $(".message_valid_error").hide();
                $(".message_error").hide();
            }
            else { //message field is invalid
                $(".message_valid_error").show();
            }
        }
    });

});
