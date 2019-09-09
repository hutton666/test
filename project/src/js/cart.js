/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 17:54:09
 * @LastEditTime: 2019-09-07 15:31:05
 * @LastEditors: Please set LastEditors
 */
(function() {
	let cart = document.getElementById('cart');
	let cartcon = document.getElementsByClassName('cartcon')[0];
	let del = document.getElementById('del');
	function creat(arr) {
		let str = arr
			.map(item => {
				return `<li class="goods clearfix">
								<p class="good_check fl">
									<input type="checkbox" name="" id="" />
								</p>
								<p class="pic fl">
									<img src="${item.imgurl}" alt="" />
								</p>
								<p class="good_name fl">
									${item.bname}
								</p>
								<p class="good_price fl">
									&nbsp;${item.price}
								</p>
								<div class="num fl clearfix">
									<div class="cutnum fl">-</div>
									<input class="nownum fl" data-num="10" type="text" value="1" />
									<div class="addnum fl">+</div>
								</div>
								<p class="good_total fl">
									&nbsp;${item.price}
								</p>
								<p class="good_del fl">
									<a href="###">删除</a>
								</p>
                            </li>`;
			})
			.join('');
		cart.innerHTML = str;
	}

	$.ajax({
		type: 'get',
		url: '../api/cartgetdata.php',
		success: str => {
			// console.log(str);
			let arr = JSON.parse(str);
			// console.log(arr);

			creat(arr);

			function total(now, num) {
				//数量和小计的变化 now-点击的元素
				//数量的变化
				let kuncun = $(now)
					.parent()
					.find('.nownum')
					.data('num'); //data-num
				if (num < 1) {
					num = 1;
				} else if (num > kuncun) {
					num = kuncun;
					//这里可以给个提示：您输入的值超过了库存量
				}
				$(now)
					.parent()
					.find('.nownum')
					.val(num);

				//小计=数量*单价
				let price = $(now)
					.parent()
					.prev()
					.text()
					.slice(2); //单价
				let all = (num * price).toFixed(2); //小计
				$(now)
					.parent()
					.next()
					.html('￥ ' + all);
				// console.log(price);
				allNum();
			}

			//点击加
			$('#cart').on('click', '.addnum', function() {
				let num = $(this)
					.prev()
					.val();
				num++;
				total($(this), num);
			});

			//点击减
			$('#cart').on('click', '.cutnum', function() {
				let num = $(this)
					.next()
					.val();
				num--;
				total($(this), num);
			});

			//手动输入
			$('#cart').on('input', '.nownum', function() {
				let num = $(this).val();
				total($(this), num);
			});

			//删除当行 集合里面找集合
			$('#cart').on('click', '.good_del', function() {
				// console.log($(this));
				let ok = confirm('您确定要删我吗？');
				if (ok) {
					$(this)
						.parent()
						.remove();
				}
				if ($('#cart .addnum').size() == 0) {
					//已经没有数据
					$('#del').css('display', 'none');
				}
				allNum();
			});

			//复选框控制总量和总价
			function checkedArr() {
				let arr = []; //存放勾选复选框的下标
				$('.good_check input').each(function(index, item) {
					if ($(item).prop('checked')) {
						//被勾选了
						arr.push(index);
					}
				});
				return arr;
			}
			function allNum() {
				let checkall = checkedArr(); //返回被勾选的下标数组
				let num = 0; //放商品总数量
				let total = 0; //放总价
				checkall.forEach(function(item, index) {
					num +=
						$('#cart .nownum')
							.eq(checkall[index])
							.val() * 1; //累加
					total +=
						$('#cart .good_total')
							.eq(checkall[index])
							.text()
							.slice(2) * 1;
				});
				$('#allnum').html(`已选 ${num} 件商品`);
				$('#totalprice').html(`总计（不含运费）：￥ ${total.toFixed(2)}`);

				//控制全选按钮
				let len = $('.good_check input').length; //本事复选框的个数
				let achecknum = $('.good_check input:checked').length;
				if (len == achecknum) {
					//已经全选
					$('#allchecked input').prop('checked', true);
				} else {
					$('#allchecked input').prop('checked', false);
				}
			}

			$('#cart').on('click', '.good_check input', function() {
				allNum();
			});

			//全选功能
			$('#allchecked input').click(function() {
				let isok = $('#allchecked input').prop('checked');
				$('.good_check input').prop('checked', isok);
				allNum();
			});
			//全删：删除被选中行
			$('#delall').click(function() {
				let checkall = checkedArr().reverse(); //返回被勾选的下标数组
				let ok = confirm('你确定删除我们?');
				// console.log(ids);
				if (ok) {
					let good_check = document.getElementsByClassName('good_check');
					let delall = document.getElementById('delall');
					for (let i = 0; i < good_del.length; i++) {
						let ids = arr[i].id;
						if (good_check[i].children[0].checked) {
							ajax({
								type: 'get',
								url: '../api/delAll.php',
								data: {
									bids: ids,
								},
								success: str => {
									// console.log(str);
									if (str == 'yes') {
										alert('已删除所选的商品');
									} else {
										alert('删除失败');
									}
								},
							});
						}
					}
					checkall.forEach(function(item, index) {
						$('#cart .goods')
							.eq(checkall[index])
							.remove();
					});
				}

				allNum();
				if ($('#cart .addnum').size() == 0) {
					//已经没有数据
					$('#del').css('display', 'none');
				}
			});
			let good_del = document.getElementsByClassName('good_del');
			for (let i = 0; i < good_del.length; i++) {
				let id = arr[i].id;
				good_del[i].children[0].onclick = () => {
					ajax({
						type: 'get',
						url: '../api/del.php',
						data: {
							bid: id,
						},
						success: str => {
							if (str == 'yes') {
								alert('删除成功');
							} else {
								alert('删除失败');
							}
						},
					});
				};
			}

			let settlement = document.getElementsByClassName('settlement')[0];
			let logMsg = document.getElementsByClassName('logMsg')[0];
			let yes = document.getElementsByClassName('yes')[0];
			let no = document.getElementsByClassName('no')[0];
			let paySuccess = document.getElementsByClassName('paySuccess')[0];
			let ok = document.getElementsByClassName('ok')[0];
			let goodCheck = document.getElementsByClassName('good_check');
			// console.log(settlement);
			settlement.onclick = () => {
				let nums = 0;
				let username = getCookie('name');
				if (username) {
					for (let i = 0; i < goodCheck.length; i++) {
						// console.log(goodCheck[i].children[0].checked);
						if (goodCheck[i].children[0].checked == false) {
							nums++;
						}
						// if (goodCheck[i].children[0].checked) {
						// 	paySuccess.style.display = 'block';
						// }
					}
					console.log(nums);
					if (nums == goodCheck.length) {
						alert('请选择商品后再结账');
					} else {
						paySuccess.style.display = 'block';
					}
					ok.onclick = () => {
						paySuccess.style.display = 'none';
					};
				} else {
					logMsg.style.display = 'block';
					yes.onclick = () => {
						location.href = 'login.html';
					};
					no.onclick = () => {
						// location.href = 'list.html';
						logMsg.style.display = 'none';
					};
				}
			};
		},
	});
})();
