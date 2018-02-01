<template>
  <div id="shop">
    <!-- header -->
    <div class="shop_header">
      <div class="header_bg">
        <i class="iconfont" @click="gotoIndex()">&#xe61b;</i>
        <img class="shop_logo" :src="restaurant.restaurants_img" v-if="restaurant"/>
      </div>
      <div class="shop_info">            
       	<h2 v-if="restaurant">{{restaurant.name}}</h2>
        <p>
          <span v-if="restaurant">{{restaurant.rating}}</span>&nbsp;&nbsp;
          <span v-if="restaurant">月售{{restaurant.recent_order_num}}单</span>&nbsp;&nbsp;
          <span>约32分钟</span>&nbsp;&nbsp;
          <span>距离2.9km</span>
        </p>
        <p v-if="restaurant">{{restaurant.promotion_info}}</p>
        <p v-if="restaurant"><i> 活动 </i>{{restaurant.activities[0].description}}</p>
      </div>
    </div>

    <!-- 选项卡 -->
    <div class="tabs">
      <ul class="nav">
        <li @click="toDianCan()">点餐</li>
        <li @click="toPingJia()">评价</li>
       	<li @click="toShangJia()">商家</li>
      </ul>
    </div>
    <div class="myshop">
    	<div class="diancan" v-if="flag1">
    		<ul class="left" >
    			<li v-if="foods" v-for="item in foods">{{item.name}}</li>
    		</ul>
    		<div class="right">
    			<div class="foods_list" v-for="item in foods">
    					<div class="foods_list clear" v-for="it in item.foods">
	    					<img :src="it.foods_img"/>
	    					<div class="discription">
	    						<h2>{{it.name}}</h2>
	    						<p>{{it.description}}</p>
	    						<p>月售{{it.month_sales}}&nbsp;&nbsp;好评率{{it.satisfy_rate}}%</p>
	    						<p>￥{{it.specfoods[0].price}}<i @click="goToCart(it)">+</i></p>
	    					</div>
	    				</div>
    			</div>
    		</div>
    	</div>
    	<div class="pingjia" v-if="flag2">
    		<ul v-for="item in rating">
    			<li v-for="item in rating">
    				<p>{{item.username}}<i>{{item.rated_at}}</i></p>
    				<p>{{item.rating_text}}</p>
    				<img :src="item.foods_img" />
    			</li>
    		</ul>
    	</div>
    	<div class="shangjia" v-if="flag3">
    		
    	</div>
	  </div>
	  <div class="bottom">
      <i class="iconfont">&#xe61c;</i>
      <div class="price">
      	<i>￥0</i>
      	<p>配送费14</p>
      </div>
      <div class="qisong">¥20起送</div>
   </div>
	</div>
</template>

<script src="../assets/js/jquery-1.11.3.js"></script>
<script>
import axios from 'axios';

export default {
  name: 'Shop',
  data () {
   return{
   	restaurant: null,
   	foods: null,
   	cart: [],
   	rating: {},
   	num: 0,
   	flag1: true,
   	flag2: false,
   	flag3: false
   }
  },
  mounted () {
  	var height = $("body").height() - $(".tabs").height();
  	$(".myshop").css("height",height);
  	
  	//选项卡
  	$(".nav li").click(function(){
  		$(".nav li").css("border-bottom","0")
  		$(this).css("border-bottom","2px solid #0085FF")
  	})
    //axios
    var id = this.$route.params.fid;
    var that = this;
//  console.log(id);
		axios.get(`restapi/shopping/restaurant/${id}?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&extras[]=qualification&terminal=h5&latitude=39.90469&longitude=116.407173`)
		.then((res)=>{
//			console.log(res)
			that.restaurant = res.data;
//			console.log(that.restaurant);
			var str = "";
			if(that.restaurant.image_path.indexOf("png") != -1){
				str = that.restaurant.image_path.slice(that.restaurant.image_path.indexOf("png"))
			}else{
				str = that.restaurant.image_path.slice(that.restaurant.image_path.indexOf("jpeg"))
			}
//			console.log(str)
			that.restaurant.restaurants_img = "//fuss10.elemecdn.com/" + that.restaurant.image_path.slice(0,1) + "/" + that.restaurant.image_path.slice(1,3) + "/" + that.restaurant.image_path.slice(3) + "." + str + "?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/";
		})
		
		//获取食物列表
		axios.get(`/restapi/shopping/v2/menu?restaurant_id=${id}`)
		.then((res)=>{
			var arr = res.data;
//			console.log(arr);
			var len = arr.length;
			for(var i = 0;i < len; i ++){
				var foods = arr[i].foods;
				var len2 = foods.length;
//				console.log(foods);
				for(var j = 0;j < len2;j ++){
					var str = "";
					if(foods[j].image_path.indexOf("png") != -1){
						str = foods[j].image_path.slice(foods[j].image_path.indexOf("png"))
					}else{
						str = foods[j].image_path.slice(foods[j].image_path.indexOf("jpeg"))
					}
					foods[j].foods_img = "//fuss10.elemecdn.com/" + foods[j].image_path.slice(0,1) + "/" + foods[j].image_path.slice(1,3) + "/" + foods[j].image_path.slice(3) + "." + str + "?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/"
				}
			}
//			console.log(arr);
			this.foods = arr;
		})
		
		//获取评价列表
		axios.get(`/restapi/ugc/v3/restaurants/${id}/ratings?has_content=true&offset=0&limit=8`)
		.then((res)=>{
			var arr = res.data;
//			console.log(arr);
			var len = arr.length;
			for(var i = 0;i < len; i ++){
				var order_images = arr[i].order_images;
				var len2 = order_images.length;
				for(var j = 0;j < len2;j ++){
					var str = "";
					if(order_images[j].image_hash.indexOf("png") != -1){
						str = order_images[j].image_hash.slice(order_images[j].image_hash.indexOf("png"))
					}else{
						str = order_images[j].image_hash.slice(order_images[j].image_hash.indexOf("jpeg"))
					}
					arr[i].foods_img = "//fuss10.elemecdn.com/" + order_images[j].image_hash.slice(0,1) + "/" + order_images[j].image_hash.slice(1,3) + "/" + order_images[j].image_hash.slice(3) + "." + str + "?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/"
				}
			}
//			console.log(arr);
			this.rating = arr;
		})
  },
  methods: {
  	toDianCan(){
  		this.flag1 = true;
  		this.flag2 = false;
  		this.flag3 = false;
  	},
  	toPingJia(){
  		this.flag1 = false;
  		this.flag2 = true;
  		this.flag3 = false;
  	},
  	toShangJia(){
  		this.flag1 = false;
  		this.flag2 = false;
  		this.flag3 = true;
  	},
    gotoIndex(){
//  		console.log(this);
				this.$router.history.push({name: "Index"});
			},
		goToCart(it){
//			console.log(it);
			var resname = $(".shop_info").find("h2").html();
			var foodname = it.name;
			var fprice = it.specfoods[0].price;
			this.num ++;
//			console.log(name,shopname,price,this.num);
			
			this.cart.push({name: resname,shop: [{shopname: foodname,price: fprice,num: this.num}]})
			console.log(this.cart);
			//调用vuex中的action
			this.$store.dispatch('addToCart',this.cart);
		}
  } 
}
</script>

<style scoped>
@import '../assets/iconfont_shop/iconfont.css';

#shop{
	/*display: flex;*/
	flex-direction: column;
	height: 100%;
	overflow: scroll;
}
.header_bg{
	position: relative;
	padding-top: 0.2rem;
	height: 100%;
	background: url("https://fuss10.elemecdn.com/5/b1/5b6b0942f5100eac25bb07992131apng.png?imageMogr/format/webp/thumbnail/!40p/blur/50x40/");
	height: 1.36rem;
}
.header_bg i{
	color: #fff !important;
	font-size: 30px;
	margin-left: 0.2rem;
}
.header_bg img{
	width: 1.3rem;
	position: absolute;
	top: 0.6rem;
	left: 40%;
}
.shop_info{
	margin-top: 0.5rem;
	text-align: center;
	color: #333;
	font-size: 12px;
}
.shop_info h2{
	font-size: 20px;
	font-weight: 900;
}
.shop_info p{
	line-height: 2em;
	color: #333;
	padding: 0 0.1rem;
}
.shop_info p:nth-of-type(2){
	color: #999;
	width: 80%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	display: inline-block;
}
.shop_info p:nth-of-type(3){
	color: #666;
	margin-bottom: 0.2rem;
}
.shop_info p:nth-of-type(3) i{
	display: inline-block;
	background: rgb(240, 115, 115);
	width: 0.6rem;
	margin-right: 0.05rem;
	text-align: center;
	border-radius: 0.07rem;
	line-height: 1.5em;
	color: #fff;
}
.diancan{
	display: flex;
}
.left{
	background: #f8f8f8;
}
.left li{
	width: 1.24rem;
	height: 0.56rem;
	padding: 0.35rem 0.15rem;
	line-height: 1.5em;
	border-bottom: 1px solid #e8e8e8;
	color: #666;
}
.right{
	flex: 1;
}
.foods_list{
	margin: 0.15rem 0 0.3rem 0.05rem;
}
.foods_list img{
	width: 1.3rem;
	float: left;
}
.discription{
	float: left;
	width: 3rem;
	margin-left: 0.1rem;
	color: #333;
}
.discription h2{
	font-size: 16px;
	font-weight: 900;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}
.discription p{
	line-height: 1.5em;
}
.discription p:nth-of-type(1){
	color: #999999;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}
.discription p:nth-of-type(3){
	color: #f60;
}
.discription p:nth-of-type(3) i{
	float: right;
	width: 0.4rem;
	border-radius: 50%;
	background: #2395ff;
	color: #fff;
	text-align: center;
	font-weight: 900;
}
.nav{
	display: flex;
	justify-content: space-around;
	height: 0.81rem;
	line-height: 0.81rem;
	border-bottom: 2px solid #ddd;
}
.nav li{
	flex: 1;
	text-align: center;
}
.click{
	border-bottom: 2px solid #2395ff;
	font-weight: 900;
	color: #000000;
}
.myshop{
	height: 10rem;
	overflow-y: auto;
}
.bottom{
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 0.96rem;
	background: rgba(61,61,63,.9);
	color: #fff;
}
.bottom > i{
	position: absolute;
	left: 0.2rem;
	top: -0.2rem;
	background: #333;
	width: 1rem;
	height: 1rem;
	border-radius: 50%;
	text-align: center;
	color: #666;
	line-height: 0.9rem;
	font-size: 30px !important;
	border: 5px solid #444;
	box-sizing: border-box;
}
.price{
	float: left;
	margin: 0.04rem 0 0 1.5rem;
}
.price i{
	font-size: 20px;
}
.price p{
	font-size: 12px;
	color: #999;
}
.qisong{
	float: right;
	margin-right: 0.3rem;
	line-height: 0.96rem;
	font-size: 16px;
}
.pingjia{
	padding: 0 0.15rem ;
}
.pingjia ul li{
	border-bottom: 1px solid #eee;
	color: #333;
}
.pingjia ul li p{
	line-height: 3em;
}
.pingjia ul li p:nth-of-type(1){
	font-size: 16px;
	font-weight: 900;
}
.pingjia ul li p:nth-of-type(1) i{
	color: #999999;
	font-size: 12px;
	font-weight: 100;
	margin-left: 0.2rem;
}
.pingjia ul li p:nth-of-type(2){
	font-size: 14px;
	padding-left: 1rem;
}
.pingjia ul li img{
	margin-bottom: 0.5rem;
	margin-left: 1rem;
}
.pandect{
	padding: 0.2rem 0;
	height: 1rem;
}
.shangjia{
	background: #eee;
	padding: 0 0.15rem;
}
</style>
