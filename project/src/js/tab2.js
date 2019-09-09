/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 23:37:22
 * @LastEditTime: 2019-09-02 17:10:37
 * @LastEditors: Please set LastEditors
 */

(function() {
	let titlist = document.getElementById('nav_list');
	let list = document.getElementsByClassName('hot_list');
	let Lli = titlist.getElementsByTagName('li');
	for (let i = 0; i < list.length; i++) {
		Lli[i].onclick = () => {
			for (let i = 0; i < list.length; i++) {
				Lli[i].className = '';
				list[i].style.display = 'none';
			}
			list[i].style.display = 'block';
			Lli[i].className = 'active';
			console.log(Lli[i].className);
		};
	}
})();
