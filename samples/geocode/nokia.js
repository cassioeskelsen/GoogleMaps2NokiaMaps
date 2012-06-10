var mapNokia;
var infoBubbles;
var position;
var searchCenter;
var resultSet;

function nokiaMaps()
{
	nokia.Settings.set( "appId", "_peU-uCkp-j8ovkzFGNU");
	nokia.Settings.set( "authenticationToken", "gBoUkAMoxoqIWfxWA5DuMQ");
 
	searchCenter = new nokia.maps.geo.Coordinate(23.54972, -46.63548);
	var mapContainer = document.getElementById("mapContainer");
   
	infoBubbles = new nokia.maps.map.component.InfoBubbles();

	mapNokia = new nokia.maps.map.Display(mapContainer, {
	  center: [-23.54972, -46.63548],
	  zoomLevel: 1,
	  components: [infoBubbles,new nokia.maps.map.component.Behavior(),new nokia.maps.map.component.ZoomBar(), ]
	});
 
}

function codeLatLangNokiaMaps(address)
{ 
	nokia.places.search.manager.findPlaces({
		searchTerm :  address,
		onComplete:  processResults,
		searchCenter: searchCenter
	});
  
}

var processResults = function (data, requestStatus, requestId) {
	var i, len, locations, marker;
	
	 // .findPlaces() for some reason returns "ok" (in lowercase), they are about to fix that TODO: check and remove toUC() if no longer needed
	if (requestStatus == "OK") {
		// The function findPlaces() and reverseGeoCode() of  return results in slightly different formats
		locations = data.results ? data.results.items : [data.location];
		// We check that at least one location has been found
		if (locations.length > 0) {
			// Remove results from previous search from the map
			if (resultSet) mapNokia.objects.remove(resultSet);
			// Convert all found locations into a set of markers
			resultSet = new nokia.maps.map.Container();
			
			marker = new nokia.maps.map.StandardMarker(locations[0].position, { text: '1' });
			resultSet.objects.add(marker);
			
			// Next we add the marker(s) to the map's object collection so they will be rendered onto the map
			mapNokia.objects.add(resultSet);
			// We zoom the map to a view that encapsulates all the markers into map's viewport
			mapNokia.zoomTo(resultSet.getBoundingBox(), false);

		} else { 
			alert("Your search produced no results!");
		}
	} else {
		alert("The search request failed");
	}
};
