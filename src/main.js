import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import axios from 'axios'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import {Indicator} from 'mint-ui'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

Vue.use(MintUI)

axios.interceptors.request.use(
	config => {
		//加载动画
		Indicator.open();
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

//响应拦截
axios.interceptors.response.use(
	response => { 
		Indicator.close();
		return response;
	},
	error => {
		//错误提醒
		Indicator.close();
		return Promise.reject(error);
	}
)

new Vue({
  render: h => h(App),
  router:routes,
  store,
}).$mount('#app')
