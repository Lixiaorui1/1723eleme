<template>
	<transition name="component-fade" mode="out-in">
		<div id="login" v-touch:right ="eventFun">
			<div class="login">
				<div class="logo"></div>
				<div class="xuan">
					<a class="selected">登录</a>
					<a >注册</a>
				</div>
				<div class="formm">
					<div class="checked ">
						<section><input type="text" placeholder="手机号" id="phone" v-model="phone"><button @click="getCode()">获取验证码</button></section>
						<section><input type="password" name="" placeholder="密码" id="psw" v-model="psw"></section>
						<section class="tishi">温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意<a href="javascrip:;"><<用户服务协议>></a></section>
						<mt-button type="primary" size="large" @click="login()">登录</mt-button>
					</div>
					<div>
						<section><input type="text" placeholder="手机/邮箱/用户名" id="username" v-model="username"></section>
						<section><input type="password" placeholder="密码" id="password" v-model="password"></section>
						<mt-button type="primary" size="large" @click="register()">注册</mt-button>
					</div>

				</div>
				
			</div>
		</div>
	</transition>
</template>

<script>
	import axios from 'axios'
	import { MessageBox } from 'mint-ui'
	import qs from 'qs'
	

	export default{
		name:'login',
		data:function () {
			return{
					phone:"",
					psw:"",
					username:"",
					password:"",		
				
			}
		},
		methods:{
			getCode () {
				var phone = document.getElementById("phone").value
				//console.log(phone);
				axios.post('/restapi/eus/v3/captchas',{
				  	captcha_str:phone
				  })
				  .then(function (response) {
				   //console.log(response.data.captcha_image);
				    MessageBox.prompt('请输入验证码').then(({ value, action }) => {
				    console.log(value);
				   
				  });
				 
				  });		
			},
			register () {
				var that = this;
				var instance = axios.create({
				    headers: {'content-type': 'application/x-www-form-urlencoded'}
				});
				instance.post('/api/userajax',qs.stringify({
					username:this.username,
					password:this.password
				}))
				.then(function (res) {	
					alert(res.data.message);
					let username = that.username;
					if(res.data.code == 1){	
						console.log(that);
						//调用vuex中的action
						that.$store.dispatch('setUserName',username);
						//跳转页面
						that.$router.history.push({name:'Mine'});
					}

				})

			},
			login () {
				var that = this;
				// var instance = axios.create({
				//     headers: {'content-type': 'application/x-www-form-urlencoded'}
				// });
				axios.post('/api/loginajax',qs.stringify({
					username:this.phone,
					password:this.psw
				}))
				.then(function (res) {	
					alert(res.data.message);
					let username = that.phone;
					console.log(username);
					if(res.data.code == 1){	
						console.log(that);
						//调用vuex中的action
						that.$store.dispatch('setUserName',username);
						//跳转页面
						that.$router.history.push({name:'Mine'});
					}

				})

			},
			eventFun () {
				
				window.history.go(-1);

			}
		},
		mounted () {
			
			//选项卡
			var ans = document.querySelectorAll(".xuan a");
			var divs = document.querySelectorAll(".formm div");
			console.log(ans,divs);
			Array.from(ans).forEach((btn, ind, btns)=>{
				btn.onclick = () => {
					// 清空所有样式
					for(var j=0; j<btns.length; j++){
						btns[j].className = "";
						divs[j].className = "";
					}
					// 设置当前样式
					ans[ind].className = "selected";
					divs[ind].className = "checked";
				}
			})
		}
	}

	
</script>

<style scoped>
	#login{
		background: #fff;
		display: flex;
		flex-direction: row;
		justify-content: center;

	}
	.login{
		width: 4.8rem;
		margin-top: 0.8rem;
	}
	.logo{
		width: 2.6rem;
		height: 1.2rem;
		background: url("../assets/img/logo.png") no-repeat center;
		background-size: contain;
		margin-left: 1rem;
	}
	.xuan{
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 0.6rem;
	}
	.xuan a{
		display: inline-block;
		width: 1rem;
		height: 0.36rem;
		text-align: center;
	}
	.xuan a:nth-child(1){
		margin-right: 0.8rem;

	}
	
	.formm div{
		display: none;
	}
	.formm section{
		width:4.8rem;
		height: 0.6rem;
		
		border: 1px solid #ddd;
		margin-top: 0.3rem;
		border-radius: 8px;
		padding-top: 0.2rem;
	}
	.formm section input{
		border: none;
		line-height: 0.4rem;
		padding-left: 0.2rem;
	}
	.formm section button{
		border: none;
		background-color:#fff;
		color: #999;
		margin-left: 0.3rem;
	}
	.formm .tishi{
		border: none;
		margin-top: 0;
		color: #666;
		font-size: 14px;
	}
	.formm .tishi a{
		color: #2395ff;
	}
	.formm{
		margin-bottom: 1rem;
	}
	.formm .checked{
		display: block;
		position: relative;
	}
	.xuan .selected{
		color: #2395ff;
		border-bottom: 2px solid #2395ff;
	}
	.yzm{
		position: absolute;
		z-index: 999;
		left: 0;
		top: 0;
	}
	.mint-button{
		margin-top: 0.7rem;
	}
	.component-fade-enter-active, .component-fade-leave-active {
	 
	  transition: transform 1s ease;
	}
	.component-fade-leave-to {
	  transform: translateX(+375px);
	  
	}
	.component-fade-enter{
	  transform: translateX(+375px);
	}
</style>