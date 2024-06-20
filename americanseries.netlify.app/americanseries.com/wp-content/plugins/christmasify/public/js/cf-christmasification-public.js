(function( $ ) {
	'use strict';

	$.fn.christmasify = function(options) {
		var settings = $.extend({
      snowflakes: true,
      santa: true,
      font: true,
      music: false,
      image_frame: false
    }, options );

 		if(settings.snowflakes){
 			$('body').append('<div id="snowflakes"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>');
 		}
 		if(settings.music){
			$('body').append('<audio id="christmas-music" controls autoplay><source src="' + settings.music + '" type="audio/mpeg">Your browser does not support the audio element.</audio>');
 			$('#christmas-music')[0].volume = .2;
 		}

 		if(settings.santa){
 			$('body').append('<div id="santa" class="sleigh-1"></div>');
 		}

 		if(settings.font){
 			$('body').append('<link href="https://fonts.googleapis.com/css?family=Mountains+of+Christmas:700" rel="stylesheet">');
 			$('h1, h2, h3').each(function(i, heading){
 				console.log(heading);
 				$(heading).css('font-family', "'Mountains of Christmas', cursive");
 				$(heading).css('font-weight', "700");
 			});
 		}

 		if(settings.image_frame){
	 		$('img').each(function(i, image){
	 			$(image).load(function(){
		 			if($(image).width() > 240 && (!$(image).hasClass('alignright') || !$(image).hasClass('alignleft'))){
		 				$(image).wrap('<div class="christmas-frame"></div');
		 			}
	 			}).each(function() {
			  if(image.complete) $(image).load();
			});
	 		});
	 	}
	};

})( jQuery );
