function nokiaMaps()
{
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