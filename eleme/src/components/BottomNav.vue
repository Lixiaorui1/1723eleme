<template>
	<ul class="bottom_nav">
    	<router-link to="/"  active-class="click" exact><li><i class="icon iconfont">&#xe60a;</i><p>首页</p></li></router-link>
	    <router-link to="/Find" active-class="click"><li><i class="icon iconfont">&#xe612;</i><p>发现</p></li></router-link>
	    <router-link to="/Cart" active-class="click" exact><li><i class="icon iconfont">&#xe606;</i><p>订单</p></li></router-link>
	    <router-link to="/Mine" active-class="click"><li><i class="icon iconfont">&#xe620;</i><p>我的</p></li></router-link>
    </ul>
</template>

<script>
	export default {
		name: "BottomNav"
	}
</script>

<style scoped>
	@import "../assets/iconfont/iconfont.css";
	.bottom_nav{
		display: flex;
		/*flex: 1;*/
		justify-content: space-around;
		height: 50px;
		border-top: 1px solid #ccc;
		font-size: 14px;
		padding-top: 5px;
	}
	a{color: #666;}
	i{
		font-size: 20px !important;
	}
	li{
		text-align: center;
	}
	p{
		padding-top: 5px;
	}
	.click{
		color: #0089dc;
	}
</style>