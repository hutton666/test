/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 09:34:09
 * @LastEditTime: 2019-08-30 20:36:42
 * @LastEditors: Please set LastEditors
 */
(function() {
	let lists = document.getElementsByClassName('lists')[0];
	let btns = document.getElementsByClassName('btns')[0];
	let lbtn = document.getElementsByClassName('lbtn')[0];
	let rbtn = document.getElementsByClassName('rbtn')[0];
	let purchase = document.getElementsByClassName('purchase')[0];
	// console.log(lbtn, rbtn);

	let htm = '';
	htm += `<li>
                <a href='###'><img src='img/pic1.jpg'></a>
                <a class='tex' href="###">适合3-6岁宝宝的学画书，画出漂亮的简笔画。</a>
                <p> 
                    <span class='newPrice'>￥39.9</span>
                    <span class='clos'>|</span>
                    <span class='oldPrice'>￥58.0</span>
                </p>
            </li>
            <li><a href='###'><img src='img/pic2.jpg'></a>
             <a class='tex' href="###">适合3-6岁宝宝的学画书，画出漂亮的简笔画。</a>
                <p> 
                    <span class='newPrice'>￥39.9</span>
                    <span class='clos'>|</span>
                    <span class='oldPrice'>￥58.0</span>
                </p>
            </li>
            <li><a href='###'><img src='img/pic3.jpg'></a>
             <a class='tex' href="###">适合3-6岁宝宝的学画书，画出漂亮的简笔画。</a>
                <p> 
                    <span class='newPrice'>￥39.9</span>
                    <span class='clos'>|</span>
                    <span class='oldPrice'>￥58.0</span>
                </p>
            </li>
            <li><a href='###'><img src='img/pic4.jpg'></a>
             <a class='tex' href="###">适合3-6岁宝宝的学画书，画出漂亮的简笔画。</a>
                <p> 
                    <span class='newPrice'>￥39.9</span>
                    <span class='clos'>|</span>
                    <span class='oldPrice'>￥58.0</span>
                </p>
            </li>
            <li><a href='###'><img src='img/pic5.jpg'></a>
             <a class='tex' href="###">适合3-6岁宝宝的学画书，画出漂亮的简笔画。</a>
                <p> 
                    <span class='newPrice'>￥39.9</span>
                    <span class='clos'>|</span>
                    <span class='oldPrice'>￥58.0</span>
                </p>
            </li>
            <li><a href='###'><img src='img/pic6.png'></a>
             <a class='tex' href="###">适合3-6岁宝宝的学画书，画出漂亮的简笔画。</a>
                <p> 
                    <span class='newPrice'>￥39.9</span>
                    <span class='clos'>|</span>
                    <span class='oldPrice'>￥58.0</span>
                </p>
            </li>
            <li><a href='###'><img src='img/pic7.jpg'></a>
             <a class='tex' href="###">适合3-6岁宝宝的学画书，画出漂亮的简笔画。</a>
                <p> 
                    <span class='newPrice'>￥39.9</span>
                    <span class='clos'>|</span>
                    <span class='oldPrice'>￥58.0</span>
                </p>
            </li>
            <li><a href='###'><img src='img/pic8.jpg'></a>
             <a class='tex' href="###">适合3-6岁宝宝的学画书，画出漂亮的简笔画。</a>
                <p> 
                    <span class='newPrice'>￥39.9</span>
                    <span class='clos'>|</span>
                    <span class='oldPrice'>￥58.0</span>
                </p>
            </li>
            <li><a href='###'><img src='img/pic9.jpg'></a>
             <a class='tex' href="###">适合3-6岁宝宝的学画书，画出漂亮的简笔画。</a>
                <p> 
                    <span class='newPrice'>￥39.9</span>
                    <span class='clos'>|</span>
                    <span class='oldPrice'>￥58.0</span>
                </p>
            </li>
            <li><a href='###'><img src='img/pic10.jpg'></a>
             <a class='tex' href="###">适合3-6岁宝宝的学画书，画出漂亮的简笔画。</a>
                <p> 
                    <span class='newPrice'>￥39.9</span>
                    <span class='clos'>|</span>
                    <span class='oldPrice'>￥58.0</span>
                </p>
            </li>
            <li><a href='###'><img src='img/pic11.jpg'></a>
             <a class='tex' href="###">适合3-6岁宝宝的学画书，画出漂亮的简笔画。</a>
                <p> 
                    <span class='newPrice'>￥39.9</span>
                    <span class='clos'>|</span>
                    <span class='oldPrice'>￥58.0</span>
                </p>
            </li>
            <li><a href='###'><img src='img/pic12.jpg'></a>
             <a class='tex' href="###">适合3-6岁宝宝的学画书，画出漂亮的简笔画。</a>
                <p> 
                    <span class='newPrice'>￥39.9</span>
                    <span class='clos'>|</span>
                    <span class='oldPrice'>￥58.0</span>
                </p>
            </li>`;
	lists.innerHTML = htm;
	let ileft = 0;
	// console.log(ileft);
	purchase.onmouseover = () => {
		btns.style.display = 'block';
	};
	purchase.onmouseout = () => {
		btns.style.display = 'none';
	};
	lbtn.onclick = () => {
		ileft = lists.offsetWidth;
		startMove(lists, { left: -ileft / 2 });
		lbtn.style.display = 'none';
		rbtn.style.display = 'block';
	};
	rbtn.onclick = () => {
		ileft = lists.offsetWidth;
		startMove(lists, { left: 0 });
		rbtn.style.display = 'none';
		lbtn.style.display = 'block';
	};

	//回顶部
	let toTop = document.getElementsByClassName('toTop')[0];
	let timer = null;
	toTop.onclick = () => {
		let itop = window.scrollY;
		console.log(itop);
		timer = setInterval(function() {
			if (itop <= 0) {
				itop = 0;
			} else {
				window.scrollTo(0, 0);
				clearInterval(timer);
			}
		}, 10);
	};
})();
