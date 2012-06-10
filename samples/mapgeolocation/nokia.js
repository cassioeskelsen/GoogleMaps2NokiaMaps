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
    zoomLevel: 18,
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