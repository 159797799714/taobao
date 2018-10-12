var baiduInput = (function(){
    var timer = null;
    return {
        init: function(ele) {
            this.$ele = document.querySelector(ele);
            this.$inputSearch = this.$ele.querySelector('input');
            this.$listTipsBox = this.$ele.querySelector('.search-list');
            this.event();
        },
        event:function(){
            var _this = this;
            this.$inputSearch.onfocus = function() {
                // 判断文本内是否有文字,如果有就显示下拉框
                _this.checkInput();
                _this.getData();
            }
            this.$inputSearch.oninput = function() {
                //判断文本内容为空, 隐藏下拉框,如果有文字显示下拉框
                _this.checkInput();
                clearInterval(timer);
                // 目的: 减少http请求, 降低对服务器的压力
                timer = setTimeout(function() {
                    _this.getData();
                }, 500)
                // 根据输入的内容,获取下拉框数据, 并渲染到下拉框中

            },
            document.onclick = function(e) {
                if(e.target !== _this.$inputSearch) {
                    // 如果点击的不是搜索框, 让搜索框中的下拉框隐藏
                    _this.listShow();
                }
            }
            // this.$inputSearch.onblur = function() {
            // }
            // 利用事件委托给每一个li添加点击事件
            this.$listTipsBox.onclick = function(e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName === 'LI') {
                    // 把li上面的文本赋值给文本框
                    _this.$inputSearch.value = target.innerHTML;
                    _this.listShow();
                    // 隐藏下拉框
                }
            }
        },
        listShow: function(val) {
            val = val || 'none';
            this.$listTipsBox.style.display = val;
        },
        checkInput: function(val) {
            // 获取文本框的值
            val = val || this.$inputSearch.value;
            if(val === '') {
                this.listShow();
            } else {
                this.listShow('block');
            }
        },
        getData: function(val) {
            if (val === '') return;
            val = val || this.$inputSearch.value;
            var params = {
                wd: val,
                cb: "baiduInput.insertData"
            }
            jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su', params);
        },
        insertData: function(data) {
            data = data.s;
            data = data.map(function(x) {
                return "<li>" + x + "</li>";
            })
            this.$listTipsBox.innerHTML = data.join('');
            // console.log(data);
        }

    }
}())