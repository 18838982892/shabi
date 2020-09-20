import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入 element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//引入 axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
    // 引入  echarts
    import echarts from 'echarts'
    Vue.prototype.$echarts = echarts

//格式化时间
Vue.filter('dateFormat', function(originVal) {
    const dt = new Date(originVal)

    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1 + '').padStart(2, '0')
    const d = (dt.getDate() + '').padStart(2, '0')
    const hh = (dt.getHours() + '').padStart(2, '0')
    const ss = (dt.getSeconds() + '').padStart(2, '0')

    return `${y}-${m}-${d} ${hh}:${hh}:${ss}`
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')