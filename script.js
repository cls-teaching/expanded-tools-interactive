$(document).ready(function(){

	$(".cal-info").hide();

	$(".i").mouseenter(function(){
		$("nav").fadeIn("fast");
	});

	$("nav#inner").mouseleave(function(){
		$("nav").fadeOut("fast");
	});

	$(".cal-title").click(function(){
		$(this).siblings(".cal-info").slideToggle();
	});

	$(document).scroll(function(){
			var scrollTop = $(document).scrollTop();
			console.log(scrollTop);
	});

});