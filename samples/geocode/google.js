var geocoder;
var map;
var infowindow = new google.maps.InfoWindow();
var marker;

function googleMaps()
{
	geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-23.54972, -46.63548);
    var myOptions = {
      zoom:1,
      center: latlng,
      mapTypeId: 'roadmap'
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  
}

function codeLatLangGoogle(address){
 
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map, 
            position: results[0].geometry.location
        });
        map.setZoom(16);
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
 
}