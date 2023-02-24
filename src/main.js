import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import components from './components/icons'
import ECharts from 'vue-echarts'
const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component);
})

app.component('v-chart', ECharts);

app.use(store).mount('#app')
