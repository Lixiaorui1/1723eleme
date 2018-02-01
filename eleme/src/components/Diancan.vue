<template>
  <div class="diancan">
    <div class="order">
      <div class="left">
        <div>
          <ul>
            <li v-for="(item,index) in menu">
              <img v-if="item.name=='热销'" src="../assets/img/rexiao.png" />
              <img v-if="item.name=='优惠'" src="../assets/img/youhui.png" />
              {{item.name}}
            </li>
          </ul>
        </div>  
      </div>

      <div class="right">  
        <ul v-for="(item,index) in menu">
          <div class="title"><span>{{item.name}}</span>{{item.description}}</div>
          <li v-for="(food,ind) in item.foods">
            <img :src="fn(food.image_path)" />
            <div class="info">
              <p class="tit">{{food.name}}</p>
              <p class="des">{{food.description}}</p>
              <p class="zh">{{food.tips}}</p>
              <p class="price">¥<span>{{food.specfoods[0].price}}</span></p>
              <i class="iconfont">&#xe659;</i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props:['id'],
  name: 'Diancan',
  data () {
    return {
      menu : [],
    }
  },
  mounted (){
    // setTimeout(function(){
     
    // },500)
    this.$nextTick(function(){
    var oh = $(".myshop").height();
    $(".order").css("height",oh);
    $(".order .left").css("height",oh);
    $(".order .right").css("height",oh);
    })

    // ajax
    var myid = $(".shop").attr("title");
    console.log(myid);

    axios.get(`/restapi/shopping/v2/menu?restaurant_id=${myid}`)
    .then((res)=>{
      this.menu = res.data;
      console.log(res);
    })
    
  },
  methods:{
    fn (mypath) {
      var x ="https://fuss10.elemecdn.com/" + mypath.slice(0,1) + "/" + mypath.slice(1,3) + "/" + mypath.slice(3) + ".jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/";
      return x;
    }
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
.right .title{
  color: #999;
  font-size: 0.2rem;
  line-height: 0.5rem;
  border-bottom: 1px solid #eee;
  margin-bottom: 0.12rem;
}
.right .title span{
  color: #666;
  font-weight: bold;
  font-size: 0.22rem;
  margin-right: 0.08rem;
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
  width: 3rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.right li .info .zh{
  color: #666;
}
.right li .info .price{
  color: #ff6600;
  font-size: 0.18rem;
}
.right li .info .price span{
  font-size: 0.32rem;
  font-weight: bold;
}

</style>
