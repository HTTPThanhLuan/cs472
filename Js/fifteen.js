$(function(){	
	let idSpace = 'square_4_4';
	let leftSpace = '300px';
	let topSpace = '300px';

	function getRandom(){
		return parseInt(Math.random() * 4) + 1;
	}

	let init = (function() {
	    var puzzleArea = document.getElementById('puzzlearea');
	    var divs = puzzleArea.getElementsByTagName("div");
	      
	    // initialize each piece
	    var row = 1;
	    var col = 1;
	    for (var i=0; i< divs.length; i++) {
	        var div = divs[i];
	        
	        // calculate x and y for this piece
	        var x = ((i % 4) * 100) ;
	        var y = (Math.floor(i / 4) * 100) ;

	        // set basic style and background
	        div.className = "puzzlepiece";
	        div.style.left = x + 'px';
	        div.style.top = y + 'px';
	        div.style.backgroundImage = 'url("background.jpg")';
	        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

			div.id = "square_" + row + '_' + col;
			col++;
	        if((i+1) % 4 == 0){
	        	row++;
	        	col = 1;
	        }

	        // store x and y for later
	        div.x = x;
	        div.y = y; 
	    }      

	    $('#shufflebutton').click(shuffle);  	    
	})();

	function swapElementAndSpace(el){
		var leftEl = el.css("left");
		var topEl = el.css("top");
		var idEl = el.attr('id');

		el.css({
			"left" : leftSpace,
			"top" : topSpace
		});

		el.attr('id', idSpace);
		idSpace = idEl;
		leftSpace = leftEl;
		topSpace = topEl;
	}

	function specifyAdjacentsOfSpace(){

		$('.movablepiece').unbind('click');		
		$('.movablepiece').removeClass('movablepiece');

		let infoSpace = idSpace.split('_');
		let row = parseInt(infoSpace[1]);
		let col = parseInt(infoSpace[2]);
		let arrAdjacentId = [
			('#square_' + (row - 1) + '_' + col),	// top Adjacent
			('#square_' + (row + 1) + '_' + col),	// bottom Adjacent
			('#square_' + row + '_' + (col - 1)),	// left Adjacent
			('#square_' + row + '_' + (col + 1)),	// right Adjacent
		];
		
		$.each(arrAdjacentId, function(idx, adjacent){
			console.log(adjacent);
			let el = $(adjacent);
			if(typeof el[0] !== 'undefined'){
				el.addClass("movablepiece");	
				el.click(function(){
					swapElementAndSpace($(this));
					specifyAdjacentsOfSpace();
				})			
			}
		});		
	}

	function shuffle(){
		for(let i = 0; i < 50; i++){
			let col = getRandom();
			let row = getRandom();
			let el = $('#square_' + row + '_' + col);
			if(typeof el[0] !== 'undefined'){
				swapElementAndSpace(el);
			}
		}	
		specifyAdjacentsOfSpace();			
	}	
});