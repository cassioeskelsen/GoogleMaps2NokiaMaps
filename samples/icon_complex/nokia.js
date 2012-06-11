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
                    icon: "../../images_posts/beachflag.png",
                    // The anchor for this image is the base of the flagpole at 0,32.
                    anchor: new nokia.maps.util.Point(0, 32) });

    map.objects.add(marker);
  };

}