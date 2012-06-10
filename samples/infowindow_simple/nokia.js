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