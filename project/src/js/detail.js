/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 22:16:13
 * @LastEditTime: 2019-09-06 19:43:22
 * @LastEditors: Please set LastEditors
 */
(function() {
	//数据渲染
	let url = decodeURI(location.search.slice(1)); //接收传过来的URL
	// console.log(url);
	let goods = strToObj(url);
	// console.log(goods);
	let bid = goods.bid;
	let uid = getCookie('name');
	let n = goods.stock;
	// console.log(uid);
	let goodDetail = document.getElementsByClassName('goodDetail')[0];
	let html = `<div class="content">
					<div class="goodsInfs clearfix">
                        <div class="bigPic fl">
                            <div class="gpic">
                                <img src="${goods.image}" alt="">
                            </div>
                            <ul class="piclist clearfix">
                                <li><img src="${goods.image}" alt=""></li>
                            </ul>
                        </div>
                        <div class="ginfos fl">
                            <p class="booksname">
                                ${goods.bname}
                            </p>
                            <p class="namelist">
                                ${goods.bookdesc}
                            </p>
                            <p class="bookInfos">
                                <span>作者:</span><i class="autor">${goods.autor}</i>
                                <span>出版社:</span><i>${goods.address}</i>
                            </p>
                            <div class="buybook">
                                <div class="buyHead">
                                    <img src="https://bnmpstyle.bookuu.com/www/images/icon/flashsale2.png" alt="">
                                    <span>抢购价：￥18.80 限量：60件抢购进行中……</span>
                                    <span class="time"></span>
                                </div>
                                <div class="buyInf">
                                    <p class="p1">
                                        <span class="priOld">
                                            定 价:
                                        </span>
                                        <span class="oldNum">
                                            ${goods.newprice}
                                        </span>
                                    </p>
                                    <p class="p2">
                                        <span class="sell">
                                            售 价:
                                        </span>
                                        <span class="newNum">
                                            ${goods.oldprice}
                                        </span>
                                    </p>
                                </div>
                                <div class="numInfo">
                                    <div class="city clearfix">
										<p>配送至:</p>
										<div class="cityname clearfix">
											<span class="fl">浙江杭州市</span>
											<span class="icon iconfont icon-xiangxia fr"></span>
										</div>
										<span class="freight">
											运费5元，满59包邮
										</span>
									</div>
									<div class="sales">
										<span class="sp1">销量:</span>
										<span class="sp2">${goods.saleNum}件</span>
									</div>
									<div class="gnums clearfix">
										<span class="n fl">
											数量:
										</span>
										<p class="reduce fl">-</p>
										<input type="text" name="" id="txtnum" class="txtnum fl" value="1">
										<p class="add fl">
											+
										</p>
										<span class="kucun">库存:仅剩<span class="kucun1">${goods.stock}</span>件</span>
									</div>
								</div>
								<div class="btn clearfix">
									<div class="buyNow">
										立即购买
									</div>
									<div class="tocart">
										<i class="icon iconfont icon-gouwuchekong"></i>
										<span>加入购物车</span>
									</div>
									<div class="collection fl">
										<i class="icon iconfont icon-violet_collection-01"></i>
										<p>收藏</p>
									</div>
								</div>
								<div class="service clearfix">
									<p class="sev fl">服务</p>
									<p class="con-sev fl">
										<i class="icon iconfont icon-duigou
"></i>
									<span>正品保证</span>
									<i class="icons iconfont icon-duigou"></i>
									<span>7天无理由退换货</span>
									<i class="icons iconfont icon-duigou"></i>
									<span>赠送24积分</span>
									</p>
								</div>
							</div>
							<div class="pageBox">
								<h1 class='oth-address'>其他地址
								</h1>
								<p>请选择</p>
								<div class="province">
									<ul class="cityList">
										<li>北京</li>
										<li>天津</li>
										<li>河北</li>
										<li>山西</li>
										<li>内蒙古</li>
										<li>辽宁</li>
										<li>吉林</li>
										<li>黑龙江</li>
										<li>上海</li>
										<li>江苏</li>
										<li>浙江</li>
										<li>安徽</li>
										<li>福建</li>
										<li>山东</li>
										<li>江西</li>
										<li>河南</li>
										<li>湖北</li>
										<li>湖南</li>
										<li>广东</li>
										<li>广西</li>
										<li>海南</li>
										<li>四川</li>
										<li>重庆</li>
										<li>贵州</li>
										<li>云南</li>
										<li>西藏</li>
										<li>陕西</li>
										<li>甘肃</li>
										<li>宁夏</li>
										<li>青海</li>
										<li>新疆</li>
									</ul>
								</div>
							</div>
                        </div>
                        <div class="backIndex fl">
							<div class="toIndex">
								<div class="bktit">
									<img src="https://bnmpstyle.bookuu.com/wap/images/default_shop.png" alt="">
									<span>博库体验店</span>
								</div>
								<div class="tobtn clearfix">
									<a href="../indexs.html">
										<p class="inIndex fl">
										进入首页
									</p>
									</a>
									<p class="openShop fl">
										一键开店
									</p>
								</div>
							</div>
							<img src="https://bnmpstyle.bookuu.com/www/images/app.png" alt="">
                        </div>
					</div>
				</div>`;
	let pices = document.getElementsByClassName('pices')[0];
	let str = `<img src="${goods.bigImg}" alt=""> `;
	pices.innerHTML = str;
	goodDetail.innerHTML = html;

	let reduce = document.getElementsByClassName('reduce')[0];
	let add = document.getElementsByClassName('add')[0];
	let txtnum = document.getElementById('txtnum');
	let kucun1 = document.getElementsByClassName('kucun1')[0];
	reduce.onclick = () => {
		let num = txtnum.value * 1;
		console.log(num);
		num--;
		if (num <= 0) {
			num = 1;
		}
		txtnum.value = num;
	};
	add.onclick = () => {
		let num = txtnum.value * 1;
		let n = kucun1.innerHTML;
		// console.log(num);
		num++;
		if (num >= n) {
			num = n;
		}
		txtnum.value = num;
	};
	//限时购
	let time = document.getElementsByClassName('time')[0];
	// console.log(time);
	let lastTime = '2019-09-18 20:57:50';
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

	let cityname = document.getElementsByClassName('cityname')[0];
	let pageBox = document.getElementsByClassName('pageBox')[0];
	// console.log(pageBox);
	let isok = true;
	cityname.onclick = () => {
		if (isok) {
			pageBox.style.display = 'block';
		} else {
			pageBox.style.display = 'none';
		}
		isok = !isok;
	};

	let tocart = document.getElementsByClassName('tocart')[0];
	tocart.onclick = () => {
		let bNum = document.getElementsByClassName('txtnum')[0].value;
		ajax({
			type: 'get',
			url: '../api/cartupd.php',
			data: {
				bid: bid,
				uid: uid,
				imgurl: goods.image,
				price: goods.newprice,
				bNum: bNum,
				bname: goods.bname,
				totalNum: n,
			},
			success: str => {
				console.log(str);
				if (str == 'yes') {
					alert('加入购物车成功');
				} else {
					alert('there are still some problems');
				}
			},
		});
	};
})();
