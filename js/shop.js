
var arr2 = [];
var item_li = document.querySelector('.item_li');
var getLocalStorage = (function () {
    // console.log(localStorage.arr);
    var a = (localStorage.arr).split(',{');
    for (var i = 0; i < a.length; i++) {
        if (i >= 1) {
            a[i] = '{' + a[i];
        }
        b = JSON.parse(a[i]);
        arr2.push(b);
        var img_innerHTML = '<img src="' + arr2[i].src + '">';
        var name_innerHTML = arr2[i].name;
        var price_innerHTML = '￥' + arr2[i].price;
        var all_innerHTML = '￥' + Number(arr2[i].num) * Number(arr2[i].price);
        var newUl = document.createElement('ul');
        newUl.setAttribute("class", 'item_clear' + ' ' + i);
        var str = `<li class="select"><i></i></li>
        <li class="item_img">${img_innerHTML}</li>
        <li class="item_name">${name_innerHTML}</li>
        <li class="item_weight"></li>
        <li class="item_price">${price_innerHTML}</li>
        <li class="item_num">
            <div class="num">
                <button class="lesser">-</button>
                <input class="val_num" type="text" value="1">
                <button class="adder">+</button>
            </div>
        </li>
        <li class="all_price">${all_innerHTML}</li>
        <li class="item_control">
            <a class="keep">加入收藏夹</a>
            <a class="kill">删除</a>
        </li>`;
        newUl.innerHTML = str;
        item_li.appendChild(newUl);
        var num = document.querySelector('.val_num');
        num.value = arr2[i].num;
        // console.log(arr2[i].num)

        // var lesser = document.querySelector('.lesser');
        // var adder = document.querySelector('.adder');
        // var kill = document.querySelector('.kill');
        // lesser.onclick = function () {
        //     if (num.value > 1) {
        //         num.value--;

        //     }
        //     else {
        //         num.value = 1;
        //     }
        //     // all_price.innerHTML = '￥' + Number(num.value) * Number(arr2.price);
        //     // //通过判断结算是否为橙色来判断是否选择商品
        //     // if (sum_pay.style.background == 'orangered') {
        //     //     harmony.innerHTML = all_price.innerHTML;
        //     //     sum.innerHTML = all_price.innerHTML;
        //     // }
        // }
        // //添加
        // adder.onclick = function () {
        //     num.value++;
        //     // all_price.innerHTML = '￥' + Number(num.value) * Number(arr2.price);
        //     // if (sum_pay.style.background == 'orangered') {
        //     //     harmony.innerHTML = all_price.innerHTML;
        //     //     sum.innerHTML = all_price.innerHTML;
        //     // }
        // }
        // kill.onclick = function () {
        //                 newUl.remove();
        //                 localStorage.clear();
        //                 console.log('删除了DOM元素');
        //                 // sum_pay.style.background = '#ccc';
        //                 // settle.style.background = '#ccc';
        //                 // harmony.innerHTML = '0.00';
        //                 // sum.innerHTML = '0.00';
        //                 // sel_sum.firstElementChild.innerHTML = '0';
        //             }

    }
    var lesser = document.querySelector('.lesser');
        var adder = document.querySelector('.adder');
        var kill = document.querySelector('.kill');
        lesser.onclick = function () {
            if (num.value > 1) {
                num.value--;

            }
            else {
                num.value = 1;
            }
            // all_price.innerHTML = '￥' + Number(num.value) * Number(arr2.price);
            // //通过判断结算是否为橙色来判断是否选择商品
            // if (sum_pay.style.background == 'orangered') {
            //     harmony.innerHTML = all_price.innerHTML;
            //     sum.innerHTML = all_price.innerHTML;
            // }
        }
        //添加
        adder.onclick = function () {
            num.value++;
            // all_price.innerHTML = '￥' + Number(num.value) * Number(arr2.price);
            // if (sum_pay.style.background == 'orangered') {
            //     harmony.innerHTML = all_price.innerHTML;
            //     sum.innerHTML = all_price.innerHTML;
            // }
        }
        kill.onclick = function () {
                        newUl.remove();
                        localStorage.clear();
                        console.log('删除了DOM元素');
                        // sum_pay.style.background = '#ccc';
                        // settle.style.background = '#ccc';
                        // harmony.innerHTML = '0.00';
                        // sum.innerHTML = '0.00';
                        // sel_sum.firstElementChild.innerHTML = '0';
                    }




    // arr = localStorage.arr.split(',');
    // arr2 = arr;
    // console.log(arr2);
    // for(var i in a){
    //     console.log(i)
    // }
    // var main = document.querySelector('.main');
    // var item_li = document.querySelector('.item_li');
    // //判断详情页是点击传入数据到localSrorage
    // if (a.length != 0) {
    //     //在主页面下添加商品详情ul
    //     var img_innerHTML = '<img src="' + a.src + '">';
    //     var name_innerHTML = a.name;
    //     var price_innerHTML = '￥' + a.price;
    //     var all_innerHTML = '￥' + Number(a.num) * Number(a.price);
    //     function addul() {
    //         var newUl = document.createElement('ul');
    //         newUl.setAttribute("class", 'item_clear');
    //         var str = `<li class="select"><i></i></li>
    //     <li class="item_img">${img_innerHTML}</li>
    //     <li class="item_name">${name_innerHTML}</li>
    //     <li class="item_weight"></li>
    //     <li class="item_price">${price_innerHTML}</li>
    //     <li class="item_num">
    //         <div class="num">
    //             <button class="lesser">-</button>
    //             <input class="val_num" type="text" value="1">
    //             <button class="adder">+</button>
    //         </div>
    //     </li>
    //     <li class="all_price">${all_innerHTML}</li>
    //     <li class="item_control">
    //         <a class="keep">加入收藏夹</a>
    //         <a class="kill">删除</a>
    //     </li>`;
    //         newUl.innerHTML = str;
    //         item_li.appendChild(newUl);
    //         var num = document.querySelector('.val_num');
    //         num.value = a.num;
    //         var childAll = item_li.children;
    //         var item_clear = document.querySelector('.item_clear');
    //         var item_select = document.querySelector('.select');
    //         var val = document.querySelector('.val_num');
    //         var kill = document.querySelector('.kill');
    //         var all_price = document.querySelector('.all_price');
    //         var item_control = document.querySelector('.item_control');
    //         var lesser = document.querySelector('.lesser');
    //         var adder = document.querySelector('.adder');
    //         //减少，最小为1
    //         lesser.onclick = function () {
    //             if (val.value > 1) {
    //                 val.value--;
    //             }
    //             else {
    //                 val.value = 1;
    //             }
    //             all_price.innerHTML = '￥' + Number(val.value) * Number(a.price);
    //             //通过判断结算是否为橙色来判断是否选择商品
    //             if (sum_pay.style.background == 'orangered') {
    //                 harmony.innerHTML = all_price.innerHTML;
    //                 sum.innerHTML = all_price.innerHTML;
    //             }
    //         }
    //         //添加
    //         adder.onclick = function () {
    //             val.value++;
    //             all_price.innerHTML = '￥' + Number(val.value) * Number(a.price);
    //             if (sum_pay.style.background == 'orangered') {
    //                 harmony.innerHTML = all_price.innerHTML;
    //                 sum.innerHTML = all_price.innerHTML;
    //             }
    //         }
    //         //删除
    //         kill.onclick = function () {
    //             newUl.remove();
    //             localStorage.clear();
    //             console.log('删除了DOM元素');
    //             sum_pay.style.background = '#ccc';
    //             settle.style.background = '#ccc';
    //             harmony.innerHTML = '0.00';
    //             sum.innerHTML = '0.00';
    //             sel_sum.firstElementChild.innerHTML = '0';
    //         }
    //         //点击选框
    //         var sum_pay = document.querySelector('.sum_pay');
    //         var settle = document.querySelector('.settle');
    //         var harmony = document.querySelector('.harmony');
    //         var sum = document.querySelector('.sum');
    //         var sel_sum = document.querySelector('.sel_sum');
    //         item_select.onclick = function () {
    //             if (item_select.innerHTML == '<i></i>') {
    //                 item_select.innerHTML = '<i>✔</i>';
    //                 sum_pay.style.background = 'orangered';
    //                 settle.style.background = 'orangered';
    //                 harmony.innerHTML = all_price.innerHTML;
    //                 sum.innerHTML = all_price.innerHTML;
    //                 sel_sum.firstElementChild.innerHTML = '1';
    //             }
    //             else {
    //                 item_select.innerHTML = '<i></i>';
    //                 sum_pay.style.background = '#ccc';
    //                 settle.style.background = '#ccc';
    //                 harmony.innerHTML = '0.00';
    //                 sum.innerHTML = '0.00';
    //                 sel_sum.firstElementChild.innerHTML = '0';
    //             }
    //         }
    //     }
    //     addul();
    // }

}())