var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public")); // 1
// .use() 메서드는 서버에 요청이 올 때마다 무조건 콜백함수가 실행됨
// __dirname은 node.js에서 프로그램이 실행중인 파일의 위치를 나타내는 글로벌 변수임.
// >> 위의 코드는 '현재_위치/public' route를 static폴더로 지정하라는 명령어

var port = 3000;
app.listen(port, function () {
    console.log(`server on! http://localhost` + port);
});
