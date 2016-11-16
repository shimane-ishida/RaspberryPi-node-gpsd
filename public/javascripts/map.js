$(function (){
    var map = L.map('map').setView([35.384069, 132.764915], 12);

    L.tileLayer('/tiles/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
});

function onCreateMapMarker(LatLng){
    var d = new Date(LatLng.time); // UTCの日時
    L.marker([LatLng.lat, LatLng.lng]).addTo(map)
        .bindPopup('更新時間:'+d.utc2local())
        .openPopup();
}
