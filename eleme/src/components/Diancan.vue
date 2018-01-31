<template>
  <div class="diancan">
    <div class="order">
      <div class="left">
      <ul>
        <li><img src="../assets/img/rexiao.png" /><span>热销</span></li>
        <li><img src="../assets/img/youhui.png" />优惠</li>
        <li>1</li>
        <li>2</li>
        <li>1</li>
        <li>2</li>
        <li>1</li>
        <li>2</li>
        <li>1</li>
        <li>2</li>
      </ul></div>
      <div class="right">
      <ul>
        <li>
          <img src="">
          <div class="info">
            <p class="tit">鲜肉包子</p>
            <p class="des">这里是对菜品的描述</p>
            <p class="zh">
              <span class="ys">月售200份</span>
              <span class="hp">好评率97%</span>
            </p>
            <p class="price">¥<span>4</span></p>
            <i class="iconfont">&#xe659;</i>
          </div>
        </li>
        <li>b</li>
        <li>a</li>
        <li>b</li>
        <li>a</li>
        <li>b</li>
        <li>a</li>
        <li>b</li>
        <li>a</li>
        <li>b</li>
        <li>a</li>
        <li>b</li>
      </ul></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Diancan',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted (){
    // setTimeout(function(){
     
    // },500)
    this.$nextTick(function(){
       console.log($(".myshop"));
    var oh = $(".myshop").height();
    console.log(oh);
    $(".order").css("height",oh);
    $(".order .left").css("height",oh);
    $(".order .right").css("height",oh);
    console.log("shop"+oh);
    })

    // ajax
    
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/iconfont_shop/iconfont.css';

.diancan{
  height: 100%;
  font-size: 12px;
}
.order{
  display: flex;
}
/* 左边菜单 */
.left{
  width: 1.32rem;
  background: #f8f8f8;
  overflow-y: scroll;
  overflow-x: hidden;
}
.left li{
  line-height: 0.88rem;
  padding-left: 0.14rem;
  border-bottom: 1px solid #e8e8e8;
  font-size: 0.24rem;
  color: #666;
}
.left li.selected{
  color: #333;
  background: #fff;
}
.left li img{
  width: 0.22rem;
  height: 0.22rem;
  margin: 0.33rem 0.1rem 0 0;
}

/* 右边菜单 */
.right{
  flex: 1;
  
  overflow-y: auto;
  overflow-x: hidden;
  height: 300px;
  padding-left: 0.18rem;
}
.right li{
  height: 1.46rem;
  margin-bottom: 0.5rem;
/*  background: green;*/
  display: flex;
  position: relative;
}
.right li img{
  width: 1.3rem;
  height: 1.3rem;
  background: yellow;
  border-radius: 4px;
}
.right li .info{
  margin-left: 0.1rem;
}
.right li .info .tit{
  font-size: 0.28rem;
  font-weight: bold;
}
.right li i{
  color: #2395ff;
  position: absolute;
  right: 0.16rem;
  bottom: 0;
  font-size: 0.42rem;
}
.right li .info .des{
  color: #999;
}
.right li .info .zh{
  color: #666;
}
.right li .info .price{
  color: #ff6600;
  font-size: 0.18rem;
}
.right li .info .price span{
  font-size: 0.2rem;
  font-weight: bold;
}
</style>
