<template>
   
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li v-for="(item, index) in carouselItems" :key="index" :data-target="'#carouselExampleIndicators'" :data-slide-to="index" :class="{ 'active': index === 0 }"></li>
    </ol>
    <div class="carousel-inner">
      
      <div v-for="(item, index) in carouselItems" :key="index" :class="['carousel-item', { 'active': index === 0 }]">
        <img :src="getCityImage(selectedCity.city)" class="d-block w-100" :alt="selectedCity.city">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    selectedCity: Object, // Expect selectedCity as a prop
  },
  methods: {
    getCityImage(cityName) {
      const citySlug = cityName.toLowerCase().replace(/\s/g, '-');
      const basePath = '../resources/assets/';
      return `${basePath}${citySlug}.jpg`;
    },
  },
  data() {
    return {
      carouselItems: [
        {
          image: '../resources/assets/Tokyo.jpg',
          alt: 'Tokyo',
        },
        {
          image: '../resources/assets/Yokohama.jpg',
          alt: 'Yokohama',
        },
        {
          image: '../resources/assets/Kyoto.jpg',
          alt: 'Kyoto',
        },
        {
          image: '../resources/assets/Osaka.jpg',
          alt: 'Osaka',
        },
        {
          image: '../resources/assets/Sapporo.jpg',
          alt: 'Sapporo',
        },
        {
          image: '../resources/assets/Nagoya.jpg',
          alt: 'Nagoya',
        },
      ],
    };
  },
};
</script>
