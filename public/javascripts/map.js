$(function (){
    map = L.map('map').setView([35.384069, 132.764915], 12);

    L.tileLayer('/tiles/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
});

function onCreateMapMarker(LatLon){
    if (_this.marker_list.length != 0) {
        // マーカーのクリア
        _this.marker_list.forEach(function(gmaker, idx) {
        });
    }
    var date = new Date(LatLon.time);

    var marker = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([LatLon.lat, LatLon.lon])),
        name: '更新時間:'+date.toLocaleString(), // 車両名
    });
    var vectorLayer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [marker],
            attributions: ['Icon desigined by <a href="http://www.flaticon.com/free-icon/snowplow_226399">Madebyoliver from Flaticon</a>'],
        }),
        style: new ol.style.Style({
            image: new ol.style.Icon({
                anchor: [0.5, 1], // 基準をアイコンの左右真ん中・下端とする
            })
        }),
        mail: "",
        type: 'marker'

    });
    this.map.addLayer(vectorLayer);
    this.marker_list.push(marker);

    // var map = L.marker([LatLon.lat, LatLon.lon]).addTo(map)
    //     .bindPopup('更新時間:'+date.toLocaleString())
    //     .openPopup();
}
