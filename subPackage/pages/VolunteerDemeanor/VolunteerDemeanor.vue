<template>
	<view>
		<uni-notice-bar show-icon scrollable text="青队云平台正在加紧开发中!!!" />
		</uni-section>
		<uni-search-bar bgColor="#EEEEEE" @confirm="search" :focus="true" v-model="searchValue" @blur="blur"
			@focus="focus" @input="input" @cancel="cancel" @clear="clear">
		</uni-search-bar>
		<view class="search-result">
			<text class="search-result-text">当前输入为：{{ searchValue }}</text>
		</view>
			<uni-card @click="goToDetail" title="播种爱心,陪伴老人" sub-title="橙子养老院基地活动" extra="额外信息" :thumbnail="avatar">
				<text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
			</uni-card>
		<uni-card title="播种爱心,陪伴老人" sub-title="橙子养老院基地活动" extra="额外信息" :thumbnail="avatar">
			<text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
		</uni-card>
		<uni-card title="播种爱心,陪伴老人" sub-title="橙子养老院基地活动" extra="额外信息" :thumbnail="avatar">
			<text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
		</uni-card>
		<uni-card title="播种爱心,陪伴老人" sub-title="橙子养老院基地活动" extra="额外信息" :thumbnail="avatar">
			<text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
		</uni-card>
		<uni-card title="播种爱心,陪伴老人" sub-title="橙子养老院基地活动" extra="额外信息" :thumbnail="avatar">
			<text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
		</uni-card>
		<uni-card title="播种爱心,陪伴老人" sub-title="橙子养老院基地活动" extra="额外信息" :thumbnail="avatar">
			<text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
		</uni-card>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchValue: '',
				avatar: 'https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
			}
		},
		methods: {
			goToDetail(){
				uni.navigateTo({
					url:'../../../subPackage/pages/'
				})
			},
			onClick(e) {
				console.log(e)
			},

			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},
			input(res) {
				console.log('----input:', res)
			},
			clear(res) {
				uni.showToast({
					title: 'clear事件，清除值为：' + res.value,
					icon: 'none'
				})
			},
			blur(res) {
				uni.showToast({
					title: 'blur事件，输入值为：' + res.value,
					icon: 'none'
				})
			},
			focus(e) {
				uni.showToast({
					title: 'focus事件，输出值为：' + e.value,
					icon: 'none'
				})
			},
			cancel(res) {
				uni.showToast({
					title: '点击取消，输入值为：' + res.value,
					icon: 'none'
				})
			}
		}
	}
</script>


<style scoped>
	.u-card-wrap {
		background-color: $u-bg-color;
		padding: 1px;
	}

	.u-body-item {
		font-size: 32rpx;
		color: #333;
		padding: 20rpx 10rpx;
	}

	.u-body-item image {
		width: 120rpx;
		flex: 0 0 120rpx;
		height: 120rpx;
		border-radius: 8rpx;
		margin-left: 12rpx;
	}
</style>
