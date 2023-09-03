<template>
  <div class="weather-container">
    <p v-if="weatherData" class="weather-item">
      <h1 class="city">{{ selectedCity.city }}</h1>
      <h4 class="japanese-city">{{ selectedCity.japaneseCity }}</h4>

      <h4>Weather Information</h4>
      Temperature: {{ weatherData.list[0].main.temp }}°C <br />
      Description: {{ weatherData.list[0].weather[0].description }} <br />
      Humidity: {{ weatherData.list[0].main.humidity }}%
    </p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>
<script>
export default {
  props: {
    selectedCity: Object, // Expect selectedCity as a prop
  },
  data() {
    return {
      units: 'metric',
      appid: '1ef6184f18b96a4fd3a58d2dc0b2359d',
      weatherData: null,
      error: null,
    };
  },
  mounted() {
    // Check if selectedCity is null or undefined, then set it to the default value (Tokyo)
    if (!this.selectedCity) {
      this.selectedCity = {
        lat: 35.682839,
        lon: 139.759455,
        city: 'Tokyo',
        japaneseCity: '東京',
      };
    }

    // Fetch initial weather data when the component is mounted
    this.getWeatherData();
  },
  watch: {
    selectedCity: {
      handler(newSelectedCity) {
        // When selectedCity changes, fetch weather data for the new city
        this.getWeatherData();
      },
      deep: true, // Watch for changes in nested properties of selectedCity
    },
  },
  methods: {
    async getWeatherData() {
      const { lat, lon, city, japaneseCity } = this.selectedCity;
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.appid}&units=${this.units}`;

      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response:', data);

        this.weatherData = data;
      } catch (error) {
        console.error('Error fetching weather data:', error);
        this.error = 'Failed to fetch weather data. Please try again later.';
      }
    },
  },
};
</script>