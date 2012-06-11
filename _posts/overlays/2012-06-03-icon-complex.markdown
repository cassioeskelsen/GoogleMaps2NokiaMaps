---
layout: default
title: Icon Complex
root: "../"
---
 

<h2>Google Maps</h2>

{% highlight js %}
function googleMaps() {
  var myOptions = {
    zoom: 10,
    center: new google.maps.LatLng(-33.9, 151.2),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map_canvas"),
                                myOptions);

  setMarkers(map, beaches);
}

/**
 * Data for the markers consisting of a name, a LatLng and a zIndex for
 * the order in which these markers should display on top of each
 * other.
 */
var beaches = [
  ['Bondi Beach', -33.890542, 151.274856, 4],
  ['Coogee Beach', -33.923036, 151.259052, 5],
  ['Cronulla Beach', -34.028249, 151.157507, 3],
  ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
  ['Maroubra Beach', -33.950198, 151.259302, 1]
];

function setMarkers(map, locations) {
  // Add markers to the map

  // Marker sizes are expressed as a Size of X,Y
  // where the origin of the image (0,0) is located
  // in the top left of the image.

  // Origins, anchor positions and coordinates of the marker
  // increase in the X direction to the right and in
  // the Y direction down.
  var image = new google.maps.MarkerImage('/images_posts/beachflag.png',
      // This marker is 20 pixels wide by 32 pixels tall.
      new google.maps.Size(20, 32),
      // The origin for this image is 0,0.
      new google.maps.Point(0,0),
      // The anchor for this image is the base of the flagpole at 0,32.
      new google.maps.Point(0, 32));
   
  var shape = {
      coord: [1, 1, 1, 20, 18, 20, 18 , 1],
      type: 'poly'
  };
  for (var i = 0; i < locations.length; i++) {
    var beach = locations[i];
    var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map, 
        icon: image,
        shape: shape,
        title: beach[0],
        zIndex: beach[3]
    });
  }
}
{% endhighlight %}

 
<h2>Nokia Maps</h2>

{% highlight js %}
function nokiaMaps()
{
  var beaches = [
  ['Bondi Beach', -33.890542, 151.274856, 4],
  ['Coogee Beach', -33.923036, 151.259052, 5],
  ['Cronulla Beach', -34.028249, 151.157507, 3],
  ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
  ['Maroubra Beach', -33.950198, 151.259302, 1]
  ];


  nokia.Settings.set( "appId", "_peU-uCkp-j8ovkzFGNU"); 
  nokia.Settings.set( "authenticationToken", "gBoUkAMoxoqIWfxWA5DuMQ");

  // Get the DOM node to which we will append the map
  var mapContainer = document.getElementById("mapContainer");
  // Create a map inside the map container DOM node
  var map = new nokia.maps.map.Display(mapContainer, {
    // initial center and zoom level of the map
    center: [-33.9, 151.2],
    zoomLevel: 10,
    components: [ 
      new nokia.maps.map.component.ZoomBar(), 
      new nokia.maps.map.component.Behavior(),
      new nokia.maps.map.component.TypeSelector(),
      new nokia.maps.map.component.Overview(),
      new nokia.maps.map.component.ScaleBar(),
      new nokia.maps.positioning.component.Positioning(), 
      new nokia.maps.map.component.ContextMenu()
    ]
  }); 

  for (var i = 0; i < beaches.length; i++) {
    var beach = beaches[i];
    var marker = new nokia.maps.map.Marker(
            new nokia.maps.geo.Coordinate(beach[1], beach[2]),{
                    title: beach[0],
                    visibility: true,
                    icon: "/images_posts/beachflag.png",
                    // The anchor for this image is the base of the flagpole at 0,32.
                    anchor: new nokia.maps.util.Point(0, 32) });

    map.objects.add(marker);
  };

}
{% endhighlight %}

<h2>HTML</h2>

{% highlight html %} 
<!DOCTYPE html>
<html>
  <head>
    <title>GoogleMaps2NokiaMaps - icon complex</title>
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
        top: 0;
        position: absolute;
      }
      
      #mapContainer {
        width: 400px;
        height: 400px;
        left: 450px;
        top: 0;
        position: absolute;
      }
    </style>
    <!-- chamada à api do Google Maps e código que mostra o mapa do Google Maps. Coloquei em JS separados para não ficar muito confuso aqui -->
    <!--
    Include the maps javascript with sensor=true because this code is using a
    sensor (a GPS locator) to determine the user's location.
    See: https://developers.google.com/apis/maps/documentation/javascript/basics#SpecifyingSensor
    -->
    <script type="text/javascript"
        src="https://maps.googleapis.com/maps/api/js?sensor=true"></script>
          </head>
    <script type="text/javascript" src="google.js"></script>
     
    <!-- Clamada a API do Nokia Maps e código que mostra o mapa do Nokia Maps-->
    <script type="text/javascript" charset="UTF-8" src="http://api.maps.nokia.com/2.2.0//jsl.js?with=all"></script>
    <script type="text/javascript" src="/samples/icon_complex/nokia.js"></script>

  </head>  
  <body>
    <div id="map_canvas"></div>
    <div id='mapContainer'> </div>
       <script type="text/javascript"> 
        googleMaps();
         nokiaMaps(); 
       </script>
  </body>
</html>
{% endhighlight %}

<h2>Resultado</h2>

<a href="{{ page.root }}samples/icon_complex" target="_blank">Página com exemplo completo</a>

<img src="{{ page.root }}images_posts/icon_complex.png" width="900px" class="post_img" />
