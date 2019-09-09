/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 09:01:53
 * @LastEditTime: 2019-09-02 21:29:30
 * @LastEditors: Please set LastEditors
 */
(function() {
	//找节点
	let ht = document.getElementsByClassName('ht')[0];
	let imglist = document.querySelectorAll('.imglist li');
	let light = document.querySelector('.light');
	let prevBtn = document.querySelector('.prev');
	let nextBtn = document.querySelector('.next');
	let posiBtn = document.getElementsByClassName('posiBtn')[0];
	let iw = imglist[0].offsetWidth; //获取li的宽度
	// console.log(imglist.length);
	let timer = null;
	let num = 0; //可视区图片的下标

	//全部图片放到右侧，第一张放在可视区
	for (let ele of imglist) {
		// console.log(ele);
		ele.style.left = iw + 'px';
	}
	imglist[0].style.left = 0;

	//1.自动轮播：开启定时器切换图片
	timer = setInterval(next, 5000); //每隔5秒切换一张图片

	function next() {
		//旧图挪走
		startMove(imglist[num], { left: -iw });
		//新图进场
		// num++;
		num = ++num > imglist.length - 1 ? 0 : num;
		imglist[num].style.left = iw + 'px'; //确保新图在右侧:候场
		startMove(imglist[num], { left: 0 });
		liang();
	}

	function prev() {
		//旧图挪走
		startMove(imglist[num], { left: iw });
		//新图进场
		// num++;
		num = --num < 0 ? imglist.length - 1 : num;
		imglist[num].style.left = -iw + 'px'; //确保新图在右侧:候场
		startMove(imglist[num], { left: 0 });
		liang();
	}

	//2.点击左右按钮可以切换图片//鼠标移入移出停止继续轮播图
	ht.onmouseover = () => {
		//鼠标移入的时候出现切换按钮
		posiBtn.style.display = 'block';
		clearInterval(timer);
	};

	ht.onmouseout = () => {
		//鼠标移出的时候切换按钮消失
		posiBtn.style.display = 'none';
		clearInterval(timer);
		timer = setInterval(next, 5000);
	};

	prevBtn.onclick = () => {
		//上一张
		prev();
	};

	nextBtn.onclick = () => {
		//下一张
		next();
	};

	//3.点击焦点可以切换对应图片
	let html = '';
	for (let i = 0; i < imglist.length; i++) {
		html += `<span>${i + 1}</span>`;
	}
	light.innerHTML = html;
	light.children[0].className = 'active';

	//焦点跟随
	function liang() {
		for (let i = 0; i < imglist.length; i++) {
			//排他
			light.children[i].className = '';
		}
		light.children[num].className = 'active';
	}

	//利用事件委托给焦点绑定事件;
	light.onclick = ev => {
		if (ev.target.tagName.toLowerCase() == 'span') {
			// console.log(ev.target.innerHTML);
			let index = ev.target.innerHTML - 1;
			if (index > num) {
				//新图从右侧进入
				//旧图挪走
				startMove(imglist[num], { left: -iw });
				imglist[index].style.left = iw + 'px';
				startMove(imglist[index], { left: 0 });
			}
			if (index < num) {
				//新图从左侧进入
				startMove(imglist[num], { left: iw });
				imglist[index].style.left = -iw + 'px';
				startMove(imglist[index], { left: 0 });
			}
			num = index;
			liang();
		}
	};

	let lLi = document.querySelectorAll('.menu li');
	// console.log(lLi);
	let goods = document.getElementsByClassName('allGoods');
	// console.log(goods);

	for (let i = 0; i < lLi.length; i++) {
		lLi[i].onmouseover = () => {
			goods[i].style.display = 'block';
		};
		lLi[i].onmouseout = () => {
			goods[i].style.display = 'none';
		};
	}

	let time = document.getElementsByClassName('time')[0];
	// console.log(time);
	let lastTime = '2019-09-08 20:57:50';
	let timers = setInterval(function() {
		jisuan();
		let now = Date.now();
		let last = Date.parse(lastTime);
		let dis = last - now;
		let seconds = parseInt(dis / 1000); //差值毫秒数
		// console.log(seconds);
		if (seconds <= 0) {
			clearInterval(timers);
			time.innerHTML = '';
		} else {
			let obj = jisuan(seconds);
			time.innerHTML = `${toDb(obj.day)}天${toDb(obj.hour)}时${toDb(obj.min)}分${toDb(obj.secs)}秒`;
		}
		function jisuan(seconds) {
			let day = parseInt(seconds / 3600 / 24); //天数
			let hours = parseInt((seconds / 3600) % 24); //小时
			let mins = parseInt((seconds / 60) % 60); //分钟
			let sec = parseInt(seconds % 60);
			return {
				day: day,
				hour: hours,
				min: mins,
				secs: sec,
			};
		}
	}, 1000);

	//楼层跳跃:
	let tower = document.querySelectorAll('.box .tower');
	let towerList = document.querySelectorAll('.towerList li');
	// console.log(tower);
	let towerPage = document.getElementsByClassName('towerPage')[0];
	let content = document.getElementsByClassName('content')[0];
	let logSearch = document.getElementsByClassName('log_search')[0];
	let section = document.getElementsByClassName('section')[0];
	let wds = document.getElementsByClassName('wds')[0];

	let logoContain = document.getElementsByClassName('logo-container')[0];
	console.log(logoContain);

	window.onscroll = () => {
		let scrollTop = window.scrollY; //获取鼠标滑动距离
		let iheadTop = wds.offsetHeight + content.offsetHeight + logSearch.offsetHeight + section.offsetHeight;
		console.log(scrollTop, iheadTop);
		if (scrollTop >= iheadTop) {
			towerPage.style.display = 'block';
		} else {
			towerPage.style.display = 'none';
		}
		for (let i = 0; i < towerList.length; i++) {
			let itop = tower[i].offsetTop;
			if (scrollTop >= itop) {
				for (let j = 0; j < towerList.length; j++) {
					towerList[j].className = '';
				}
				towerList[i].className = 'curr';
			}
		}

		let iTops = logoContain.offsetTop;
		//吸顶
		if (scrollTop >= iTops) {
			logoContain.className = 'newAct';
		} else {
			logoContain.className = 'logo-container';
		}
	};

	//回到顶端
	for (let i = 0; i < towerList.length; i++) {
		towerList[i].onclick = () => {
			for (let i = 0; i < tower.length; i++) {
				towerList[i].className = ''; //排他
			}
			towerList[i].className = 'curr';
			window.scrollTo(0, tower[i].offsetTop);
		};
	}
})();
