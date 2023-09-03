<template>
    <div>
      <NavBar @city-selected="selectCity" />
      <div class="carousel-container">
        <Carousel :selectedCity="selectedCity" />
        <Weather
          v-if="showWeather"
          class="weather-overlay"
          :selectedCity="selectedCity" 
        />
      </div>
      <Places :selectedCity="selectedCity" />
      <Tourism :selectedCity="selectedCity" />
      
    </div>
  </template>
  
  <script>
  import Carousel from './Carousel.vue';
  import Weather from './Weather.vue';
  import Places from './Places.vue';
  import Tourism from './Tourism.vue';
  import NavBar from './NavBar.vue';
  
  export default {
    components: {
      Carousel,
      Weather,
      Places,
      Tourism,
      NavBar,
    },
    data() {
      return {
        showWeather: true,
        selectedCity: { // Initialize selectedCity as an object with default values
          lat: 35.682839,
          lon: 139.759455,
          city: 'Tokyo',
          japaneseCity: '東京',
        },
      };
    },
    methods: {
      selectCity(cityData) {
        this.selectedCity = cityData; // Update selectedCity when a city is selected
      },
    },
  };
  </script>
  