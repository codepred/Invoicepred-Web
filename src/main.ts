import { createApp } from 'vue'
import './assets/main.css';
import App from './App.vue'
import router from './router/index.ts'

const app = createApp(App);


declare global {
    interface Window {
        PICKED_CURRENCY: string;
        PICKED_LANGUAGE: string;
    }
}

window.PICKED_CURRENCY = '€'
window.PICKED_LANGUAGE = 'EN'

app.use(router);

app.mount('#app');
