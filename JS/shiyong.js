// 排他法
// 查找显示隐藏对应的div
var qq = document.getElementsByClassName('top411')
// console.log(div1_);
// 1.找到点击的  给每一个加一个下标
var a = document.getElementsByClassName('top2qq')
// console.log(a);
for (var i = 0; i < a.length; i++) {
    // 此时 每一个a标签 对应有一个下标 0 1
    a[i].setAttribute('index', i);

    // 当前a被点击时
    a[i].onclick = function () {
        //拿到被点击a的index 值 0  或者1 
        var index = this.getAttribute('index');
        console.log(index);
        // 使用排他法  选中的内容 添加一个active属性 未选中的去除class属性
        for (var j = 0; j < a.length; j++) {
            a[j].className = 'top2qq';
            a[index].className = 'top2qq one';
        }

        // 再次使用排他法  把对应a 对应的html进行显示隐藏
        for (var k = 0; k < qq.length; k++) {
            qq[k].style.display = 'none';
            qq[index].style.display = 'block';
        }
    }
}
//  排他法
// 查找显示隐藏对应的div
var ag = document.getElementsByClassName('top4one')
// 1.找到点击的  给每一个加一个下标
var dianji = document.getElementsByClassName('af')
for (var i = 0; i < dianji.length; i++) {

    dianji[i].setAttribute('index', i);

    // 当前a被点击时
    dianji[i].onclick = function () {
        //拿到被点击a的index 值 0  或者1 
        var index = this.getAttribute('index');
        console.log(index);
        // 使用排他法  选中的内容 添加一个active属性 未选中的去除class属性
        for (var j = 0; j < dianji.length; j++) {
            dianji[j].className = 'af';
            dianji[index].className = 'af one';
        }

        // 再次使用排他法  把对应a 对应的html进行显示隐藏
        for (var k = 0; k < ag.length; k++) {
            ag[k].style.display = 'none';
            ag[index].style.display = 'block';
        }
    }
}




//请求数据
// 创建对象
var goodList = []
var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microft.XMLHTTP')
ajax_.open('get', 'http://127.0.0.1:3000/useing/public')
ajax_.send()
var items = document.getElementsByClassName('top4one')[0]
var goodlist = '';
ajax_.onreadystatechange = function () {
    var str = ''
    if (ajax_.readyState == 4) {
        if (ajax_.status == 200) {
            var json_ = ajax_.responseText;
            json_ = JSON.parse(json_);
            goodList = json_
            // console.log(goodList);
            for (var item of goodList) {
                str += `
                <div class="top5one">
                <a href="">
                    <span class="span1">${item.info_ty}</span>
                    <img src="${item.img}" alt="">
                    <div class="top5two">
                        <h2 class="name">${item.text}</h2>
                        <p class="top5three">
                            <span class="span2">${item.totalnum}</span>
                            <span class="span2">${item.num}</span>
                        </p>

                        <p class="top5three top5threecc">
                            <span class="span3">${item.apply}</span> 申请
                        </p>
                        <p class="top5three top5threerr">报告数量：${item.num}</p>
                    </div>

                </a>
            </div>
                `
            }
        }
    }
    items.innerHTML = str
}
// -----------------------------

// ------------体验师--------------------------
//请求数据
// 创建对象
var arr = []
var ajax = new XMLHttpRequest() || new ActiveXObject('Microft.XMLHTTP')
ajax.open('get', 'http://127.0.0.1:3000/useing/master')
ajax.send()
var it = document.getElementsByClassName('rr')[0]
var goodlist = '';
ajax.onreadystatechange = function () {
    var st = ''
    if (ajax.readyState == 4) {
        if (ajax.status == 200) {
            var json = ajax.responseText;
            json = JSON.parse(json);
            arr = json
            // console.log(goodList);
            console.log(arr);
            for (var item of arr) {
                st += `
                <div class="yy">
                <a href="" class="a_">
                    <span class="span11">${item.info_ty}</span>
                    <img src="${item.img}" alt="">
                    <div class="top5twoo">
                        <h2 class="namee">${item.text}</h2>
                        <p class="top5threee">
                            <span class="span22">${item.totalnum}</span>
                            <span class="span22">${item.num}</span>
                        </p>

                        <p class="top5three top5threeccc">
                            <span class="span33">${item.apply}</span>:申请
                        </p>
                        <p class="top5three top5threerrr">${item.endTime}：8</p>
                    </div>

                </a>
            </div>
                `
            }
        }
    }
    it.innerHTML = st
}