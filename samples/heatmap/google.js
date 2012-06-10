var map;


function initialize() {

map = new google.maps.Map(document.getElementById('map_canvas'), {
        center: new google.maps.LatLng(10, -100),
        zoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

var layer = new google.maps.FusionTablesLayer({
        query: {
          select: 'location',
          from: '1xWyeuAhIFK_aED1ikkQEGmR8mINSCJO9Vq-BPQ'
        },
        heatmap: {
          enabled: true
        }
      });

layer.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);