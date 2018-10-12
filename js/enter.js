var login = (function(){

    return {
        init: function(ele) {
            // 获取form表单
            this.$ele = document.querySelector(ele);
            // 获取提交按钮
            this.$loginBtn = this.$ele['login-btn'];
            this.$usernameInp =   this.$ele['username'];
            this.$passwordInp =   this.$ele['password'];
            this.event();
        },
        event: function() {
            var _this = this;
            // 提交按钮
             this.$loginBtn.onkeydown = function(ev) {
            // keycode  不区分大小写, 返回大写的英文字母的ASCII编码
                      var keyCode = ev.keyCode || ev.which;
                      if(keyCode == 13) {
                          //{ 回车键的ASCII编码是13
                          get_ajax();
                      }
                  }  
            this.$loginBtn.onclick = function() {
                // 发送ajax，验证用户名和密码
                get_ajax();
               
            }
            var get_ajax = function(){
                 var params = {
                    method: "post",
                    data: {
                        username: _this.$usernameInp.value,
                        password: _this.$passwordInp.value
                    },
                    success: function(data) {
                        //数据格式有问题,修改下php返回来的数据格式
                        console.log(data);
                        
                        data = JSON.parse(data);
                        _this.loginSuccess(data);
                    }
                }
                sendAjax("http://localhost//myshop/shopstore/php/enter.php", params);
            }

        },
        loginSuccess: function(data) {
            if(data.code == 200) {
                document.cookie = "user-id=" + data.data.id;
                document.cookie = "token=" + data.data.token;
                localStorage.userImg = data.data.ataver;
                location.href = "index.html";
            } else {
                alert(data.msg);
            }
        }
    }

}())
