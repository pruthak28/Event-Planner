$(document).ready(function(){
	$('label[for=pseudonym_session_unique_id_forgot]').html('Email address');

	// Hide delete and reset buttons on course settings page for non-admins
	if (/^\/courses\/[0-9]+\/settings$/.test(window.location.pathname)) {
		if($.inArray('admin',ENV.current_user_roles) == -1){
			$('a[href*=\'confirm_action?event=delete\']').hide();
			//$('a[href*=\'/reset\']').hide();
		}
	}
});

var forgot_password_instructions = "Enter your Email address and we'll send you a link to change your password."
document.getElementById("forgot_password_instructions").innerHTML = forgot_password_instructions;
//document.getElementsByTagName("label")[2].firstChild.data = "Email address";