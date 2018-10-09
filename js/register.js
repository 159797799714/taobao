var swiper = (function () {
    var slice = document.querySelector('.slice');
    var slice_span = document.querySelector('.slice_span');
    var small = document.querySelector('.small');
    var sus = document.querySelector('.success');
    var btn = document.querySelector('.btn');
    var ipt_num = document.querySelector('.phone');
    var idea = document.querySelector('.idea');
    var idea2 = document.querySelector('.idea2');
    var maxL = slice_span.clientWidth - small.offsetWidth;
    var _x = 0;
    ipt_num.onblur = function () {
                    var reg1 = /^[1][345789]\d{9}/;
                    var val = Number(ipt_num.value);
                    var s = reg1.test(val);
                    if (s) {
                        idea2.style.display = 'block';
                    }
                    else {
                        idea.style.display = 'block';
                    }
    }
    small.onmousedown = function (e) {
        e = e || window.event;
        var x = e.offsetX;
        slice_span.onmousemove = function (ev) {
            ev = ev || window.event;
            _x = ev.pageX - x - slice_span.offsetLeft - slice.offsetLeft - slice_span.clientLeft - slice.clientLeft;
            if (_x < 0) {
                small.style.left = 0 + 'px';
            }
            else if (_x > maxL) {
                small.style.left = maxL + 'px';
                slice_span.style.background = '#7ac23c';
                slice_span.innerHTML = '验证通过';
                slice_span.style.border = '1px solid gray';
                sus.style.display = 'block';
                slice_span.style.color = 'white';
                btn.style.background = 'red';
                btn.style.color = 'white';
                btn.onclick = function () {
                    location.href = 'register2.html';
                }
            }
            else {
                small.style.left = _x + 'px';
            }
        }
    }
    small.onmouseup = function () {
        var timer = null;
        slice_span.onmousemove = null;
        timer = setInterval(function () {
            _x -= 5;
            small.style.left = _x + 'px';
            if (_x <= 0) {
                clearInterval(timer);
                small.style.left = 0 + 'px';
            }
        }, 10)
    }

}())
