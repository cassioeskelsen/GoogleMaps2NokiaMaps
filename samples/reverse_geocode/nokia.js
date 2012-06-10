var mapNokia;
var infoBubbles;
var position;

function nokiaMaps()
{
  
  nokia.Settings.set( "appId", "_peU-uCkp-j8ovkzFGNU"); 
  nokia.Settings.set( "authenticationToken", "gBoUkAMoxoqIWfxWA5DuMQ");

  var contentString = 'teste';


var mapContainer = document.getElementById("mapContainer");
   
infoBubbles = new nokia.maps.map.component.InfoBubbles();

mapNokia = new nokia.maps.map.Display(mapContainer, {
  center: [-23.54972, -46.63548],
  zoomLevel: 18,
  components: [infoBubbles,new nokia.maps.map.component.Behavior()]
});
 
}

function codeLatLangNokiaMaps(lat,lng)
{
	position = new nokia.maps.geo.Coordinate(
		lat,
		lng
	);

	nokia.places.search.manager.reverseGeoCode({
					latitude: position.latitude,
					longitude: position.longitude,
					onComplete: processResults});

}

function processResults(data, requestStatus, requestId) {
    var addressDetails ="";
	if(requestStatus == "ERROR")  {
			alert("Rev Geocoding failure");
	} else if (requestStatus == "OK") {
 
	var	address = data.location.address;
 
	if (address.street) {
		addressDetails = addressDetails +" , "+ address.street;			
	}
	if (address.houseNumber) {
		addressDetails = addressDetails +" , "+ address.houseNumber;
	}		
	if (address.city) {
		addressDetails = addressDetails +" , "+ address.city;
	}
	if (address.district) {
		addressDetails = addressDetails +" , "+ address.district;
	}						
	if (address.postalCode) {
		addressDetails = addressDetails +" , "+ address.postalCode;
	}						
	if (address.state) {
		addressDetails = addressDetails +" , "+ address.state ;
	}
	if (address.county) {
		addressDetails = addressDetails +" , "+ address.county;
	}
	if (address.country) {
		addressDetails = addressDetails +" , "+ address.country;
	}
 
	var myAddress = "<div>"+addressDetails+"</div>";
		infoBubbles.addBubble(myAddress, new nokia.maps.geo.Coordinate(position.latitude, position.longitude));
	}
}
