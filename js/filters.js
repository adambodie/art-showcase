<<<<<<< HEAD
		var options = {
		valueNames: [ 'name'],
		page: 12,
		plugins: [
			ListPagination({outerWindow: 10}) 
		]
	};

	var userList = new List('gallery', options);

=======
	var options = { 
		page: 12, 
		plugins: [ 
			ListPagination({}) 
		] 
	};

	var userList = new List('gallery', options);
	
>>>>>>> 41a800a66f5eccd16da176aa8682c2fb85eda44f
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
<<<<<<< HEAD
});
	$('.portrait-filter').on('click', function() {
		userList.filter(function(item) {
	 	var portrait = item.elm.className;
		if (portrait.includes('portrait')) {
=======
}); 
	$('.portrait-filter').on('click', function() {
		userList.filter(function(item) {
	 	var portrait = item.elm.className;
		if (portrait.includes('portrait')) { 
>>>>>>> 41a800a66f5eccd16da176aa8682c2fb85eda44f
      	return true;
    	} else {
      	return false;
    	}
<<<<<<< HEAD
  	});
=======
  	});  	  	
>>>>>>> 41a800a66f5eccd16da176aa8682c2fb85eda44f
});
	$('.landscape-filter').on('click', function() {
		userList.filter(function(item) {
	 	var landscape = item.elm.className;
<<<<<<< HEAD
		if (landscape.includes('landscape')) {
=======
		if (landscape.includes('landscape')) { 
>>>>>>> 41a800a66f5eccd16da176aa8682c2fb85eda44f
      	return true;
    	} else {
      	return false;
    	}
<<<<<<< HEAD
  	});
});
	$('.object-filter').on('click', function() {
		userList.filter(function(item) {
	 	var object = item.elm.className;
		if (object.includes('object')) {
=======
  	});  	  	
});  
	$('.object-filter').on('click', function() {
		userList.filter(function(item) {
	 	var object = item.elm.className;
		if (object.includes('object')) { 
>>>>>>> 41a800a66f5eccd16da176aa8682c2fb85eda44f
      	return true;
    	} else {
      	return false;
    	}
<<<<<<< HEAD
  	});
});
	$('.miscellaneous-filter').on('click', function() {
		userList.filter(function(item){
		var miscellaneous = item.elm.className;
		if (miscellaneous.includes('miscellaneous')) {
=======
  	});  	  	
});  
	$('.miscellaneous-filter').on('click', function() {
		userList.filter(function(item){ 
		var miscellaneous = item.elm.className;
		if (miscellaneous.includes('miscellaneous')) {    	
>>>>>>> 41a800a66f5eccd16da176aa8682c2fb85eda44f
      	return true;
    	} else {
      	return false;
    	}
<<<<<<< HEAD
  	});
});
=======
  	});  	  	
});   
>>>>>>> 41a800a66f5eccd16da176aa8682c2fb85eda44f




	$('.acrylic-filter').on('click', function() {
<<<<<<< HEAD
		userList.filter(function(item){
		var acrylic = item.elm.className;
		if (acrylic.includes('acrylic paint')) {
=======
		userList.filter(function(item){ 
		var acrylic = item.elm.className;
		if (acrylic.includes('acrylic paint')) {    	
>>>>>>> 41a800a66f5eccd16da176aa8682c2fb85eda44f
      	return true;
    	} else {
      	return false;
    	}
<<<<<<< HEAD
  	});
});

	$('.charcoal-filter').on('click', function() {
		userList.filter(function(item){
		var charcoal = item.elm.className;
		if (charcoal.includes('charcoal')) {
=======
  	});  	  	
});   

	$('.charcoal-filter').on('click', function() {
		userList.filter(function(item){ 
		var charcoal = item.elm.className;
		if (charcoal.includes('charcoal')) {    	
>>>>>>> 41a800a66f5eccd16da176aa8682c2fb85eda44f
      	return true;
    	} else {
      	return false;
    	}
<<<<<<< HEAD
  	});
});

	$('.pencil-filter').on('click', function() {
		userList.filter(function(item){
		var pencil = item.elm.className;
		if (pencil.includes('pencil')) {
=======
  	});  	  	
});   

	$('.pencil-filter').on('click', function() {
		userList.filter(function(item){ 
		var pencil = item.elm.className;
		if (pencil.includes('pencil')) {    	
>>>>>>> 41a800a66f5eccd16da176aa8682c2fb85eda44f
      	return true;
    	} else {
      	return false;
    	}
<<<<<<< HEAD
  	});
});

	$('.pastels-filter').on('click', function() {
		userList.filter(function(item){
		var pastels = item.elm.className;
		if (pastels.includes('color pastels')) {
=======
  	});  	  	
});   

	$('.pastels-filter').on('click', function() {
		userList.filter(function(item){ 
		var pastels = item.elm.className;
		if (pastels.includes('color pastels')) {    	
>>>>>>> 41a800a66f5eccd16da176aa8682c2fb85eda44f
      	return true;
    	} else {
      	return false;
    	}
<<<<<<< HEAD
  	});
});

	$('.paz-filter').on('click', function() {
		userList.filter(function(item){
		var paz = item.elm.className;
		if (paz.includes('cray-paz')) {
=======
  	});  	  	
});   

	$('.paz-filter').on('click', function() {
		userList.filter(function(item){ 
		var paz = item.elm.className;
		if (paz.includes('cray-paz')) {    	
>>>>>>> 41a800a66f5eccd16da176aa8682c2fb85eda44f
      	return true;
    	} else {
      	return false;
    	}
<<<<<<< HEAD
  	});
});

	$('.construction-filter').on('click', function() {
		userList.filter(function(item){
		var construction = item.elm.className;
		if (construction.includes('construction paper')) {
=======
  	});  	  	
});   

	$('.construction-filter').on('click', function() {
		userList.filter(function(item){ 
		var construction = item.elm.className;
		if (construction.includes('construction paper')) {    	
>>>>>>> 41a800a66f5eccd16da176aa8682c2fb85eda44f
      	return true;
    	} else {
      	return false;
    	}
<<<<<<< HEAD
  	});
});

	$('.computer-filter').on('click', function() {
		userList.filter(function(item){
		var computer = item.elm.className;
		if (computer.includes('computer')) {
=======
  	});  	  	
}); 

	$('.computer-filter').on('click', function() {
		userList.filter(function(item){ 
		var computer = item.elm.className;
		if (computer.includes('computer')) {    	
>>>>>>> 41a800a66f5eccd16da176aa8682c2fb85eda44f
      	return true;
    	} else {
      	return false;
    	}
<<<<<<< HEAD
  	});
});
=======
  	});  	  	
});   



 
>>>>>>> 41a800a66f5eccd16da176aa8682c2fb85eda44f
