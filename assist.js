
var arr=[imgs[0],imgs[1],imgs[2],imgs[3]];
var newarr=[];
function _2048(arr){
    for(var i=0;i<arr.length;i++){
    var j=i+1;
        if(arr[j]==0){
        newarr.push(arr[j]);
        newarr.push(arr[i]);
        }else{
        alert("无路可走了！");
        }
    }
}
let imgs=document.querySelectorAll('img');
let newValue=[];
doucument.onkeydown=function(e){
switch(e.keyCode){
    case 37:
        //左
        run();
    case 38:
        //上
    case 39:
        //右
    case 40:
       //下
        }
}
function run(){
    let newValue=_2048(
        imgs[0].getAttribute('value'),
        imgs[1].getAttribute('value'),
        imgs[2].getAttribute('value'),
        imgs[4].getAttribute('value'));
    
    imgs[0].setAttribute('value',newValue[0]);
    imgs[1].setAttribute('value',newValue[1]);
    imgs[2].setAttribute('value',newValue[2]);
    imgs[3].setAttribute('value',newValue[3]);

    imgs[0].src='image/'+newValue[0]+'.jpg';
    imgs[1].src='image/'+newValue[1]+'.jpg';
    imgs[2].src='image/'+newValue[2]+'.jpg';
    imgs[3].src='image/'+newValue[3]+'.jpg';
}
