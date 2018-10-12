var add_char = (function(){
	var add = document.querySelector('.add_car');
	var no = document.querySelector('.no');
	var shop_main = document.querySelector('.shop_main');
	var lesser =document.querySelector('.lesser');
	var adder =document.querySelector('.adder');
	var val_num = document.querySelector('.val_num');
	add.onclick = function(){
		shop_main.style.display = 'block';
		no.onclick = function(){
			shop_main.style.display = 'none';
		}
		lesser.onclick =function(){
			if(val_num.value > 1){
				val_num.value--;
			}
			else{
				val_num.value = 1;
			}
		}
		adder.onclick = function(){
			val_num.value++;
		}
	}
}())
