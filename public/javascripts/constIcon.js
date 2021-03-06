var ICONDIR = "../img/icon/";
var IMGLISTDIR = "../img/list/";

var ICON_COMPANY = L.icon({
    iconUrl: ICONDIR+'mapicons01-022.png',
    iconRetinaUrl: ICONDIR+'mapicons01-022.png',
    iconSize: [30, 30],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
});
var ICON_DANGER = L.icon({
    iconUrl: ICONDIR+'mapicons01-062.png',
    iconRetinaUrl: ICONDIR+'mapicons01-062.png',
    iconSize: [30, 30],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
});
var ICON_OTHER = L.icon({
    iconUrl: ICONDIR+'mapicons01-111.png',
    iconRetinaUrl: ICONDIR+'mapicons01-111.png',
    iconSize: [30, 30],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
});

var Icon = {"company":ICON_COMPANY,"danger":ICON_DANGER,"other":ICON_OTHER};