<template>
  <div class="diancan">
    <div class="order">
      <div class="left">
      <ul>
        <li>1</li>
        <li>2</li>
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
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.diancan{
  height: 100%;
}
.order{
  display: flex;
}
/* 左边菜单 */
.left{
  width: 1.32rem;
  background: yellow;
  overflow-y: scroll;
  overflow-x: hidden;
}
.left li{
  line-height: 0.88rem;
}

/* 右边菜单 */
.right{
  flex: 1;
  background: green;
  overflow-y: auto;
  overflow-x: hidden;
  height: 300px;
}
.right li{
  height: 1.46rem;
}
</style>
