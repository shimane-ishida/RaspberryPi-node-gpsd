var socket = io.connect();

// WebSocketでの接続
socket.on('connect', function(msg) {
    console.log("connect");
    $('#connectId').html('接続ID::' + socket.socket.transport.sessid);
    $('#type').html('接続方式::' + socket.socket.transport.name);
});

// メッセージを受けたとき
socket.on('message', function(msg) {
    // メッセージを画面に表示する
    var obj = msg.value;
    $('#receiveMsg').prepend(obj.lat + '<br>');
});

var pase = function(args){
    var res = Object;

    return res;
}