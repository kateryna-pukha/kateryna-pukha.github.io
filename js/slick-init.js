$(document).ready(function(){
    $('#slider-01').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:false,
		speed:750,
		autoplaySpeed:3000,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
    
    $('#slider-02').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:false,
		speed:750,
		autoplaySpeed:3000,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

