
var touchwall=0;
$(document).ready(function(){
	
	
	var mouseOverWall=function(){
	  // $(this).css({"background-color":"red"})
	  $(this).addClass("youlose");
	  touchwall=0;
	}
	
	var mouseOverEnd=function(){
		if(touchwall===1){
		  //alert("You win! :]");
		  $("#status").text("You win! :]");
		}
		else
		  $("#status").text("You lose");
	}
	
	var mouseOverStart=function(){
		 touchwall=1;
		 $(".boundary").removeClass ("youlose");
		 
		 $("#status").text("Click the 'S' to begin.");
		 
	}
	
	var onMouseOut = function(){
		touchwall=0;
		console.log(1);
	}
	
	
	
	
  $(".boundary").mouseover(mouseOverWall);
  $("#end").mouseover(mouseOverEnd);
  $("#maze").mouseleave(onMouseOut);
  $("#start").click(mouseOverStart);  
})