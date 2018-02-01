<template>
	<div id="box">
		<div class="mineTop">
			<header><span><</span><span>发现</span><span></span></header>
		</div>
		<div class="main" >

			<div class="none" v-if="!$store.state.cart">
				<img src="//fuss10.elemecdn.com/8/c8/bbe5984003cb26fc7b445a4a15195png.png"/>
				<p>近三个月无外卖订单记录</p>
				<p>查看三个月前的外卖订单</p>
			</div>

			<div class="mainList" v-if="$store.state.cart">
				<ul>
					<li v-for="item in $store.state.cart">
						<input type="checkbox" name="">
						<h4>店铺名</h4>
						<h3>{{item.name}}</h3>
						<div>
							<p v-for="it in item.shop">
								<input type="checkbox" name="">
								<img src="../assets/img/tou.png">
								
								<b>{{it.shopname}}</b>
								<span class="price">{{it.price}}</span>
								
								<span class="num">{{it.num}}</span>
								
								
							</p>
							<p>总计<span class="tit"></span></p>
						</div>

					</li>
				</ul>
			</div>
		</div>
		<BottomNav></BottomNav>
	</div>
</template>

<script>

	//$(".tit").html = $(".price").val()*$(".num").val();
	console.log($(".price").html());
	
	export default {
		name: "Cart",
		methods:{

		}
	}
</script>

<style scoped lang="scss" src="../assets/scss/cart.scss">

</style>