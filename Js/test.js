function documentReady(){
	   var p = $("p");
	   $("p").text(p.text() + "YES! ");
	}
	
	 $(document).ready(documentReady);