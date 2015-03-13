// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$('.inactive').hover(function(){
	$(this).css("border-bottom", "1px solid #888;");
});

// rsvp login
function login() {

    // set hashword (what hash of (password + random hash) equals)
    var theHashword = "2879a3a3b23a9f5b9ead69529bb5f3c8";

    // enter doubles as submit click
    $(".content-password").keyup(function(event){
        if(event.keyCode == 13){
            $('#submit-password-button').click();
        }
    });

    // get user submitted password
    var password = document.getElementById("password").value;

    // if password is correct
    if (CryptoJS.MD5(password+"2aecc21ce57c973d624175017c3f4616")==theHashword){
		// open new window
        window.open('rsvp'+ CryptoJS.MD5(password) +'.html', 'rsvp!', '_blank');
    }
    // if incorrect password
    else {
        $('#incorrect-password-message').replaceWith("<span class="+"incorrect-pw-msg panel"+">Incorrect password,  please try again!</span>");
        $('form').get(0).reset();
    }
}