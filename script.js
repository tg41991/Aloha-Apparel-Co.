
$(function() {
	$('.bxslider').bxSlider({
		speed: 500,
		controls: false,
		auto: true,
		minSlides: 1,
		maxSlides: 4,
		slideMargin: 0
	});

	$(':submit').click(function(event) {
		var inputText = $('#email').val();
		if (inputText.length !== 0) {
		alert('Thanks for subscribing!');
		} else {
			alert('Please add a valid email address.');
		}
	});
});
