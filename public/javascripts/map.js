$(function (){
    map = L.map('map').setView([35.384069, 132.764915], 17);
    MarkerLayer = new L.layerGroup();
    L.tileLayer('/tiles/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
//    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//    }).addTo(map);
});

function onCreateMapMarker(LatLon){
      var markers = [];
//    console.log(MarkerLayer.getLayers().length);
    if(MarkerLayer.getLayers !=0 ){
        MarkerLayer.clearLayers();
    }
    var date = new Date(LatLon.time);
    var marker = new L.Marker([LatLon.lat, LatLon.lon]);
    var popup = L.popup({
       closeButton: false,
       closeOnClick: false
    })
        .setContent('<p>更新時間:'+date.toLocaleString()+'<p>')
        .setLatLng([LatLon.lat,LatLon.lon]);
    marker.bindPopup(popup);
    markers.push(marker);
    var markerlayer = new L.layerGroup(markers).addTo(this.map);
    MarkerLayer = markerlayer;
    map.panTo([LatLon.lat,LatLon.lon]);
    
}
