
(function ($) {
	"use strict";
		
		// Home Slider 
		$('.slider-content').owlCarousel({
			loop:true,
			nav:true,
			dots:true,
			mouseDrag:false,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			autoplay:false,
			autoplayTimeout:5000,
			navSpeed:800,
			autoplaySpeed:800,
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
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
			
		// Main Menu responsive
		$('.main-menu nav').meanmenu({
				meanScreenWidth: "991",
				meanMenuContainer: '.mobile-menu',
				meanMenuOpen: '<i class="fa fa-bars"></i>',
				meanMenuClose: '<i class="pe-7s-close meanbar-close"></i>'
			}); 
			
				
		//Dropdown Menu effect
		jQuery(document).ready(function($){
		   
		   // Menu sticky
		//    $(window).on('scroll',function() {    
		// 	   var scroll = $(window).scrollTop();
		// 	   if (scroll < 20) {
		// 		$("#sticky-header").removeClass("sticky-menu");
		// 	   }else{
				$("#sticky-header").addClass("sticky-menu");
		// 	   }
		// 	});
					
			
			// Scroll To Top
			$("#toTop").scrollToTop(600);
		
		   
		});

		// Preloader
		var overlay = document.getElementById("overlay");
			window.addEventListener('load', function(){
				var overlayNeg = document.getElementsByClassName("overlay-neg");
				while (overlayNeg.length)
					overlayNeg[0].classList.remove("overlay-neg");
				overlay.style.display = 'none';
		});

	
	
		// Portfolio Area
		$('.grid').imagesLoaded( function() {
			
			// init Isotope
			var $grid = $('.grid').isotope({
			  itemSelector: '.grid-item',
			  percentPosition: true,
			  masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: 1
			  }
			})

			// filter items on button click
			$('.portfolio-menu').on( 'click', 'button', function() {
			  var filterValue = $(this).attr('data-filter');
			  $grid.isotope({ filter: filterValue });
			}); 

			$('.portfolio-menu button').on('click', function(event) {
				$(this).siblings('.active').removeClass('active');
				$(this).addClass('active');
				event.preventDefault();
			});
			
		});	
	
	
		// Magnific Popup Images
		$('.pop-image').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			gallery:{
			  enabled:true
			}
		});
		
		
		 //Magnific Popup Images
		$('.pop-video').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			gallery:{
			  enabled:false
			}
		});
	
	
	
		//Accordion
		$('.accordion > li:eq(0) a').addClass('active').next().slideDown();

		$('.accordion a').on( 'click',function(j) {
			var dropDown = $(this).closest('li').find('p');

			$(this).closest('.accordion').find('p').not(dropDown).slideUp();

			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(this).closest('.accordion').find('a.active').removeClass('active');
				$(this).addClass('active');
			}

			dropDown.stop(false, true).slideToggle();

			j.preventDefault();
		});

    
	   // Blog slider
		$('.blog-slider').owlCarousel({
			loop:true,
			margin:40,
			autoplay:true,
			autoplayTimeout:5000,
			navSpeed:800,
			autoplaySpeed:2000,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:2
				}
			}
		});
		
	   // Blog slider 3
		$('.blog-slider-3').owlCarousel({
			loop:true,
			autoplay:true,
			autoplayTimeout:5000,
			navSpeed:800,
			autoplaySpeed:2000,
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
		
	   // Instagram feed slider
		$('.insta-items').owlCarousel({
			loop:true,
			margin:15,
			autoplay:true,
			autoplayTimeout:3000,
			navSpeed:800,
			autoplaySpeed:1000,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:4
				},
				1000:{
					items:6
				}
			}
		});
		
	   // Related Work
		$('.related-work-item').owlCarousel({
			loop:true,
			margin:40,
			autoplay:true,
			autoplayTimeout:3000,
			navSpeed:800,
			autoplaySpeed:1000,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:3
				}
			}
		});
	
	
	 
}(jQuery));	




