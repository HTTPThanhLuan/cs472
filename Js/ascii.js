let mainApp = (function runAnimate(){
	let intervalID = null;
	let isStart = false;
	let curAnimate = "";
	let curFrame = -1;

	function show(){
		"use strict";
		let typeAnimate = document.getElementById('animate').value
		setFontSize();
		
		if(isStart){
			if(intervalID != null){
				clearInterval(intervalID);	
				intervalID = null;
			}
			if(ANIMATIONS[typeAnimate] !== ""){				

				let speed = getSpeed();
				let arrScenes = ANIMATIONS[typeAnimate].split("=====\n");	
				if(curAnimate == ""  || curFrame == -1){
					curFrame = 0;
					curAnimate = typeAnimate;
				}				

				intervalID = setInterval(function(){
					if(curFrame == arrScenes.length){
						curFrame = 0;
					}	
					document.getElementById('stage').value = arrScenes[curFrame++];
									
				}, speed);
			}else{
				document.getElementById('stage').value = "";
			}
		}else{
			document.getElementById('stage').value = ANIMATIONS[typeAnimate];			
		}		
	};

	function setFontSize(){
		"use strict";		
		document.getElementById('stage').style.fontSize = getFontSize();		
	};

	function getSpeed(){
		"use strict";
		if(document.getElementById('speed').checked == true)
			return 50;
		return 250;
	};

	function getFontSize(){
		"use strict";
		return document.getElementById("size").value;
	};

	return{
		start: function(){
			"use strict";
			isStart = true;
			document.getElementById('start').disabled = true;
			document.getElementById('stop').disabled = false;
			show();
		},
		changeSpeed: function(){
			if(isStart)
				show();
		},
		changeAnimate: function(){
			curFrame = -1;
			curAnimate = "";
			show();
		},
		stop: function(){
			"use strict";
			if(isStart && intervalID != null){
				clearInterval(intervalID);
				intervalID = null;				
			}
			isStart = false;			
			document.getElementById('start').disabled = false;
			document.getElementById('stop').disabled = true;
		},
		changeSize: function(){
			setFontSize();
		}
	}
})();

document.getElementById("start").onclick = mainApp.start;
document.getElementById("stop").onclick = mainApp.stop;
document.getElementById("animate").onchange = mainApp.changeAnimate;
document.getElementById("size").onchange = mainApp.changeSize;
document.getElementById("speed").onclick = mainApp.changeSpeed;





