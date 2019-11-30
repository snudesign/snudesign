$(document).ready(function(){




	/*  Hamburger Menu & Icon  */

	$('.logo').on('click', function(e){
		location.href= 'home.html';
		console.log("home");

	});

	$('.hamburger').on('click', function(e){
		console.log("test");
		e.preventDefault(); // 클릭이벤트 외에 행동 막음
		$(this).toggleClass('opened');
		$('header nav').toggleClass('active');
	});


	$('.menu').on('click', function(e){
		e.preventDefault(); // 클릭이벤트 외에 행동 막음
		console.log("menu");
	});

	$('.submenu').on('click', function(e){
		e.preventDefault(); // 클릭이벤트 외에 행동 막음
		console.log("sub");
	});

	/*  Advanced search form & Icon  */
	$('#advanced_search_btn').on("click", function(e){
		e.preventDefault();

		var ads_box =$('.advanced_search');
		
		if(!ads_box.hasClass('advanced_displayed')){

			$(this).addClass('active');
			ads_box.stop().fadeIn(200).addClass('advanced_displayed');

		}else{

			$(this).removeClass('active');
			ads_box.stop().fadeOut(200).removeClass('advanced_displayed');

		}

	});









	/* */


	var acc_list = $( "button.accordion" );
	var acc = document.getElementsByClassName("accordion");
	var panels = document.getElementsByClassName("panel");
	var i;

	
	
	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			// console.log(acc_list);
			// console.log(acc_list[0]);
			for (j = 0; j < panels.length; j++) {
				acc_list[j].classList.remove("active");
				panels[j].style.display = "none";
			}
			$(this).addClass("active");
			// console.log(	$(this).html()	);

			var panel = this.nextElementSibling;
			panel.style.display = "block";



			// for (j = 0; j < panels.length; j++) {
			// 	console.log($(this).hasClass('active'));
			// 	if($(this).hasClass('active')){
			// 		panels[j].style.display = "block";
			// 	}else{
			// 		panels[j].style.display = "none";
			// 	}
			// }



		});
	}


});
