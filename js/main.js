window.onscroll = function(){
	var prevScrollpos = window.pageYOffset;

	if(prevScrollpos>100){
		$(".menu") .addClass("navShadow");
	}

	if(prevScrollpos<100){
		$(".menu") .removeClass("navShadow");
	}
}