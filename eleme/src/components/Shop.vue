<template>
  <div class="shop">

    <!-- header -->
    <div class="shop_header">
      <div class="header_bg">
        <i class="iconfont">&#xe61b;</i>
      </div>
      <img class="shop_logo" src="">
      <div class="shop_info">            
        <h2>杭州小笼包&nbsp</h2>
        <p class="p1">
          <span class="grade">4.3</span><span class="dian">·</span>
          <span class="saled">月售545单</span><span class="dian">·</span>
          <span class="fengniao">蜂鸟专送</span><span class="dian">·</span>
          <span class="min">约32分钟</span><span class="dian">·</span>
          <span class="distance">距离2.9km</span>
        </p>
        <p class="describe">本店主营江南小吃</p>
        <div class="youhui">
          <div class="left">
<div class="first_order">首单</div>
            <p>新用户下单立减17元（不与其他活动同享）</p>
          </div>
          <p class="right">5个优惠</p>
        </div>
        <!-- <p class="hongbao"><i class="iconfont">&#xe6b4;</i><span>8</span>元无门槛红包<span>领取</span></p> -->
      </div>
    </div>

    <!-- 选项卡 -->
    <div class="tabs">
      <ul class="nav">
        <li v-for="(item,index) in tab_li" :class="{selected:flag==index}" @click="chenge_color(index)"><router-link :to="item.link" append>{{item.text}}</router-link></li>
      </ul>
      <router-view class="myshop"></router-view>
    </div>
  </div>
</template>

<script>
var rempx = document.documentElement.clientWidth / 6.4;
document.getElementsByTagName('html')[0].style.fontSize = rempx + "px"; 


export default {
  name: 'Shop',
  data () {
   return{
    flag:0,
    tab_li:[
      {text:"点餐",link:"/Diancan"},
      {text:"评价",link:"/Pingjia"},
      {text:"商家",link:"/Shangjia"}
    ]
   }
  },
  mounted () {
    // 使scale 0.5的div居中
    var w = document.getElementsByClassName("shop_info")[0].offsetWidth;
    var vw = document.documentElement.clientWidth;
    var l = vw - w/2;
    document.getElementsByClassName("shop_info")[0].style.left = l/2 + "px";
    
    console.log($(window).height());
    var h = $(window).height();
    $(".tabs").css("height",h);
    console.log("可视宽度"+h)
    var ulh = h - $(".nav").height();
    console.log("nav"+$(".nav").height())
    console.log("view"+ulh)
    $(".myshop").css("height",ulh);

    var oh = $(".myshop").height();
    console.log(h,ulh,oh)
  },
  methods: {
    chenge_color (ind) {
      this.flag = ind;
    }
  } 
}
</script>

<style scoped>
@import '../assets/iconfont_shop/iconfont.css';

.shop_header{
  position: relative;
  min-height: 3.6rem;
}
.header_bg{
  height: 1.16rem;
  background: red;
}
.header_bg i{
  font-size: 0.50rem;
  margin-left: 0.16rem;
  color: #fff;
}
.shop_logo{
  width: 1.14rem;
  height: 1.14rem;
  border-radius: 4px;
  background: yellow;
  border: none;
  position: absolute;
  top: 0.44rem;
  left: 0;
  right: 0;
  margin: auto;
}
.shop_info{
  padding: 0 0.28rem;
  font-size: 0.36rem;
  position: absolute;
  box-sizing: border-box;
/*  left: 25%;*/
    /*浏览器默认最小字体解决*/
  -webkit-transform: scale(.5);
  transform: scale(.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.shop_info h2{
  text-align: center;
  font-size: 0.72rem;
  font-weight: bold;
  color: #333;
  margin: 1.04rem 0 0.1rem 0; 
  position: relative;
}
.shop_info h2:after{
  content: "";
  border: 0.2rem solid transparent;
  border-left-color: #545454;
  position: absolute;
  top: 0.32rem;
}
.shop_info .p1{
  color: #333;
  margin-bottom: 0.2rem;
}
.shop_info .p1 .dian{
  margin-left: 4px;
  color: #d8d8d8;
}
.shop_info .describe{
  color: #999;
  margin-bottom: 0.32rem;
}
.shop_info p{
  text-align: center;
}
.youhui{
  width: 11.2rem;
  height: 0.76rem;
  line-height: 0.76rem;
  margin: 0 auto;
  border: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  color: #796666;
  position: relative;
  margin-right: 0.4rem;
  box-sizing: border-box;
}
.youhui .left{
  display: flex;
  align-items: center;
}
.youhui .left .first_order{
  height: 0.44rem;
  width: 0.92rem;
  background: #70bc46;
  color: #fff;
  font-size: 0.28rem !important;
  text-align: center;
  line-height: 0.44rem;
  margin: 0 0.2rem 0 0.28rem;
}
.youhui .right{
  padding-right: 0.2rem;
  right: 0.3rem;
  position: absolute;
}
.youhui .right:after{
  content: "";
  border: 0.12rem solid transparent;
  border-top-color: #796666;
  position: absolute;
  top: 0.32rem;
/*  right: 0.2rem;*/
}


/* 选项卡 */
.tabs{
/*  position: fixed;*/
  overflow: hidden;
}
.tabs ul.nav{
  display: flex;
  height: 0.72rem;
  line-height: 0.72rem;
}
.tabs ul.nav li{
  text-align: center;
  flex: 1;
  font-size: 0.24rem;
  color: #666;
}
.tabs ul.nav li.selected a{
  font-weight: bold;
  color: #333;
}
</style>
