import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import {createPinia} from "pinia";
import "@mdi/font/css/materialdesignicons.css";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const Vuetify = createVuetify({
    components,
    directives,
})
const pinia = createPinia()
const app = createApp(App);

app.use(router);
app.use(pinia)
app.use(Vuetify);


app.mount('#app');
