var save_pass = (function(){
	var pass1 = document.querySelector('.pass_one');
    var pass2 = document.querySelector('.pass_two');
    var save = document.querySelector('.save')
    var btn = document.querySelector('.but');
    pass2.onblur = function(){
    	if(pass1.value == pass2.value && pass1.value != null){
    	    
    	}
    	else{
    		save.style.visibility = 'visible';
    	}
    }
	
}())
var register = (function(){

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
            // 注册按钮
            this.$loginBtn.onclick = function() {
                // 发送ajax，验证用户名和密码
                var params = {
                    method: 'post',
                    data: {
                        username: _this.$usernameInp.value,
                        password: _this.$passwordInp.value
                    },
                    success: function(data) {
                        data = JSON.parse(data);
                        _this.loginSuccess(data);
                    }
                }
                sendAjax('http://localhost/myshop/php/register.php', params);
            }
            this.$usernameInp.onchange = function(){
                var params = {
                    data: {
                        username: _this.$usernameInp.value
                    },
                    success: function(data) {
                        data = JSON.parse(data);
                        _this.checkName(data);
                    }
                }
                sendAjax('http://localhost/myshop/php/check_username.php', params);
            }
        },
        checkName: function(data) {
            if(data.code == 200) {
                // 用户名称不存在
            } else {
                // 用户名称存在
            }
        },
        loginSuccess: function(data) {
            if(data.code == 200) {
                alert('注册成功，点击去登录');
                location.href = 'enter.html';
            } else {
                alert(data.msg);
            }
        }
    }

}())


