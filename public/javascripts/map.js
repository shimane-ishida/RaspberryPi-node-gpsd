var map;
$(function (){
    map = L.map('map').setView([35.384069, 132.764915], 12);

    L.tileLayer('/tiles/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
});

function onCreateMapMarker(LatLon){
    var d = new Date(LatLon.time); // UTCの日時
    d.utc2local()
    L.marker([LatLon.lat, LatLon.lon]).addTo(map)
        .bindPopup('更新時間:'+d.getHours())
        .openPopup();
}
