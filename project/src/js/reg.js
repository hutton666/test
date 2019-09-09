/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 13:58:22
 * @LastEditTime: 2019-09-06 18:54:30
 * @LastEditors: Please set LastEditors
 */
(function() {
	let txt1 = document.getElementById('phone'); //账号
	let txt2 = document.getElementById('psw'); //密码
	let btn = document.getElementsByClassName('regs')[0]; //注册按钮
	let inf = document.getElementsByClassName('inf')[0]; //提示信息
	let psw = document.getElementById('psw');
	let infinp = document.getElementsByClassName('infinp')[0]; //正则验证信息提示
	let psw1 = document.getElementsByClassName('psw1')[0];
	let psw2 = document.getElementsByClassName('psw2')[0];
	let psw3 = document.getElementsByClassName('psw3')[0];
	// console.log(txt1);

	//密码强度
	let reg1 = /^\S\d{5,19}$/; // 纯数字
	let reg2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,19}$/; // 必须含有字母和数字6-20之间
	let reg3 = /^(?![A-z0-9]+$)(?![A-z~@*()_]+$)(?![0-9~@*()_]+$)([A-z0-9~@*()_]{10,})$/; // 最少10位, 由大小字母 + 数字 + 特殊符号~@* ()_
	psw.oninput = () => {
		let val = psw.value;
		// console.log(val);
		let ps1 = reg1.test(val);
		let ps2 = reg2.test(val);
		let ps3 = reg3.test(val);
		if (ps1) {
			psw1.style.background = 'red';
		}
		if (ps2) {
			psw2.style.background = 'yellow';
		}
		if (ps3) {
			psw3.style.background = '#58bc58';
		}
	};

	txt1.onchange = () => {
		let count = reg2.test(txt1.value); //boolen值
		// console.log(count);
		infinp.innerHTML = '';
		//注册验证
		let isok = false;
		txt1.onblur = () => {
			ajax({
				type: 'get',
				url: '../api/yanzheng.php',
				data: {
					txt: txt1.value,
				},
				success: str => {
					console.log(str);
					let val = txt1.value.trim();
					if (val) {
						if (str == 'yes' && count) {
							inf.innerHTML = '可以注册';
							css(inf, 'color', '#58bc58');
							isok = true;
						} else {
							inf.innerHTML = '用户名重复或输入的不合法';
							css(inf, 'color', 'red');
							isok = false;
						}
					} else if (val == '') {
						alert('请输入有效信息');
						isok = false;
					}
				},
			});
		};
		//注册
		btn.onclick = () => {
			if (isok) {
				ajax({
					type: 'get',
					url: '../api/reg.php',
					data: {
						txt: txt1.value,
						psw: txt2.value,
					},
					success: str => {
						console.log(str);
						if (str == 'yes') {
							alert('注册成功');
							location.href = 'login.html';
						} else {
							alert('注册失败');
						}
					},
				});
			} else {
				alert('你输的信息有误啊');
			}
		};
	};
})();
