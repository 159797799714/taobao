
if(localStorage.length == 0){
	var arr = [];
	var id = 0;
}
else{
    var arr = [localStorage.arr];
    var id = localStorage.id ;
}
var add_char = (function () {
	var add = document.querySelector('.add_car');
	var no = document.querySelector('.no');
	var cancel = document.querySelector('.cancel');
	var shop_main = document.querySelector('.shop_main');
	var lesser = document.querySelector('.lesser');
	var adder = document.querySelector('.adder');
	var val_num = document.querySelector('.val_num');
	var sure = document.querySelector('.sure');
	var price = document.querySelector('.price');
	var img = document.querySelector('#photo1');
	var name = document.querySelector('.name');
	var src = img.src;
	var a = price.innerHTML.split('.');
	var b = (a[0].match(/\d+/g));
	var [p] = b;
	var pri = Number(p);
	add.onclick = function () {
		val_num.value = 1;
		shop_main.style.display = 'block';
		no.onclick = function () {
			shop_main.style.display = 'none';
		}
		cancel.onclick = function () {
			shop_main.style.display = 'none';
		}
		lesser.onclick = function () {
			if (val_num.value > 1) {
				val_num.value--;
			}
			else {
				val_num.value = 1;
			}
		}
		adder.onclick = function () {
			val_num.value++;
		}
		sure.onclick = function () {
			var data ={
				price:pri,
				num:val_num.value,
				src:src,
				name:name.innerHTML,
				id:id
			}
			id ++;
			data = JSON.stringify(data);
			arr.push(data);
			localStorage.arr = arr;
			shop_main.style.display = 'none';
			console.log(localStorage.arr);
		}
	}


}())