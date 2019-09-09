/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 16:05:53
 * @LastEditTime: 2019-09-07 14:53:44
 * @LastEditors: Please set LastEditors
 */
(function() {
	let welcome = document.getElementsByClassName('welcome')[0];
	function init() {
		let name = getCookie('name');
		// console.log(name);
		if (name) {
			//登陆中
			let str = name + `,欢迎您。  <a class="quit" href="###">退出</a>`;
			welcome.innerHTML = str;
			welcome.style.color = '#3ab5e6';
		} else {
			welcome.innerHTML = `<a class="quit" href="###">登陆</a>`;
		}
	}
	init();
	welcome.onclick = ev => {
		if (ev.target.className == 'quit') {
			if (ev.target.innerHTML == '退出') {
				removeCookie('name');
				ev.target.innerHTML = '登陆';
			} else {
				location.href = 'html/login.html';
			}
			init();
		}
	};
})();
