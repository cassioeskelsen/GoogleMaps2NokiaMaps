function nokiaMaps()
{
    nokia.Settings.set( "appId", "_peU-uCkp-j8ovkzFGNU"); 
    nokia.Settings.set( "authenticationToken", "gBoUkAMoxoqIWfxWA5DuMQ");

    // Get the DOM node to which we will append the map
    var mapContainer = document.getElementById("mapContainer");

    // Create a map inside the map container DOM node
    var map = new nokia.maps.map.Display(mapContainer, {
      components: [
        // Add the behavior component to allow panning / zooming of the map
        new nokia.maps.map.component.Behavior()
      ],
      zoomLevel: 2
    });

    var heatmapProvider;
    try {
      // Creating Heatmap overlay
      heatmapProvider = new nokia.maps.heatmap.Overlay({
        // This is the greatest zoom level for which the overlay will provide tiles
        max: 20,
        // This is the overall opacity applied to this overlay
        opacity: 0.6,
        // Defines if our heatmap is value or density based
        type: "value",
        // Coarseness defines the resolution with which the heat map is created.
        coarseness: 2
      });
    } catch (e) {
      // The heat map overlay constructor throws an exception if there
      // is no canvas support in the browser
      alert(e);
    }
    // Only start loading data if the heat map overlay was successfully created
    if (heatmapProvider) {
      /* We load a data file containing data points for the heat map
       * LoadScript is an helper function and not part of the Nokia Maps API
       * See exampleHelpers.js for implementation details 
       */
      loadScript(
        "earthquakes.js", 
        function () {
          /**
           * Filtering data to show only eartquakes with magnitud above 1.5. Variable data comes from script inserted in head (heatmap.js)
           * This file is array of objects like:
           * data = [
           *    {latitude: 53, longitude: 13: value 5.3},
           *    ....
           * ];
           */
          for (var i = 0; i < data.length; i++) {
            if (data[i].value < 1.5) {
              data.splice(i, 1);
            }
          }
          
          // Rendering the heat map overlay onto the map
          heatmapProvider.addData(data);
          map.overlays.add(heatmapProvider);
        }
      );
    }
}