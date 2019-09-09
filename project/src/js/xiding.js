/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 20:05:21
 * @LastEditTime: 2019-09-03 16:30:35
 * @LastEditors: Please set LastEditors
 */
(function() {
	let logoContainter = document.getElementsByClassName('logo-container')[0];
	let iTop = logoContainter.offsetTop;
	window.onscroll = () => {
		let scrollTop = window.scrollY;
		// console.log(scrollTop);

		if (scrollTop >= iTop) {
			logoContainter.className = 'newAct';
		} else {
			logoContainter.className = 'logo-container';
		}
		// console.log(scrollTop);
	};
})();
