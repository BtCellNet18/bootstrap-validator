$(document).ready(function () {	
	// Get the form
	var form = $('#form');
	// Setup Icons and Field Validators
	$(form).bootstrapValidator({
		feedbackIcons: getIcons(),			
		fields: getFields(),
	});			
	// Validate
	$("#btnSubmit").click(function () {
		$(form).bootstrapValidator("validate");
	});		
	// Reset
	$("#btnReset").click(function () {
		$("input:checkbox").prop('checked', false);
		$('input[type="radio"]').prop('checked', false);
		$(form).data("bootstrapValidator").resetForm(true);
	});				
});	

function getIcons() {
	return {
		valid: 'glyphicon glyphicon-ok',
		invalid: 'glyphicon glyphicon-remove',
		validating: 'glyphicon glyphicon-refresh'
	};
}

function getFields() {
	return {	
		gender: {
			validators: {
				notEmpty: {
					message: "Gender is required"
				}
			}
		},		
		birthday: {
			validators: {
				notEmpty: {
					message: 'Birthday is required',
				}
			}
		},
		Language: {
			validators: {
				notEmpty: {
					message: 'Language is required',
				}
			}
		},					
		email: {
			validators: {
				notEmpty: {
					message: 'Email is required'
				},
				emailAddress: {
					message: 'Invalid email address'
				}
			}
		},			
		password: {
			validators: {
				notEmpty: {
					message: 'Password is required'
				},
				stringLength: {
					min: 8,
					message: 'Minimum of 8 characters'
				},
				identical: {
					field: 'confirm',
					message: "Password and confirm do not match"
				}						
			}
		},	
		confirm: {
			validators: {
				notEmpty: {
					message: 'Confirm is required'
				},
				stringLength: {
					min: 8,
					message: 'Minimum of 8 characters'
				},
				identical: {
					field: 'password',
					message: "Password and confirm do not match"
				}							
			}
		},				
		address: {
			validators: {
				notEmpty: {
					message: 'Address is required'
				},
				stringLength: {
					max: 200,
					message: 'Address must be less than 200 characters'
				}
			}
		},
		terms: {
			validators: {
			  notEmpty: {
				message: "Terms is required"
			  }
			}
		}						
	};
}