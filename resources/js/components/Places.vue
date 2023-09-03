<template>
  <div class="places-container">
    <div v-if="placesData">
    <table class="table table-hover table-bordered table-striped table-light">
      <thead>
        <tr>
          <th colspan="2"> <center>Suggested Accommodations at {{ selectedCity.city }} </center>
        </th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Address</th>
        </tr>
      </thead>
      
      <tbody>
        <tr v-for="(place, index) in placesData.features" :key="index">
          <td>{{ place.properties.name }}</td>
          <td>{{ place.properties.formatted }}</td>
        </tr>
      </tbody>
    </table>
</div>
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
        placesData: null,
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
  
      // Fetch initial accommodation data when the component is mounted
      this.getAccommodationData();
    },
    watch: {
      selectedCity: {
        handler(newSelectedCity) {
          // When selectedCity changes, fetch accommodation data for the new city
          this.getAccommodationData();
        },
        deep: true, // Watch for changes in nested properties of selectedCity
      },
    },
    methods: {
      async getAccommodationData() {
        // Construct the API URL dynamically based on the selectedCity's latitude and longitude
        const { lat, lon } = this.selectedCity;
        const apiKey = '332518e3e4864767b744cdb38e33a821';
        const apiUrl = `https://api.geoapify.com/v2/places?categories=accommodation, office.government.transportation&bias=proximity:${lon},${lat}&limit=20&apiKey=${apiKey}`;

        console.log(apiUrl)
  
        try {
          const response = await fetch(apiUrl);
  
          if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
          }
  
          const data = await response.json();
          console.log('API Response:', data);
  
          this.placesData = data;
        } catch (error) {
          console.error('Error fetching accommodation data:', error);
          this.error = 'Failed to fetch accommodation data. Please try again later.';
        }
      },
    },
  };
  </script>
  