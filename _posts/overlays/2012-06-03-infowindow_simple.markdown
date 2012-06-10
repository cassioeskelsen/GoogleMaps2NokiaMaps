---
layout: default
title: Info Window Simple
root: "../"
---

Mostra alguma informação ao clicar em um "balãozinho"

<h2>Google Maps</h2>

{% highlight js %}
var map;
  function initialize() {
    var myOptions = {
        zoom: 4,
        center: new google.maps.LatLng(-25.363882,131.044922),
         mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map_canvas'),myOptions);
    var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
 

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the '+
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
        'south west of the nearest large town, Alice Springs; 450&#160;km '+
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
        'features of the Uluru - Kata Tjuta National Park. Uluru is '+
        'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
        'Aboriginal people of the area. It has many springs, waterholes, '+
        'rock caves and ancient paintings. Uluru is listed as a World '+
        'Heritage Site.</p>'+
        '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';
        
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Uluru (Ayers Rock)'
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
  }

google.maps.event.addDomListener(window, 'load', initialize);
{% endhighlight %}

 
<h2>Nokia Maps</h2>

{% highlight js %}
function nokiaMaps()
{
  
  nokia.Settings.set( "appId", "_peU-uCkp-j8ovkzFGNU"); 
  nokia.Settings.set( "authenticationToken", "gBoUkAMoxoqIWfxWA5DuMQ");

  var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the '+
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
        'south west of the nearest large town, Alice Springs; 450&#160;km'+
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
        'features of the Uluru - Kata Tjuta National Park. Uluru is '+
        'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
        'Aboriginal people of the area. It has many springs, waterholes, '+
        'rock caves and ancient paintings. Uluru is listed as a World '+
        'Heritage Site.</p>'+
        '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';


var mapContainer = document.getElementById("mapContainer");
   
var infoBubbles = new nokia.maps.map.component.InfoBubbles();

var map = new nokia.maps.map.Display(mapContainer, {
  center: [-25.363882,131.044922],
  zoomLevel: 4,
  components: [infoBubbles,new nokia.maps.map.component.Behavior()]
});


var TOUCH = nokia.maps.dom.Page.browser.touch,
  CLICK = TOUCH ? "tap" : "click";

  var standardMarker = new nokia.maps.map.StandardMarker([-25.363882,131.044922]);
  standardMarker.addListener(
      "click",
      function (evt) {
        // Set the tail of the bubble to the coordinate of the marker
        infoBubbles.addBubble(contentString, standardMarker.coordinate);
      }
    );

  map.objects.add(standardMarker);
}
{% endhighlight %}

<h2>HTML</h2>

{% highlight html %} 
 <!DOCTYPE html>
<html>
  <head>
    <title>Google Maps JavaScript API v3 Example: Map Geolocation</title>
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
        src="https://maps.googleapis.com/maps/api/js?sensor=true&language"></script>
          </head>
    <script type="text/javascript" src="google.js"></script>
     
    <!-- Clamada a API do Nokia Maps e código que mostra o mapa do Nokia Maps-->
    <script type="text/javascript" charset="UTF-8" src="http://api.maps.nokia.com/2.2.0//jsl.js?with=all"></script>
    <script type="text/javascript" src="nokia.js"></script>

  </head>  
  <body>
    <div id="map_canvas"></div>
    <div id='mapContainer'> </div>
       <script type="text/javascript"> 
         nokiaMaps(); 
       </script>
  </body>
</html>
{% endhighlight %}

<h2>Resultado</h2>

<a href="/samples/infowindow_simple" target="_blank">Página com exemplo completo</a>

<img src="/images_posts/infowindow_simple.png" width="900px" class="post_img" />
