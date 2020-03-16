$(document).ready(function(){
	
	var lookup=function(){
				
	   var word = $("#word").val();
	   console.log(word);
		
		// call ajax
		$.ajax({
		 "url":"http://localhost:8080/Dictionary/Dictionary",
		 "type":"GET",
		 "data":{"word":word },
	     "success":sucess,
		 "error":error
		 }		
		);
		
		
		//display result;
		
	}
	function sucess(data){
		const json = data; //'[{"wordType":"n", "wordDefi":"abc"}, {"wordType":"v", "wordDefi":"def"}]';
		console.log(json);
		const obj = JSON.parse(json);
		display(obj);
	}
	function error(xhr, status, exception) { console.log(xhr, status, exception); }
	
	var display=function(array){
		$("#result").empty();
		for(var i  in array)
		{
			$("#result").append('<li> ('+ array[i].wordType+'.) ' +array[i].wordDefi+'</a></li>');
		}
		
	}
	
	
	
	
	
	
	
	$("#lookup").click(lookup);
	
})