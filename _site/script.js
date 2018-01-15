$(document).ready(function(){

	$(".i").mouseenter(function(){
		$("nav").fadeIn("fast");
	});

	$("nav#inner").mouseleave(function(){
		$("nav").fadeOut("fast");
	});

	$(document).scroll(function(){
			var scrollTop = $(document).scrollTop();
			console.log(scrollTop);
	});

});