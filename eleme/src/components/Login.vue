<template>
	<div id="login">
		<div class="login">
			<div class="logo"></div>
			<div class="xuan">
				<a >短信登录</a>
				<a >密码登录</a>
			</div>
			<div class="formm">
				<form>
					<section><input type="text" name="" placeholder="手机号"><button>获取验证码</button></section>
					<section><input type="text" name="" placeholder="验证码"></section>
					<section class="tishi">温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意<a href="javascrip:;"><<用户服务协议>></a></section>
				</form>
			</div>
			<mt-button type="primary" size="large">登录</mt-button>
		</div>
	</div>
</template>

<script>
	
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
	}
	.xuan a:nth-child(1){
		margin-right: 0.8rem;
	}
	.xuan a:hover{
		color: #2395ff;
		border-bottom: 2px solid #2395ff;

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
</style>