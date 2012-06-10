---
layout: default
title: Map Language
root: "../"
---

Esse exemplo mostra como alterar a linguagem do Mapa. </br> 
Perceba que o Google Maps e o Nokia Maps adotam duas abordagens diferentes:  
enquanto que no Google maps você muda a linguagem através de um parâmetro a mais na URL de chamada do javascript da API (<i>src="https://maps.googleapis.com/maps/api/js?sensor=true<b>&language=zh-CN</b>"</i>), 
no Nokia Maps você precisa adicionar uma linha de instrução.

<h2>Google Maps</h2>

{% highlight js %}
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
{% endhighlight %}

 
<h2>Nokia Maps</h2>

{% highlight js %}
function nokiaMaps()
{
  // essa linha altera a linguagem
  nokia.maps.util.ApplicationContext.set("defaultLanguage", "zh-CN");

  nokia.Settings.set( "appId", "_peU-uCkp-j8ovkzFGNU"); 
  nokia.Settings.set( "authenticationToken", "gBoUkAMoxoqIWfxWA5DuMQ");

  // Get the DOM node to which we will append the map
  var mapContainer = document.getElementById("mapContainer");
  // Create a map inside the map container DOM node
  var map = new nokia.maps.map.Display(mapContainer, {
    // initial center and zoom level of the map
    center: [-26.909, -49.063],
    zoomLevel: 3,
    components: [
      // ZoomBar provides an UI to zoom the map in & out
      new nokia.maps.map.component.ZoomBar(), 
      // We add the behavior component to allow panning / zooming of the map
      new nokia.maps.map.component.Behavior(),
       // Creates UI to easily switch between street map satellite and terrain mapview modes
      new nokia.maps.map.component.TypeSelector(),
      new nokia.maps.map.component.Overview(),
      /* Shows a scale bar in the bottom right corner of the map depicting
       * ratio of a distance on the map to the corresponding distance in the real world
       * in either kilometers or miles
       */ 
      new nokia.maps.map.component.ScaleBar(),
      /* Positioning will show a set "map to my GPS position" UI button
       * Note: this component will only be visible if W3C geolocation API
       * is supported by the browser and if you agree to share your location.
       * If you location can not be found the positioning button will reset
       * itself to its initial state
       */
      new nokia.maps.positioning.component.Positioning(),
      // Add ContextMenu component so we get context menu on right mouse click / long press tap
      new nokia.maps.map.component.ContextMenu()
    ]
  }); 
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
        src="https://maps.googleapis.com/maps/api/js?sensor=true&language=zh-CN"></script>
          </head>
    <script type="text/javascript" src="/samples/maplanguage/google.js"></script>
     
    <!-- Clamada a API do Nokia Maps e código que mostra o mapa do Nokia Maps -->
    <script type="text/javascript" charset="UTF-8" src="http://api.maps.nokia.com/2.2.0//jsl.js?with=all"></script>
    <script type="text/javascript" src="/samples/maplanguage/nokia.js"></script>

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

<a href="{{ page.root }}samples/maplanguage" target="_blank">Página com exemplo completo</a>

<img src="{{ page.root }}images_posts/maplanguage.png" width="900px" class="post_img" />
