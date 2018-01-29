<template>
  <div id="app">
    <router-view class="content"/>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
		var rempx = document.documentElement.clientWidth / 6.4;
		document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";	
export default {
  name: 'App'
  
}
</script>

<style>
	@import "./assets/css/reset.css";

html,body{height: 100%;}
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.content{
	flex: 1 ;
	overflow-y: scroll;
}
</style>
