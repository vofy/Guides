// Dependencies: jQuery

$(document).ready(function(){
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	});
});
$(document).ready(function(){
	"use strict";
	$.easing.easeInOutExpo = function (x, t, b, c, d) {
		if (t===0) {return b;}
		if (t===d) {return b+c;}
		if ((t/=d/2) < 1) { return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		} else {
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
		}
	};
	
	$('a').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').animate({
            scrollTop: ($($ele.attr('href')).offset().top)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
});

window.location.hash = this.hash;
