// Custom.JS all custom JS goes in here to extend jQuery and bootstrap.js


$(document).ready(function() {					// $(document).ready you need this. when document is ready then do
												// whatever is in the function(){}
	$('.wrap_mouseover').mouseover(function(){
		$(this).find('.image-overlay').show();
	}).mouseout(function(){
		$(this).find('.image-overlay').hide();
	});
});
