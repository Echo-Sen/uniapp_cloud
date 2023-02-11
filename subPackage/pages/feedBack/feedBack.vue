<template>
	<view class="container">
		<textarea placeholder="请输入您的反馈意见" v-model="feedback" :maxlength="maxLength"></textarea>
		<view class="counter">{{ feedback.length }}/{{ maxLength }}</view>
		<button @click="submitFeedback">提交反馈</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				feedback: '',
				maxLength: 200
			}
		},
		methods: {
			async submitFeedback() {
				if (!this.feedback) {
					uni.showToast({
						title: '请输入您的反馈意见',
						icon: 'none'
					})
					return
				}

				// 将反馈意见发送到后台
				try {
					const res = await this.$api.post('/feedback', {
						content: this.feedback
					})
					if (res.status === 200) {
						uni.showToast({
							title: '感谢您的反馈',
							icon: 'success'
						})
						this.feedback = ''
					} else {
						uni.showToast({
							title: '反馈失败，请稍后再试',
							icon: 'none'
						})
					}
				} catch (err) {
					uni.showToast({
						title: '反馈失败，请稍后再试',
						icon: 'none'
					})
				}
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
	}

	textarea {
		width: 100%;
		height: 200px;
		padding: 10px;
		border-radius: 5px;
		border: 1px solid #ccc;
		font-size: 14px;
		resize: none;
	}

	.counter {
		text-align: right;
		margin-top: 5px;
		color: #999;
	}

	button {
		width: 100%;
		padding: 10px;
		background-color: #007aff;
		color: #fff;
		border-radius: 5px;
		margin-top: 10px;
		font-size: 14px;
		border: none;
	}
</style>
