$(document).ready(function() {
	try {
		$('.water').ripples({
			resolution: 256,
			perturbance: 0.02
		});
	}
	catch (e) {
		$('.error').show().text(e);
	}
});