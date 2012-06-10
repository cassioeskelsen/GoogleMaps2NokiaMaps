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