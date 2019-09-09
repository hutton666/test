/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 14:47:52
 * @LastEditTime: 2019-09-07 15:13:56
 * @LastEditors: Please set LastEditors
 */
(function() {
	let txt1 = document.getElementById('users');
	let psw = document.getElementById('pass');
	let logBtn = document.getElementsByClassName('logo')[0];

	let change = document.getElementById('change');
	let vtxt = document.getElementById('vtxt');
	let nums = document.getElementsByClassName('nums')[0];
	let inf = document.getElementsByClassName('inf')[0];

	//随机验证码
	function setData() {
		let num = ranCod(); //返回的随机数
		nums.innerHTML = num;
	}
	setData();
	change.onclick = () => {
		setData();
	};

	logBtn.onclick = () => {
		let names = txt1.value;
		let psws = psw.value;
		let txt = vtxt.value; //输入的验证码
		let ranVal = nums.innerText; //生成的验证码
		console.log(txt, ranVal);

		if (txt.toLowerCase() == ranVal.toLowerCase()) {
			inf.style.color = '#58bc58';
			inf.innerHTML = '验证通过';
			if (names && psws) {
				ajax({
					type: 'get',
					url: '../api/login.php',
					data: {
						name: names,
						psw: psws,
					},
					success: str => {
						console.log(str);
						if (str == 'yes') {
							let oldName = getCookie('name');
							if (oldName) {
								alert('你已是登陆状态');
								location.href = '../indexs.html';
							} else {
								setCookie('name', names, 10);
								alert('登录成功');
								location.href = '../indexs.html';
							}
						} else {
							alert('账号密码不一致');
						}
					},
				});
			}
		} else {
			inf.style.color = 'red';
			inf.innerHTML = '验证码不一致';
		}
	};
})();
