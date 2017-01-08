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
		var feattxt = "";
		var random = Math.floor(Math.random() * arr.length);
		feattxt += "<a href='" + arr[random].image
		feattxt += "' data-imagelightbox='a'>"
		feattxt += "<img src='" + arr[random].image
		feattxt += "' class='img-responsive center-block'></a>"
		feattxt += "<h3 style='text-align: center'>"
		feattxt += arr[random].title + "</h3>"
      document.getElementById("feature").innerHTML=feattxt;
}
