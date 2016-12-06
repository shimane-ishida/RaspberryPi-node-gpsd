$(function (){
    var DefaultZoom = 16;
    var MinZoom = 15;
    var MaxZoom = 17;
    map = L.map('map',{
        center:[35.3846096,132.764914],
        zoom: DefaultZoom,
        minZoom: MinZoom,
        maxZoom: MaxZoom
    });

    MarkerLayer = new L.layerGroup();
    L.tileLayer('/tiles/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    getCSV();

});

function onCreateMapMarker(LatLon){
    console.log(LatLon);

    var markers = [];
    if(MarkerLayer.getLayers !=0 ){
        MarkerLayer.clearLayers();
    }
    var date = new Date(LatLon.time);
    var marker = new L.Marker([LatLon.lat, LatLon.lon]);
    var popup = L.popup({
       closeButton: false,
       closeOnClick: false
    })
        .setContent('<p>更新時間:'+date.toLocaleString()+'</p>')
        .setLatLng([LatLon.lat,LatLon.lon]);
    marker.bindPopup(popup);
    markers.push(marker);
    var markerlayer = new L.layerGroup(markers).addTo(this.map);
    MarkerLayer = markerlayer;
    map.panTo([LatLon.lat,LatLon.lon]);
    
}
