var dataLists = [];
 var tata = ''
 var ul_ = document.getElementsByClassName('box1')[0]
 
 window.onload = function getData() {}
var ajax = new XMLHttpRequest() ||new ActiveXObject('Microsoft.XMLHTTP');
ajax .open('get','http://127.0.0.1:3000/play/new')
ajax .send();
ajax .onreadystatechange = function () {
    if (ajax.readyState == 4) {
    if (ajax.status == 200) {
        data = ajax.responseText;
dataLists = JSON.parse(data);
console.log(dataLists)
top1();
    }
else {
console.log('加载错误');
    }}}

function top1(){
   for(var item of dataLists){
    for(var item1 of item){
console.log(item1.img);

    tata +=`<li>
    <a href="">
        <img src="${item1.img}" alt="">
        <div class="info">
            <p class="description">
                ${item1.description}
                <span class="text">${item1.text}</span>
            </p>
            <div>
                <span class="price">${item1.price}</span>
                <div>
                    <span class="like">${item1.like}</span>
                    <span class="words">${item1.words}</span>
                </div>
            </div>
        </div>
    </a>
</li>`
    }
    ul_.innerHTML = '';
    ul_.innerHTML = tata;

}
}

var dataLists1 = [];
 var tata1 = ''
 var ul1 = document.getElementsByClassName('box1')[1]
window.onclink = function getData1() {}
var ajax = new XMLHttpRequest() ||new ActiveXObject('Microsoft.XMLHTTP');
ajax .open('get','http://127.0.0.1:3000/play/hot')
ajax .send();
ajax .onreadystatechange = function () {
    if (ajax.readyState == 4) {
    if (ajax.status == 200) {
        data = ajax.responseText;
dataLists1 = JSON.parse(data);
top2();
    }
else {
console.log('加载错误');
    }}}

function top2(){
   for(var item3 of dataLists1){
    for(var item2 of item3){
// console.log(item2.img);

    tata1 +=`<li>
    <a href="">
        <img src="${item2.img}" alt="">
        <div class="info">
            <p class="description">
                ${item2.description}
                <span class="text">${item2.text}</span>
            </p>
            <div>
                <span class="price">${item2.price}</span>
                <div>
                    <span class="like">${item2.like}</span>
                    <span class="words">${item2.words}</span>
                </div>
            </div>
        </div>
    </a>
</li>`
    }
    ul1.innerHTML = '';
    ul1.innerHTML = tata1;

}
}


var hit_=document.getElementsByClassName('hit');
var main_=document.getElementsByTagName('main');
// console.log(main_);
// console.log(hit_);
for(var i=0;i<hit_.length;i++){
    hit_[i].setAttribute('index',i);

    hit_[i].onclick=function(){
      var index=this.getAttribute('index');
      console.log(index);
        for(var j=0;j<hit_.length;j++){
            hit_[j].className = 'hit'
           
            hit_[index].className ='hit active'
         }
        // this.className='current';
        for(var i=0;i<main_.length;i++){
            main_[i].style.display='none';
            main_[index].style.display='block';
        }
     }
  }
// 查找显示隐藏对应的div
// var qq = document.getElementsByClassName('top411')
// // console.log(div1_);
// // 1.找到点击的  给每一个加一个下标
// var a = document.getElementsByClassName('top2qq')
// // console.log(a);
// for (var i = 0; i < a.length; i++) {
//     // 此时 每一个a标签 对应有一个下标 0 1
//     a[i].setAttribute('index', i);

//     // 当前a被点击时
//     a[i].onclick = function () {
//         //拿到被点击a的index 值 0  或者1 
//         var index = this.getAttribute('index');
//         console.log(index);
//         // 使用排他法  选中的内容 添加一个active属性 未选中的去除class属性
//         for (var j = 0; j < a.length; j++) {
//             a[j].className = 'top2qq';
//             a[index].className = 'top2qq one';
//         }

//         // 再次使用排他法  把对应a 对应的html进行显示隐藏
//         for (var k = 0; k < qq.length; k++) {
//             qq[k].style.display = 'none';
//             qq[index].style.display = 'block';
//         }
//     }
// }