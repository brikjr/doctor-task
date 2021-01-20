(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);


//info
const details = document.querySelector('.details') ;
const popupBox = document.querySelector('.popup');
const closePopup = document.querySelector('.close');

details.addEventListener('click' , () =>{
	popupBox.classList.add('active');
	closePopup.addEventListener('click' , () =>{
		popupBox.classList.remove('active');
	})
})