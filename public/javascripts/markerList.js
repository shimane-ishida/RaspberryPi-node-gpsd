function getCSV(){
    $.ajax({
        url: IMGLISTDIR+'fileList.csv',
        success: function(data){
            convertCSVtoArray(data);
        },
        error:function(data) {

        }
    });
}

function convertCSVtoArray(str){
    var result = [];
    var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
 
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for(var i=0;i<tmp.length;++i){
        result[i] = tmp[i].split(',');
    }
    onCreateBuildMarker(result);

}

function onCreateBuildMarker(FileArray){
    
    var markers = [];

    for(i=0;i<FileArray.length;i++){
        var icon;
        icon = getIcon(FileArray[i][4]);
        var buildingMarker = new L.Marker([FileArray[i][0],FileArray[i][1]],{ icon: icon });
        var strContents ='<div><img src="'+IMGLISTDIR+FileArray[i][2]+'" width="60" height="60"></div>';
        strContents += FileArray[i][3];
        var popup = L.popup({
            loseButton: false,
            closeOnClick: false
        })
            .setContent(strContents)
            .setLatLng([FileArray[i][0],FileArray[i][1]]);
        buildingMarker.bindPopup(popup);
        markers.push(buildingMarker);
    }
    var markerlayer = new L.layerGroup(markers).addTo(this.map);    
}

function getIcon(strKey){
    var res = ICON_OTHER;
    Object.keys(Icon).forEach(function(key){
        if(strKey == key){ 
            res = this[key];
        }
    },Icon);
    return res;
}