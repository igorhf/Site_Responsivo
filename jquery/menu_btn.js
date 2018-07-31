
$(function() {
	$(window).resize(function() {
        var largura = $(window).width(); 
	        if ( largura <= 701 ) {
	            $(".menu_mobile ul li a").hide();	             
	        }
    });
    $(".icone").bind('click', function(){
        $('.menu_mobile ul li a').toggle();
    });
});