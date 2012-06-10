var map;
	function initialize() {
		var myOptions = {
	        zoom: 3,
	        center: new google.maps.LatLng(-26.909, -49.063),
	         mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    map = new google.maps.Map(document.getElementById('map_canvas'),myOptions);
	}

google.maps.event.addDomListener(window, 'load', initialize);