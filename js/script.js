/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

$(function(){
$('#alertButton').click(function(e){
	e.preventDefault();
	$('#alertArea').slideDown();
});

// $('#myModal').modal(keyboard:true);

$('a.pop').click(function(e){
	e.preventDefault();
});

$('a.pop').popover();

$('[rel="tooltip"]').tooltip();
});

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

$('#about-scroll').click(function(){
    $('#aboutUs').animate({
        scrollTop : 0 
    },500);
});
