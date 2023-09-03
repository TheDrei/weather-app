import { createApp } from 'vue'; 
const app = createApp({});

const eventBus = app.config.globalProperties.$eventBus;

export default eventBus;
