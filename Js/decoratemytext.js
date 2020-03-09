
var timer=null;
function myOnClick(){
    let textarea= $("#textarea"); //document.getElementById("textarea");
	let currentFontSize= textarea.css("font-size");
	let fontsize=parseInt(currentFontSize)+2;
	textarea.css("font-size",fontsize +"pt")
	//textarea.style.fontSize=currentFontSize= + 2;
	if(timer===null)
	  timer = setInterval(myOnClick,1000);
    // else{
	//	clearInterval(timer); 
	//	timer=null;
	//}
}

function malkovitch(){
	    let textarea= $("#textarea")[0]; 
        let values = textarea.value.split(' ');
		  for(let i=0; i< values.length; i++)
		  {
			  if(values[i].length>=5) values[i]="Malkovitch";
		  }
			
			let result = values.join(" ");
			$("#textarea")[0].value=result;
	
}

function igpayAtinlay(){
    let textarea= $("#textarea")[0]; 
    let values = textarea.value.split(' ');
	
	for (let i=0; i<values.length; i++)
	{
		if(values[i]==='') continue;
		
		if(isVowel(values[i].substring(0,1)))
			values[i]=values[i] + "ay";
		else 
		{
			let word=values[i];
			let ar= word.split('');
			let k=0;
			for(; k< ar.length; k++ )
			{
				if(isVowel(ar[k]))
					break;
			}
			values[i]= word.substring(k,word.length) + word.substring(0,k) + "ay";
		}
	}
	let result = values.join(' ');
	
	 $("#textarea")[0].value=result;
    
}

function isVowel(x){
	x=x.toLowerCase();
	if(x==="a") return true;
	if(x==="o") return true;
	if(x==="e") return true;
	if(x==="u") return true;
	if(x==="i") return true;
	return false;
}


function blingCheckBoxOnChange(){
   let isSelect=$("#bling122")[0].checked;
   let textarea =  $("#textarea");
   let body = $("body");
	if(isSelect)
	{
	   textarea.css("font-weight", "bold");
	   textarea.css("color", "red");
	   textarea.css("text-decoration", "underline");
	   body.css("background-image","url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)");
	}
  else
  {
	  textarea.css("color", "black");
     textarea.css("font-weight", "normal");
	  textarea.css("text-decoration", "none");
  }
}


function  onload1(){
	
	 let button =document.getElementById("btnDecoration");
     button.onclick = myOnClick;
	 
	  let blingCheckBox =document.getElementById("bling122");
	  blingCheckBox.onchange = blingCheckBoxOnChange;
	  
	   let btnAtinlay =document.getElementById("btnAtinlay");
	   btnAtinlay.onclick = igpayAtinlay;
	  
	   let btnMalkovitch =document.getElementById("btnMalkovitch");
	  btnMalkovitch.onclick = malkovitch;
}

window.onload=onload1;
