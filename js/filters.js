	var options = { page: 12, plugins: [ ListPagination({}) ] };

	var userList = new List('gallery', options);
		$('.all-filter').on('click', function() {
 		 userList.filter();
		});

	$('.grayscale-filter').on('click', function() {
		userList.filter(function(item) {
	 	var gray = item.elm.className;
    	if (gray.charAt(9) === 'b') {
      	return true;
    	} else {
      	return false;
    	}
  	});
});
	$('.color-filter').on('click', function() {
		userList.filter(function(item) {
	 	var color = item.elm.className;
    	if (color.charAt(9) === 'c') {
      	return true;
    	} else {
      	return false;
    	}
  	});
}); 
	$('.portrait-filter').on('click', function() {
		userList.filter(function(item) {
	 	var portrait = item.elm.className;
		if (portrait.includes('portrait')) { 
      	return true;
    	} else {
      	return false;
    	}
  	});  	  	
});
	$('.landscape-filter').on('click', function() {
		userList.filter(function(item) {
	 	var landscape = item.elm.className;
		if (landscape.includes('landscape')) { 
      	return true;
    	} else {
      	return false;
    	}
  	});  	  	
});  
	$('.object-filter').on('click', function() {
		userList.filter(function(item) {
	 	var object = item.elm.className;
		if (object.includes('object')) { 
      	return true;
    	} else {
      	return false;
    	}
  	});  	  	
});  
	$('.miscellaneous-filter').on('click', function() {
		userList.filter(function(item){ 
		var miscellaneous = item.elm.className;
		if (miscellaneous.includes('miscellaneous')) {    	
      	return true;
    	} else {
      	return false;
    	}
  	});  	  	
});   




	$('.acrylic-filter').on('click', function() {
		userList.filter(function(item){ 
		var acrylic = item.elm.className;
		if (acrylic.includes('acrylic paint')) {    	
      	return true;
    	} else {
      	return false;
    	}
  	});  	  	
});   

	$('.charcoal-filter').on('click', function() {
		userList.filter(function(item){ 
		var charcoal = item.elm.className;
		if (charcoal.includes('charcoal')) {    	
      	return true;
    	} else {
      	return false;
    	}
  	});  	  	
});   

	$('.pencil-filter').on('click', function() {
		userList.filter(function(item){ 
		var pencil = item.elm.className;
		if (pencil.includes('pencil')) {    	
      	return true;
    	} else {
      	return false;
    	}
  	});  	  	
});   

	$('.pastels-filter').on('click', function() {
		userList.filter(function(item){ 
		var pastels = item.elm.className;
		if (pastels.includes('color pastels')) {    	
      	return true;
    	} else {
      	return false;
    	}
  	});  	  	
});   

	$('.paz-filter').on('click', function() {
		userList.filter(function(item){ 
		var paz = item.elm.className;
		if (paz.includes('cray-paz')) {    	
      	return true;
    	} else {
      	return false;
    	}
  	});  	  	
});   

	$('.construction-filter').on('click', function() {
		userList.filter(function(item){ 
		var construction = item.elm.className;
		if (construction.includes('construction paper')) {    	
      	return true;
    	} else {
      	return false;
    	}
  	});  	  	
}); 

	$('.computer-filter').on('click', function() {
		userList.filter(function(item){ 
		var computer = item.elm.className;
		if (computer.includes('computer')) {    	
      	return true;
    	} else {
      	return false;
    	}
  	});  	  	
});   



 