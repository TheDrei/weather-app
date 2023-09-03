<template>
    <div>
      <NavBar @city-selected="selectCity" />
      <div class="carousel-container">
        <Carousel />
        <Weather
          v-if="showWeather"
          class="weather-overlay"
          :selectedCity="selectedCity" 
        />
      </div>
    </div>
  </template>
  
  <script>
  import Carousel from './Carousel.vue';
  import Weather from './Weather.vue';
  import NavBar from './NavBar.vue';
  
  export default {
    components: {
      Carousel,
      Weather,
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
  