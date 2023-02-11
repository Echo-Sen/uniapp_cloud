<template>
	<view>
		<template>
			<view class="login-container">
				<!-- 提示登录的图标 -->
				<uni-icons type="contact-filled" size="100" color="#AFAFAF"></uni-icons>
				<!-- 登录按钮 -->
				<button type="primary" class="btn-login" @click="getUserProfile">一键登录</button>
				<!-- 登录提示 -->
				<view class="tips-text">登录后尽享更多权益</view>
			</view>
		</template>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		name: "my-login",
		data() {
			return {}
		},
		computed: {
			...mapState('m_user', ['token', 'userInfo'])
		},
		methods: {
			//事件名，通过点击事件执行该方法
			getUserProfile() {
				uni.getUserInfo({
					desc: '获取用户信息',
					success: res => {
						console.log(res);
						//见下方微信登录方法
						this.userLogin(res.userInfo);
					},
					fail: err => {
						this.tui.toast('获取用户信息失败')
					}
				})
			},
			userLogin(userInfo) {
				let that = this
				console.log('userInfo',userInfo);
				uni.login({
					provider: 'weixin',
					success: res => {
						console.log("res",res);
						// 数据缓存 此处微信小程序 对信息做过加密处理只能得到匿名信息
						// uni.setStorageSync('nickname', userInfo.nickName)
						// uni.setStorageSync('avatar', userInfo.avatarUrl)
						// 头像赋值
						that.$store.commit('m_user/updateUserInfo', userInfo)
						// this.userInfo.avatar = userInfo.avatarUrl
						// 昵称赋值
						// this.userInfo.nickName = userInfo.nickName
						uni.showToast({
							title: '登录成功',
							duration: 2000
						})
						// 发起网络请求
						// uni.request({
						// 	url: '',
						// 	data: '',
						// 	success: res => {
						// 		// 存入token 
						// 		uni.setStorageSync('token', userInfo.nickName)
						// 		this.token = '123'
						// 	}
						// })
						// 存入token 并本地缓存
						that.$store.commit('m_user/updateToken', 'hhh')
					}
				})
			},


		}
	}
</script>

<style lang="scss">
	.login-container {
		// 登录盒子的样式
		height: 750rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #f8f8f8;
		position: relative;
		overflow: hidden;

		// 绘制登录盒子底部的半椭圆造型
		&::after {
			content: ' ';
			display: block;
			position: absolute;
			width: 100%;
			height: 40px;
			left: 0;
			bottom: 0;
			background-color: white;
			border-radius: 100%;
			transform: translateY(50%);
		}

		// 登录按钮的样式
		.btn-login {
			width: 90%;
			border-radius: 100px;
			margin: 15px 0;
			background-color: #c00000;
		}

		// 按钮下方提示消息的样式
		.tips-text {
			font-size: 12px;
			color: gray;
		}
	}
</style>
