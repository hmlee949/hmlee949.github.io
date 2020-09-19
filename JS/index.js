// modified from https://codepen.io/seanburke/pen/gMLeOX

function parallaxFade() {
	scrollPos = $(this).scrollTop();
	$('.jumbotron').css({
		'background-position' : '50% ' + (-scrollPos/4)+"px"
    });
    $('.jumboText').css({
		'opacity': 1-(scrollPos/100)
	});
}

$(document).ready(function(){
	$(window).scroll(function() {
		parallaxFade();
	});
});