---
layout: default
title: Reverse Geocode
root: "../"
---

Retorna o endereço de um par de coordenadas.

<h2>Google Maps</h2>

{% highlight js %}
var geocoder;
var map;
var infowindow = new google.maps.InfoWindow();
var marker;

function googleMaps()
{
	geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-23.54972, -46.63548);
    var myOptions = {
      zoom:18,
      center: latlng,
      mapTypeId: 'roadmap'
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  
}

function codeLatLangGoogle(lat, lng){
	var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
          map.setZoom(18);
          marker = new google.maps.Marker({
              position: latlng, 
              map: map
          }); 
          infowindow.setContent(results[1].formatted_address);
          infowindow.open(map, marker);
        } else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });
}
 
{% endhighlight %}

 
<h2>Nokia Maps</h2>

{% highlight js %}
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
 
{% endhighlight %}

<h2>HTML</h2>

{% highlight html %}  
<!DOCTYPE html>
<html>
  <head>
    <title>GoogleMaps2NokiaMaps - Reverse Geocoding</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="UTF-8">
    <style type="text/css">
      html, body {
       
        overflow:hidden;
      }     
      body {
        margin: 0;
        padding: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: absolute;
      }

      #map_canvas {
        width: 400px;
        height: 400px;
        left: 0px;
        top: 60px;
        position: absolute;
      }
      
      #mapContainer {
        width: 400px;
        height: 400px;
        left: 450px;
        top: 60px;
        position: absolute;
      }
    </style>
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
<script type="text/javascript" charset="UTF-8" src="http://api.maps.nokia.com/2.2.0//jsl.js?with=all"></script>
<script type="text/javascript" src="google.js"></script>
<script type="text/javascript" src="nokia.js"></script>
<script type="text/javascript">
   

  function codeLatLng() {
    var input = document.getElementById("latlng").value;
    var latlngStr = input.split(",",2);
    var lat = parseFloat(latlngStr[0]);
    var lng = parseFloat(latlngStr[1]);

    codeLatLangGoogle(lat,lng);
    codeLatLangNokiaMaps(lat,lng);
    
  }
</script>
</head>
<body >
	<div>
	  <input id="latlng" type="textbox" value="-23.54972, -46.63548">
	</div>
	<div>
	  <input type="button" value="Reverse Geocode" onclick="codeLatLng()">
	</div>
	<div id="map_canvas"></div>
	<div id='mapContainer'></div>
	<script type="text/javascript"> 
        googleMaps();
        nokiaMaps(); 
    </script>
</body>
</html>
{% endhighlight %}

<h2>Resultado</h2>

<a href="{{ page.root }}samples/reverse_geocode" target="_blank">Página com exemplo completo</a>
<br/>
<img src="{{ page.root }}images_posts/reverse_geocode.png" width="900px" class="post_img" />
