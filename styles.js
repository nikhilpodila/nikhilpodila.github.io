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
	// INTRO PAGE DISPLAY
	$("#intro").click(function(){
		$.ajax({url: "intro.txt", success: function(result){
			$("#content").html(result);
		}});
		$(this).animate({
			backgroundColor: '#ff0000'
		},500);
	});
	// END OF INTRO PAGE DISPLAY
	// ABOUT PAGE DISPLAY
	$("#about").click(function(){
		$.ajax({url: "about.txt", success: function(result){
			$("#content").html(result);
		}});
		$(this).animate({
			backgroundColor: '#ff0000'
		},500);
	});
	// END OF ABOUT PAGE DISPLAY
	// EDU PAGE DISPLAY
	$("#edu").click(function(){
		$.ajax({url: "edu.txt", success: function(result){
			$("#content").html(result);
		}});
		$(this).animate({
			backgroundColor: '#ff0000'
		},500);
	});
	// END OF EDU PAGE DISPLAY
	// SKILLS PAGE DISPLAY
	$("#skill").click(function(){
		$.ajax({url: "skill.txt", success: function(result){
			$("#content").html(result);
		}});
		$(this).animate({
			backgroundColor: '#ff0000'
		},500);
	});
	// END OF SKILLS PAGE DISPLAY
	// PROJECTS PAGE DISPLAY
	$("#project").click(function(){
		$.ajax({url: "project.txt", success: function(result){
			$("#content").html(result);
		}});
		$(this).animate({
			backgroundColor: '#ff0000'
		},500);
	});
	// END OF PROJECT PAGE DISPLAY
	// EXTRA-CURRICULARS PAGE DISPLAY
	$("#extra").click(function(){
		$.ajax({url: "extra.txt", success: function(result){
			$("#content").html(result);
		}});
		$(this).animate({
			backgroundColor: '#ff0000'
		},500);
	});
	// END OF EXTRA-CURRICULARS PAGE DISPLAY
	// GALLERY PAGE DISPLAY
	$("#gallery").click(function(){
		$.ajax({url: "gallery.txt", success: function(result){
			$("#content").html(result);
		}});
		$(this).animate({
			backgroundColor: '#ff0000'
		},500);
	});
	// END OF GALLERY PAGE DISPLAY
}); 