// JavaScript Document
$(document).ready(function() {
     
	 /* Tabs */
	 $("#tabs").tabs();
	 
	 /* Slider */
	 var Slider1 = $('#slider1');
	 if(Slider1.length > 0){
		$('#slider1').tinycarousel();
	 }
			
	 /* columnize */
	 $('.wide').columnize({width:300});
	 
});