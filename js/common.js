


$(function(){//jqueryのお約束

// CANVASを定義
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//変数と定数を事前に宣言
const cnvWidth = 500;
const cnvHeight = 300;
let cnvColor = "red";
let cnvLineWidth = 5;
let clickFlag = 0;
let bgColor = "white";

function setBgColor(){
    ctx.fillStyle = bgColor;
    ctx.fillRect(0,0, cnvWidth, cnvHeight);
}

setBgColor();

$("#canvas").mousedown(function(){
    clickFlag = 1;
  }).mouseup(function(){
    clickFlag = 0;
  }).mousemove(function(e){
     if(!clickFlag) return false;
     draw(e.offsetX,e.offsetY);
  });


function draw(x,y){
    ctx.lineWidth = cnvLineWidth;
    ctx.strokeStyle = cnvColor;

    if (clickFlag == "1"){
        clickFlag = "2";
        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
    }
    ctx.stroke();
}

$(".color a").click(function(){
    cnvColor = $(this).data("color");
    return false;
})

$(".weight a").click(function(){
    cnvLineWidth = $(this).data("weight");
    return false;
})

$("#clear").click(function(){
    ctx.clearRect(0, 0, cnvWidth, cnvHeight);
    setBgColor();
})

$("#download").click(function(){
    var canvas = document.getElementById("canvas");
    var base64 = canvas.toDataURL("image/jpag");
    document.getElementById("download").href = base64;
});



})//jqueryのお約束




// ctx.fillStyle = 'orange';  //塗りつぶしの色
// ctx.fillRect(125,25,50,50);//描画 四角形で埋める(x座標、y座標、幅、高さ)

// ctx.strokeStyle = 'blue';//線の色
// ctx.lineWidht = 5;//線の太さ
// ctx.strokeRect(125,50,50,50);//描画 四角形で線をひく(x座標、y座標、幅、高さ)

// ctx.fillText("りんご紅茶のみたい",125,100);