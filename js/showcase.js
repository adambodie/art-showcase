	var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
    } else {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function() {
      if (xmlhttp.readyState==4 && xmlhttp.status==200) {
        jsonDoc = JSON.parse(xmlhttp.responseText);
        myFunction(jsonDoc);
		}
	}	
	xmlhttp.open("GET","data/showcase.json",true);
    xmlhttp.send();
        
	function myFunction(arr) {
		var txt = "<h2>Search by Title</h2><input id='icon' class='search input-lg' placeholder='Search'/><ul id='imageGallery' class='list'>";
        for (var i = 0; i < arr.length; i++) {
            txt += "<li class='painting'>"
            txt += "<a href='" + arr[i].image + "'data-imagelightbox='a'>" 
            txt += "<img src='" + arr[i].image 
            txt += " 'color ='" + arr[i].color
            txt += "' type ='" + arr[i].types 
            txt += "' medium ='" + arr[i].medium    
            txt += "' description ='" + arr[i].description   
            txt += "' class= img-responsive center-block' style = 'max-width: 250px' "
            txt += "alt='" + arr[i].title + "'>"
            txt += "</a>"
            txt += "<br>"
            txt += "<h4 class='name'>" + arr[i].title + "</h4></li>" 
        }
        txt += "</ul><ul class='pagination'></ul>";
        document.getElementById("gallery").
        innerHTML=txt;
        }