// Custom.JS all custom JS goes in here to extend jQuery and bootstrap.js

$(function(){

	$('.wrap-mouseover').mouseover(function () {
		$('.image-overlay').show();
	}).mouseout(function () {
		$('.image-overlay').hide();
	});

});