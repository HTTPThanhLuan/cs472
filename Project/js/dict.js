$(document).ready(function(){
	$("#loader").hide();
	var lookup=function(){
				
	   var word = $("#word").val();
	
	    
		
		// call ajax
		$.ajax({
		 "url":"http://localhost:8080/Dictionary/Dictionary",
		 "type":"GET",
		  "dataType":"json",
		 "data":{"word":word },
	     "success":sucess,
		 "error":error
		 }		
		).always(function() { $("#loader").hide(); });

		
		 $("#loader").show();
		 $("#result").empty();
		//display result;
		
	}
	function sucess(data){
		
		display(data);
	}
	function error(xhr, status, exception) { console.log(xhr, status, exception); }
	
	var display=function(array){
		$("#result").empty();
		for(var i  in array)
		{
			$("#result").append('<li> ('+ array[i].wordtype+'.) ' +array[i].definition+'</a></li>');
		}
		
	}
	
	
	
	
	
	
	
	$("#lookup").click(lookup);
	
})