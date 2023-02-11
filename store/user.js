export default {
	namespaced: true,
	state: {
		token: '',
		userInfo: {
			nickName: '',
			avatar: ''
		},
	},
	// 模块的 mutations 方法，赋值
	mutations: {
		updateUserInfo(state, userInfo) {
			state.userInfo.avatar = userInfo.avatarUrl
			state.userInfo.nickName = userInfo.nickName
			this.commit('m_user/saveUserInfo')
		},
		saveUserInfo(state) {
			uni.setStorageSync('userinfo', JSON.stringify(state.userInfo))
		},
		updateToken(state, token) {
			state.token = token
			this.commit('m_user/saveToken')
		},
		saveToken(state) {
			uni.setStorageSync('token', JSON.stringify(state.token))
		}
	},
	// 模块的 getters 属性
	getters: {},
}
