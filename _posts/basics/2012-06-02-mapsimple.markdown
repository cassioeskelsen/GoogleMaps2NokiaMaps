---
layout: default
title: Map Simple
root: "../"
---

Exemplo de como mostrar um mapa simples

<h2>Google Maps</h2>

{% highlight js %}
 <script type="text/javascript"
        src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
    <script type="text/javascript">
      var map;
      function initialize() {
        var myOptions = {
          zoom: 8,
          center: new google.maps.LatLng(-34.397, 150.644),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('map_canvas'),
            myOptions);
      }

      google.maps.event.addDomListener(window, 'load', initialize);
    </script>

{% endhighlight %}

 
<h2>Nokia Maps</h2>

{% highlight js %}

  <script type="text/javascript">
     
    nokia.Settings.set( "appId", "_peU-uCkp-j8ovkzFGNU"); 
    nokia.Settings.set( "authenticationToken", "gBoUkAMoxoqIWfxWA5DuMQ");

    var mapContainer = document.getElementById("mapContainer");
              
    var map = new nokia.maps.map.Display(mapContainer, {
      center: [-26.909, -49.063],
      zoomLevel: 14,
      components: [
        // Mostra a barrinha de zoom in/out
        new nokia.maps.map.component.ZoomBar(), 
        // Adiciona métodos para fazer panning e scrool com mouse
        new nokia.maps.map.component.Behavior(),
        // Adiciona o botão que permite selecionar entre os modos satélite/vias
        new nokia.maps.map.component.TypeSelector(),
        // mostra um minimapa no canto inferior direito OPCIONAL
        new nokia.maps.map.component.Overview(), 
        // mostra a barra de escala no canto inferior direito
        new nokia.maps.map.component.ScaleBar(),
        /* Adiciona um botão que permite posicionar o mapa em sua atual localização
        * funciona apenas em browsers mais modernos
        */
        new nokia.maps.positioning.component.Positioning(),
        // Adiciona um menu contextual acessível pelo botão direito do mouse.  OPCIONAL
        new nokia.maps.map.component.ContextMenu()
      ]
    }); 
                          
  </script>

{% endhighlight %}

<h2>Resultado</h2>

<a href="/samples/mapsimple_sample.html" target="_blank">Página com exemplo completo</a>

<img src="/images_posts/mapsimple.png" width="900px" class="post_img" />
