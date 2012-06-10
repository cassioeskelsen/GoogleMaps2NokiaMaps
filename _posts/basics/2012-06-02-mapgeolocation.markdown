---
layout: default
title: Map Geolocation
---

Esse exemplo mostra como pegar a posição atual do usuário pelas APIs de Geolocation disponível nos browsers que suportam HTML 5

<h2>Google Maps</h2>

{% highlight js %}
var map;

function initialize() {
  var myOptions = {
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map_canvas'),myOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
  var pos = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

  var infowindow = new google.maps.InfoWindow({
    map: map,
    position: pos,
    content: 'Location found using HTML5.'
  });

  map.setCenter(pos);
      }, function() {
  handleNoGeolocation(true);
      });
    } else {
      // Browser doesn't support Geolocation
      handleNoGeolocation(false);
    }
  }

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);
  

{% endhighlight %}

 
<h2>Nokia Maps</h2>

{% highlight js %}
function nokiaMaps()
{

  nokia.Settings.set( "appId", "_peU-uCkp-j8ovkzFGNU");
  nokia.Settings.set( "authenticationToken", "gBoUkAMoxoqIWfxWA5DuMQ");

  // Get the DOM node to which we will append the map
  var mapContainer = document.getElementById("mapContainer");
  // Create a map inside the map container DOM node
  var map = new nokia.maps.map.Display(mapContainer, {
    // initial center and zoom level of the map
    center: [-26.909, -49.063],
    zoomLevel: 14,
    components: [
      // ZoomBar provides an UI to zoom the map in & out
      new nokia.maps.map.component.ZoomBar(),
      // We add the behavior component to allow panning / zooming of the map
      new nokia.maps.map.component.Behavior(),
     
      new nokia.maps.map.component.ContextMenu()
    ]
  });

  /*Somente suportado em Browsers + modernos*/
  if (nokia.maps.positioning.Manager) {
    var positioning = new nokia.maps.positioning.Manager();
    
    //Pega a posição atual, se disponível, o primeiro argumento de callback é executado, caso contrário, o segundo é 
    positioning.getCurrentPosition(
       
      function (position) {
        var coords = position.coords, // pega a longitude e latitude da posição passada pelo browser
          marker = new nokia.maps.map.StandardMarker(coords), // cria um marker
          /*
           * Cria um círculo mostrando a acurácia da posição recebida em metros
          */ 
          accuracyCircle = new nokia.maps.map.Circle(coords, coords.accuracy);
        
        // adiciona o circulo ao mapa
        map.objects.addAll([accuracyCircle, marker]); 
        /*
        * Seta o zoom máximo até que o círculo todo seja visível no mapa
        */
        map.zoomTo(accuracyCircle.getBoundingBox(), false, "default");
      }, 
      // Algo errado aconteceu ao pegar a posição
      function (error) {
        var errorMsg = "Location could not be determined: ";
        
        // tenta determinar o motivo do erro
        if (error.code == 1) errorMsg += "PERMISSION_DENIED";
        else if (error.code == 2) errorMsg += "POSITION_UNAVAILABLE";
        else if (error.code == 3) errorMsg += "TIMEOUT";
        else errorMsg += "UNKNOWN_ERROR";
          
           
          alert(errorMsg);
        }
      ); 
  }
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
        src="https://maps.googleapis.com/maps/api/js?sensor=true"></script>
          </head>
    <script type="text/javascript" src="/samples/mapgeolocation/google.js"></script>
     
    <!-- Clamada a API do Nokia Maps e código que mostra o mapa do Nokia Maps-->
    <script type="text/javascript" charset="UTF-8" src="http://api.maps.nokia.com/2.2.0//jsl.js?with=all"></script>
    <script type="text/javascript" src="/samples/mapgeolocation/nokia.js"></script>
 
  
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

<a href="/samples/mapgeolocation" target="_blank">Página com exemplo completo</a>

<img src="/images_posts/mapgeolocation_sample.png" width="900px" class="post_img" />
