var goodsList = [];
var num = document.getElementsByTagName('img')[0];
var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTT');
ajax_.open('get', "http://127.0.0.1:3000/guid/hot ", true);
ajax_.send();
ajax_.onreadystatechange = function () {
    if (ajax_.readyState == 4) {
        if (ajax_.status == 200) {
            // console.log(JSON.stringify(ajax_.responseText));
            // JSON.parse(ajax_.responseText);
            goodsList = JSON.parse(ajax_.responseText);
            console.log(goodsList);
            showData();







        }

    }
}

function showData() {

    var str = '';
    var daogo_ = document.getElementsByTagName('ul')[1];
    // var ul = document.createElement('ul');
    // ul.setAttribute('class', 'box1');
    for (var item_ of goodsList) {
        console.log('-------展示数据1--------');
        // console.log(item_);
        // console.log(item[0].img);
        // for (var itemChild of item_) {
        //     console.log(itemChild);
        str += `<li>
            <img src='${item_.img}'>
            <p>${item_.text}</p>
            <span>
            <img src=${src = "../img/icon/reply.png"}>3
            <img src=${"../img/icon/xin.png"}>3
            </span>
            <img src=${"../img/icon/listbg.jpg"}>
           
           
        </li>`;

    }

    console.log('=============str===========');
    console.log(str);

    daogo_.innerHTML += str;
    //     document.querySelector('body').appendChild(ul);
}

showData();