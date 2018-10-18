
if (localStorage.length == 0) {
	var arr = [];
	var id = 0;
}
else {
	var arr = [localStorage.arr];
	var id = localStorage.id;
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
	var store = document.querySelector('.store');
	var ware_head = document.querySelector('.ware_head');
	var src = img.src;
	var a = price.innerHTML.split('.');
	var b = (a[0].match(/\d+/g));
	var [p] = b;
	var pri = Number(p);
	window.onscroll = function(){
		var t = document.documentElement.scrollTop;
		console.log(t)
		if(t>=650){
			store.style.position = 'fixed';
			store.style.top = '0px';
			ware_head.style.position = 'fixed';
			ware_head.style.top = '0px';
		}
		else{
			store.style.position = 'absolute';
			store.style.top = '650px';
			ware_head.style.position = 'relative';
			ware_head.style.top = '0px';
		}
	}
	add.onclick = function () {
		localStorage.clear();
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
			var data = {
				price: pri,
				num: val_num.value,
				src: src,
				name: name.innerHTML,
				id: id
			}
			id++;
			data = JSON.stringify(data);
			arr.push(data);
			localStorage.arr = arr;
			shop_main.style.display = 'none';
			console.log(arr);
		}
	}

	}())