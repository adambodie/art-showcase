$(function() {
	// OVERLAY
	overlayOn = function(){
				$( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
	},
	overlayOff = function(){
			$( '#imagelightbox-overlay' ).remove();
	},
	// CLOSE BUTTON
	closeButtonOn = function( instance ){
		$( '<button type="button" id="imagelightbox-close" title="Close"></button>' ).appendTo( 'body' ).on( 'click touchend', function(){ $( this ).remove(); instance.quitImageLightbox(); return false; });
	},
	closeButtonOff = function(){
		$( '#imagelightbox-close' ).remove();
	},
	// CAPTION
	captionOn = function(){
	var title = $( "a[href='" + $( "#imagelightbox" ).attr( "src" ) + "'] img" ).attr( "alt" );
	var color = $( "a[href='" + $( "#imagelightbox" ).attr( "src" ) + "'] img" ).attr( "color" );
	var types = $( "a[href='" + $( "#imagelightbox" ).attr( "src" ) + "'] img" ).attr( "type" );
	var medium = $( "a[href='" + $( "#imagelightbox" ).attr( "src" ) + "'] img" ).attr( "medium" );
	var description = $( "a[href='" + $( "#imagelightbox" ).attr( "src" ) + "'] img" ).attr( "description" );
	
	var newColor = color[0].toUpperCase() + color.substring(1, color.length);
	var newTypes = types[0].toUpperCase() + types.substring(1, types.length);
	var newMedium = medium[0].toUpperCase() + medium.substring(1, medium.length);
	if (newColor === 'Bnw') {
		newColor = 'Black & White';	
	}	
				
		if( title.length > 0 )
			$( "<div id='imagelightbox-caption'><h3>Title: " + title + "</h3><p>Color: " + newColor + "</p><p>Type: " + newTypes + "</p><p>Medium: " + newMedium + "</p><p>Description: " + description + "</p></div>" ).appendTo( 'body' );
	},
	captionOff = function(){
		$( '#imagelightbox-caption' ).remove();
	}
	var selector = 'a[data-imagelightbox="a"]';
	var instance = $( selector ).imageLightbox({
			onStart:		function() { overlayOn(); closeButtonOn( instance ); },
			onEnd:			function() { overlayOff(); captionOff(); closeButtonOff();},
			onLoadStart: 	function() { captionOff()},
			onLoadEnd:	 	function() { captionOn();}
		});		
});