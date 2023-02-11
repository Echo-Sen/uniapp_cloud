<template>
	<view class="container">
		<view class="nav">
			<swiper :autoplay="true" :interval="3000" :duration="1000" :circular="true">
				<swiper-item v-for="img in carouselList" :key="img.id">
					<view class="swiper-item"><img style="width: 100%;" :src="img.url" alt="青年志愿者服务队"></view>
				</swiper-item>
			</swiper>
		</view>
		<fui-grid>
			<fui-grid-item v-for="(item,index) in List" :key="index">
				<view class="fui-grid__cell" @click="goTo(item)">
					<image :src="item.img" class="fui-icon" mode="widthFix"></image>
					<text>{{ item.text }}</text>
				</view>
			</fui-grid-item>
		</fui-grid>
	</view>
</template>

<script>
	import fuiGrid from "@/components/firstui/fui-grid/fui-grid.vue"
	import fuiGridItem from "@/components/firstui/fui-grid-item/fui-grid-item.vue"
	export default {
		components: {
			fuiGrid,
			fuiGridItem
		},
		data() {
			return {
				carouselList: [{
					id: 1,
					url: '../../static/qd1.jpg'
				}, {
					id: 2,
					url: '../../static/qd2.jpeg'
				}, {
					id: 3,
					url: '../../static/qd3.jpeg'
				}, {
					id: 4,
					url: '../../static/qd4.jpeg'
				}],
				List: [{
						text: "借伞",
						url: 'subPackage/pages/borrow/borrow',
						img: '../../static/images/borrow.png'
					},
					{
						text: "还伞",
						url: 'subPackage/pages/return/return',
						img: '../../static/images/return.png'
					},
					{
						text: "失物招领",
						url: 'subPackage/pages/lostAndFound/lostAndFound',
						img: '../../static/images/lostAndFound.png'
					},
					{
						text: "志愿风采",
						url: 'subPackage/pages/VolunteerDemeanor/VolunteerDemeanor',
						img: '../../static/images/VolunteerDemeanor.png'
					}, {
						text: "参加活动",
						url: 'subPackage/pages/joinActive/joinActive',
						img: '../../static/images/joinActive.png'
					}, {
						text: "意见反馈",
						url: 'subPackage/pages/feedBack/feedBack',
						img: '../../static/images/feedBack.png'
					}
				]
			}
		},
		methods: {
			goTo(e) {
				uni.navigateTo({
					url: e.url,
					animationType: 'pop-out',
					animationDuration: 300
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #FFFFFF;
		/* 非nvue端可通过此变量控制边框颜色 */
		/* --fui-color-border:#465CFF; */
	}

	.nav {
		height: 450rpx;
	}

	.nav swiper {
		width: 100%;
		height: 100%;
		border-radius: 5rpx;
	}

	.fui-section__title {
		margin-left: 32rpx;
	}

	.fui-grid__cell {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		flex: 1;
		font-size: 28rpx;
		font-weight: 400;
	}

	.fui-padding {
		padding: 36rpx 0;
	}

	.fui-icon {
		width: 96rpx;
		height: 96rpx;
		margin-bottom: 16rpx;
	}

	.fui-icon__2x {
		width: 64rpx;
		height: 64rpx;
		margin-bottom: 16rpx;
	}

	.fui-flex__column {
		flex: 1;
	}
</style>
