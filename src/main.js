import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { TroisJSVuePlugin } from 'troisjs';
import VueUniversalModal from 'vue-universal-modal';

import 'vue-universal-modal/dist/index.css';
import './styles/css/reset.css';



const app = createApp(App);

app.use(router);
app.use(TroisJSVuePlugin);
app.use(VueUniversalModal, {
    teleportTarget: '#modals',
});

app.mount('#app');

