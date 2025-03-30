$(document).ready(function(){
    $("#contactform").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            number: {
                required: true,
                pattern: /^\+356\s\d{4}\s\d{4}$/
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address",
            contact: "Format: +356 #### ####",
            message: "Message must be at least 10 characters"
        },
        submithandler: function () {
            alert("Thank you! Your message has been sent.")
        }
    });
});



