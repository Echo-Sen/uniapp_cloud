// 1.导入 vue vuex
import Vue from 'vue'
import Vuex from 'vuex'
import m_user from './user.js'

// 2.将 Vuex 安装为 Vue 的插件
Vue.use(Vuex)


// 3.创建 Store 的实例对象
const store = new Vuex.Store({
	modules: {
		m_user
	},
})


// 4.向外共享 Store 的实例对象
export default store
