<template>
	<view>
		<view class="header">
			<view class="bg">
				<view class="box">
					<view class="box-hd">
						<view class="avator">
							<img src="../../static/images/hh.png">
						</view>
						<view class="phone-number">人工智能学院青年志愿者服务队</view>
					</view>
					<view class="box-bd">
						<view class="item">
							<view class="icon"><img src="../../static/user/message.png"></view>
							<view class="text">我的通知</view>
						</view>
						<view class="item">
							<view class="icon"><img src="../../static/user/favorite.png"></view>
							<view class="text">我的收藏</view>
						</view>
						<view class="item">
							<view class="icon"><img src="../../static/user/service.png"></view>
							<view class="text">我的客服</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="list-content">
			<view class="list">
				<view class="li noborder">
					<view class="icon">
						<image src="../../static/user/card.png"></image>
					</view>
					<view class="text">我的名片</view>
					<image class="to" src="../../static/user/to.png"></image>
				</view>
			</view>
			<view class="list">
				<view class="li " @click="changeSkin">
					<view class="icon">
						<image src="../../static/user/skin.png"></image>
					</view>
					<view class="text">主题切换</view>
					<image class="to" src="../../static/user/to.png"></image>
				</view>
				<view class="li ">
					<view class="icon">
						<image src="../../static/user/help.png"></image>
					</view>
					<view class="text">帮助中心</view>
					<image class="to" src="../../static/user/to.png"></image>
				</view>
				<view class="li ">
					<view class="icon">
						<image src="../../static/user/about.png"></image>
					</view>
					<view class="text">关于我们</view>
					<image class="to" src="../../static/user/to.png"></image>
				</view>
				<view class="li ">
					<view class="icon">
						<image src="../../static/user/opinion.png"></image>
					</view>
					<view class="text">意见反馈</view>
					<image class="to" src="../../static/user/to.png"></image>
				</view>
			</view>
			<view class="list">
				<view class="li noborder">
					<view class="icon">
						<image src="../../static/user/set.png"></image>
					</view>
					<view class="text" @click="clearStorage">清理缓存</view>
					<image class="to">{{ currentSize }}</image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex'
	export default {
		
		name: "my-userinfo",
		data() {
			return {

			};
		},
		methods: {
			changeSkin() {
				uni.navigateTo({
					url: 'subPackage/pages/skin-change/skin-change'
				});
			},
			// 清除缓存
			clearStorage() {
				try {
					uni.clearStorageSync();
					uni.showToast({
						title: '清除成功',
						icon: 'none'
					})
				} catch (e) {
					// error
					uni.showToast({
						title: '清除失败',
						icon: 'error'
					})
				}
			},

		}
	}
</script>

<style>

</style>
