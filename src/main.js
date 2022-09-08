import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { TroisJSVuePlugin } from 'troisjs';

import './styles/css/reset.css';



const app = createApp(App);

app.use(router);
app.use(TroisJSVuePlugin);

app.mount('#app');

