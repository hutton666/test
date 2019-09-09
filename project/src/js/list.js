/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 17:44:51
 * @LastEditTime: 2019-09-06 14:01:50
 * @LastEditors: Please set LastEditors
 */
(function() {
	let glist = document.getElementsByClassName('glist')[0];
	// console.log(glist);

	function creatData(arr) {
		let strs = arr
			.map(item => {
				return ` <div class="gInfo">
                        <img src="${item.image}" alt="">
                        <p class="gname">${item.bname}</p>
                        <p class="gprices">
                            <span class='nPri'>${item.newprice}
                            </span>
                            <span class='oPri'>
                            ${item.oldprice}
                        </span>
                        </p>
                        <p class='gNum'>
                            <span class="gtxt">${item.stock}</span>
                            <span class="gpic"></span>
                        </p>
                        <div class="buy">
                            今日开抢
                        </div>
                    </div>`;
			})
			.join('');
		glist.innerHTML = strs;
	}
	ajax({
		type: 'get',
		url: '../api/getdata.php',
		success: str => {
			let arr = JSON.parse(str);
			// console.log(arr);
			creatData(arr);
			//渲染后找节点
			let gInfo = document.getElementsByClassName('gInfo');
			// console.log(gInfo.length);
			for (let i = 0; i < gInfo.length; i++) {
				gInfo[i].onclick = () => {
					let str = objToStr(arr[i]);
					// console.log(str);
					window.open('detail.html?' + str);
				};
			}

			let gudingsearch = document.getElementById('gudingsearch');
			let iconSousuo = document.getElementsByClassName('icon-sousuo')[0];
			// console.log(iconSousuo);
			iconSousuo.onclick = () => {
				let conn = gudingsearch.value;
				ajax({
					type: 'get',
					url: '../api/search.php',
					data: {
						searchcon: conn,
					},
					success: str => {
						let arr = JSON.parse(str);
						creatData(arr);
						//保证能跳到详情页
						let gInfo = document.getElementsByClassName('gInfo');
						// console.log(gInfo.length);
						for (let i = 0; i < gInfo.length; i++) {
							gInfo[i].onclick = () => {
								let str = objToStr(arr[i]);
								// console.log(str);
								window.open('detail.html?' + str);
							};
						}
					},
				});
			};
		},
	});
})();
