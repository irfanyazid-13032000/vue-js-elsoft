<template>
  <div>
     <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.2.0/css/all.css'>
		 <div class="bungkus">
    <div class="container">
			<div class="screen">
				<div class="screen__content">
					<form class="login" @submit.prevent="onLogin()">
					<h1>silahkan login</h1>
						<div class="login__field">
							<i class="login__icon fas fa-user"></i>
							<input type="text" class="login__input" placeholder="Username" v-model="username">
							<h5 v-if="errorUsername.length > 0" class="error">{{ errorUsername }}</h5>
						</div>
						<div class="login__field">
							<i class="login__icon fas fa-lock"></i>
							<input type="password" class="login__input" placeholder="Password" v-model="password">
							<h5 v-if="errorPassword.length > 0" class="error">{{ errorPassword }}</h5>
						</div>
						<button class="button login__submit">
							<span class="button__text">Log In Now</span>
							<i class="button__icon fas fa-chevron-right"></i>
						</button>				
					</form>
					<div class="social-login">
						<h3>log in via</h3>
						<div class="social-icons">
							<a href="#" class="social-login__icon fab fa-instagram"></a>
							<a href="#" class="social-login__icon fab fa-facebook"></a>
							<a href="#" class="social-login__icon fab fa-twitter"></a>
						</div>
					</div>
				</div>
				<div class="screen__background">
					<span class="screen__background__shape screen__background__shape4"></span>
					<span class="screen__background__shape screen__background__shape3"></span>		
					<span class="screen__background__shape screen__background__shape2"></span>
					<span class="screen__background__shape screen__background__shape1"></span>
				</div>		
			</div>
		</div>
		<div style="display:flex; position:absolute; align-items:center;justify-content:center; height:100vh;width:100%;background-color:black;z-index:100;opacity:.8;top:0;left:0">
			<div style="background-color:white;z-index:11;width:400px;height:90px;border-radius:10px">
				<h1 style="text-align: center; padding:5px">Username Atau Password Salah !</h1>
			</div>
			<div style="position:absolute; top:0;right:0">
				<div style="background-color:white;width:100px;height:100px;display:flex;align-items:center;justify-content:center;z-index:12">
				<p style="font-size:100px;font-weight:bold">X</p>
				</div>
			</div>
		</div>
		 </div>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,700');

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;	
	font-family: Raleway, sans-serif;
}

body {
	background: linear-gradient(90deg, #C7C5F4, #776BCC);		
}

.bungkus{
	height: 100vh;
}

.container {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
}

.screen {		
	background: linear-gradient(90deg, #5D54A4, #7C78B8);		
	position: relative;	
	height: 600px;
	width: 360px;	
	box-shadow: 0px 0px 24px #5C5696;
}

.screen__content {
	z-index: 1;
	position: relative;	
	height: 100%;
}

.screen__background {		
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 0;
	-webkit-clip-path: inset(0 0 0 0);
	clip-path: inset(0 0 0 0);	
}

.screen__background__shape {
	transform: rotate(45deg);
	position: absolute;
}

.screen__background__shape1 {
	height: 520px;
	width: 520px;
	background: #FFF;	
	top: -50px;
	right: 120px;	
	border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
	height: 220px;
	width: 220px;
	background: #6C63AC;	
	top: -172px;
	right: 0;	
	border-radius: 32px;
}

.screen__background__shape3 {
	height: 540px;
	width: 190px;
	background: linear-gradient(270deg, #5D54A4, #6A679E);
	top: -24px;
	right: 0;	
	border-radius: 32px;
}

.screen__background__shape4 {
	height: 400px;
	width: 200px;
	background: #7E7BB9;	
	top: 420px;
	right: 50px;	
	border-radius: 60px;
}

.login {
	width: 320px;
	padding: 30px;
	padding-top: 156px;
}

.login__field {
	padding: 15px 1px;	
	position: relative;	
}

.login__icon {
	position: absolute;
	top: 25px;
	color: #7875B5;
}

.login__input {
	border: none;
	border-bottom: 2px solid #D1D1D4;
	background: none;
	padding: 7px;
	padding-left: 24px;
	font-weight: 700;
	width: 75%;
	transition: .2s;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
	outline: none;
	border-bottom-color: #6A679E;
}

.login__submit {
	background: #fff;
	font-size: 14px;
	margin-top: 30px;
	padding: 16px 20px;
	border-radius: 26px;
	border: 1px solid #D4D3E8;
	text-transform: uppercase;
	font-weight: 700;
	display: flex;
	align-items: center;
	width: 100%;
	color: #4C489D;
	box-shadow: 0px 2px 2px #5C5696;
	cursor: pointer;
	transition: .2s;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
	border-color: #6A679E;
	outline: none;
}

.button__icon {
	font-size: 24px;
	margin-left: auto;
	color: #7875B5;
}

.social-login {	
	position: absolute;
	height: 140px;
	width: 160px;
	text-align: center;
	bottom: 0px;
	right: 0px;
	color: #fff;
}

.social-icons {
	display: flex;
	align-items: center;
	justify-content: center;
}

.social-login__icon {
	padding: 20px 10px;
	color: #fff;
	text-decoration: none;	
	text-shadow: 0px 0px 8px #7875B5;
}

.social-login__icon:hover {
	transform: scale(1.5);	
}

.error{
	color: red;
}

</style>


<script>
import { validateUsername, validatePassword } from '../services/SignupValidations'
import axios from 'axios'
export default {
	data() {
		return {
			username: '',
			password: '',
			errorUsername:'',
			errorPassword:''
		}
	},
	methods: {
		onLogin() {
			this.errorUsername = validateUsername(this.username)
			this.errorPassword = validatePassword(this.password)
			if (this.errorUsername || this.errorPassword) {
				return
			}

		axios.post('https://core.api.elsoft.id/portal/api/auth/signin',
				{
					"UserName": this.username,
					"Password": this.password,
					"Company": "d3170153-6b16-4397-bf89-96533ee149ee",
					"browserInfo": {
						"chrome": true,
						"chrome_view": false,
						"chrome_mobile": false,
						"chrome_mobile_ios": false,
						"safari": false,
						"safari_mobile": false,
						"msedge": false,
						"msie_mobile": false,
						"msie": false
					},
					"osNameInfo": {
						"name": "Mac",
						"version": "10.15",
						"platform": ""
					},
					"Device": "web_1703742830368",
				}).then(function (response) {
						console.log(response);
				})
			.catch(function (err) {
						if (err.response.status == 401) {
							alert("username atau password salah !!!")
						}
						console.log(err.response.status)
					})
		}
	},
}
</script>