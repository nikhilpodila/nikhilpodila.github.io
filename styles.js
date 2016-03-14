$(function() {
	$oldHeight = $("#menu2").height();
	/*$oldBodyHeight = $("body").height();
	$imgHeight = $("#dp").height();
	$("#disp").html($oldBodyHeight);
	$x = $oldHeight+$imgHeight;
	$y = $oldBodyHeight+$imgHeight+30;
	$("#content").css("height",$x+"px");
	$("body").css("height",$y+"px");
	$("body").css("background-color","green");*/
	$("#content").css("min-height",$oldHeight+"px");
	
	$(".menu-block-content").hover(function() {
		
		$(this).stop().animate({
			backgroundColor: '#aaaaaa'
		},500);
	}, function() {
		$(this).stop().animate({
			backgroundColor: '#ffffff'
		},500);
	});
	$("#about").click(function(){
		$.ajax({url: "http://nikhilpodila.github.io/demo1.txt", success: function(result){
			$(this).html(result);
		}});
		$(this).animate({
			backgroundColor: '#ff0000'
		},500);
	}); 
}); 