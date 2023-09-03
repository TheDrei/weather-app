import './bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../css/app.css'
                                                            
import {createApp} from 'vue/dist/vue.esm-bundler.js';
import Carousel from './components/Carousel.vue';
import NavBar from './components/NavBar.vue';
import Weather from './components/Weather.vue';
import App from './components/App.vue';

const app = createApp({});

app.component('carousel-component', Carousel);
app.component('nav-component', NavBar);
app.component('weather-component', Weather);
app.component('app-component', App);

app.mount("#app");
                                                        
                                                    
                                                            
                                                        