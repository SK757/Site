// ===== Scroll to Main ==== 
$("#move-down").click(function() {
    $('html,body').animate({
        scrollTop: $(".main").offset().top},
        350);
});

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {        // If page is scrolled more than 100px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(100);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 350);
});

// ===== Detect Browser ====
var userAgent = navigator.userAgent.toLowerCase(); 
	if (userAgent .indexOf('safari')!=-1){
		if(userAgent .indexOf('chrome')  > -1){
			$(".cover-large").css("height", "100vh");
            // $(".cover").css("height", "93.469%");
			$(".cover").css("height", "95vh");
		} else if((userAgent .indexOf('opera')  > -1)||(userAgent .indexOf('opr')  > -1)){
			//browser is opera 
		} else {
			$(".cover-large").css("height", "100%");
			$(".cover").css("height", "94.5vh");
            $("#move-down").css("bottom", "120px");
       	}
    }
