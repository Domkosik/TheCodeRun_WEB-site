(function($){

//>
//--------------------------------------FORM validation!!-------------------
//

var email = $("#email");
	password = $("#psw");
    pswRepeat = $("#psw-repeat");
    submitBtn = $(".btn-reg");
	form = $("form");
	
//❗funkcia na overenie emailu❗
function emailValidation(){
	var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		emailVal = email.val();
    if(reg.test(emailVal)){
		return true;
	}
	else{
		return false;
	}
}

//❗overovanie emailu beží pri písaní emailu❗
email.keyup(function(){
    if(emailValidation()) {
		$("#emailMsgVal").css({"display": "block", "color": "#09ca09"});
		form.find("#emailMsgInval").css({"display": "none"});
    }
    else {
		$("#emailMsgInval").css({"display": "block", "color": "red"});
		form.find("#emailMsgVal").css({"display": "none"});
    }
});

//❗funkcia na overenie dĺžky hesla❗
function passwordValidation(){
	var passwordVal = password.val();
    if(passwordVal.length >= 7){
		return true;
	}
	else{
		return false;
	}
}

//❗overovanie dĺžky hesla pri jeho zadávaní❗
password.keyup(function(){
    if(passwordValidation() ) {
		$("#passwordMsgVal").css({"display": "block", "color": "#09ca09"});
		form.find("#passwordMsgInval").css({"display": "none"});
    }
    else {
		$("#passwordMsgInval").css({"display": "block", "color": "red"});
		form.find("#passwordMsgVal").css({"display": "none"});
    }
});

//❗overenie zhodnosti opakovaného hesla so zadaním heslom❗

// -->kontrola zhodnosti pri písaní hesla
pswRepeat.keyup(function(){
	if(password.val() == pswRepeat.val()){
		$("#passwordRMsgVal").css({"display": "block", "color": "#09ca09"});
		form.find("#passwordRMsgInval").css({"display": "none"});
	}
	else {
		$("#passwordRMsgInval").css({"display": "block", "color": "red"});
		form.find("#passwordRMsgVal").css({"display": "none"});
	}
})

// --> kontrola zhodnosti pri písaní opakovaného hesla
password.keyup(function(){
	if(password.val() == pswRepeat.val()){
		$("#passwordRMsgVal").css({"display": "block", "color": "#09ca09"});
		form.find("#passwordRMsgInval").css({"display": "none"});
	}
	else {
		$("#passwordRMsgInval").css({"display": "block", "color": "red"});
		form.find("#passwordRMsgVal").css({"display": "none"});
	}
})

//❗funkcia na potvrdenie formuláru❗ ale len ak sú polia vyplnené správne 8-)

form.submit(function(event){
	if ( $("#emailMsgVal").is(":visible") && $("#passwordMsgVal").is(":visible") && $("#passwordRMsgVal").is(":visible")) {
		form.submit();
	}
	else {
		alert("Form is not valid.");
	}
	event.preventDefault();
})

//>
//-----------------------------------------THREE-BAR_MENU_Trigger--------------------------
//

$(".fa-bars").click(function(){
    $("nav ul").toggleClass("bar-menu");
});


})(jQuery);