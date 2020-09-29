//Search js
function openSearch() {
	document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
	document.getElementById("myOverlay").style.display = "none";
}

// Magnific popup
//video

// gallery
$('.view-image').magnificPopup({
  type: 'image',
  gallery:{
		enabled:true
	  }
});

//gallery-slider
	
//Mixitup
var containerEl = document.querySelector('.gallery-mixer');

var mixer = mixitup(containerEl);

// CounterUp js
jQuery(document).ready(function( $ ) {
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
});


// all jquery files 

(function($){

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
    
    $('.gallery-slider').owlCarousel({
			loop:true,
			margin:0,
			navText:['<i class="far fa-arrow-alt-circle-left"></i>','<i class="far fa-arrow-alt-circle-right"></i>'],
			nav:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				1000:{
					items:4
				}
			}
		});
    
	var scroll = new SmoothScroll('a[href*="#"]:not([data-easing])');

	// 

	$('.team-slider').owlCarousel({
		loop:true,
		margin:25,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:3
			}
		}
	});

	
	// brand slider 
	  $('.brand-slider').owlCarousel({
		loop:true,
		autoplay:true,
		margin:50,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});


	// vertical carousel 
    $(".consvcarousel").verticalCarousel({
		currentItem: 1,
	    showItems: 1
	});

	// testimonial slider \

	 $('.testimonials-slider').owlCarousel({
		loop:true,
		autoplay:true,
		margin:0,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
    
    
   

})(jQuery)