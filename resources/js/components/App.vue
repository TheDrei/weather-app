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
      <Tourism 
        :selectedCity="selectedCity" 
      />

      <!-- Footer -->
      <footer class="bg-light text-black p-5">
        <div class="container">
            <div class="row">
            <div class="col-md-4">
                <h5>About the Weather App</h5>
                <p>This page aims to provide travel information of Japan for foreign tourists visiting Japan for the first time.</p>
            </div>
            <div class="col-md-4">
                <h5>Contact Us</h5>
                <address>
                <p>Email: weatherapp@example.com</p>
                <p>Phone: +1 (123) 456-7890</p>
                </address>
            </div>
            <div class="col-md-4">
                <h5>Follow Us</h5>
                <ul class="list-unstyled">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                </ul>
            </div>
            </div>
        </div>
        </footer>
      
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
  