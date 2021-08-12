import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/app.css'; 
import LoadMore from './components/ui/LoadMore'
import NavBar from './components/Layouts/header.vue'

import VueEasyLightbox from 'vue-easy-lightbox'
import Api from './vue.config'
import axios from 'axios';

import showModal from '@/components/ui/Modals.vue';

axios.defaults.baseURL = "http://localhost:8000/api/v1/";

const app = createApp(App);
app.use(Api);
app.use(store);
app.use(router);
app.component('load-more',LoadMore);
app.component('nav-bar',NavBar);
app.component('show-modal',showModal)
app.use(VueEasyLightbox);
app.mount('#app');
//createApp(App).use(store).use(router).mount('#app')