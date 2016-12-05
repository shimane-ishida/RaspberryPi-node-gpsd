$(function(){
    getCSV();
});

function getCSV(){
    $.ajax({
        url: '../img/fileList.csv',
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
    onCreateMapMarker(result);

}

function onCreateMapMarker(FileArray){
    
    var markers = [];
    console.log(FileArray);

    for(i=0;i<FileArray.length;i++){
        var marker = new L.Marker([FileArray[i][0],FileArray[i][1]]);
        var strContents ='<div><img src="img/'+FileArray[i][2]+'" width="60" height="60"></div>';
        strContents += FileArray[i][3];
        var popup = L.popup({
            loseButton: false,
            closeOnClick: false
        })
            .setContent(strContents)
            .setLatLng([FileArray[i][0],FileArray[i][1]]);
        marker.bindPopup(popup);
        markers.push(marker);
    }
    var markerlayer = new L.layerGroup(markers).addTo(this.map);    
}