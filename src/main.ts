import { createApp } from 'vue'
import './assets/main.css';
import App from './App.vue'
import router from './router/index.ts'

const app = createApp(App);


declare global {
    interface Window {
        PICKED_CURRENCY: string;
    }
}

window.PICKED_CURRENCY = '€'

app.use(router);

app.mount('#app');
