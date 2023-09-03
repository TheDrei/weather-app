<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li v-for="(item, index) in carouselItems" :key="index" :data-target="'#carouselExampleIndicators'" :data-slide-to="index" :class="{ 'active': index === 0 }"></li>
    </ol>
    <div class="carousel-inner">
      <div v-for="(item, index) in carouselItems" :key="index" :class="['carousel-item', { 'active': index === 0 }]">
        <img :src="item.image" class="d-block w-100" :alt="item.alt">
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
  computed: {
    carouselItems() {
      return [
        {
          image: this.getCityImage(this.selectedCity.city),
          alt: this.selectedCity.city,
        },
      ];
    },
  },
  methods: {
    getCityImage(cityName) {
      const citySlug = cityName.toLowerCase().replace(/\s/g, '-');
      const basePath = '../resources/assets/';
      return `${basePath}${citySlug}.jpg`;
    },
  },
  watch: {
    selectedCity: {
      immediate: true, // Trigger the watcher immediately on component mount
      handler(newValue) {
        // Update carouselItems when selectedCity changes
        this.carouselItems = [
          {
            image: this.getCityImage(newValue.city),
            alt: newValue.city,
          },
        ];
      },
    },
  },
};
</script>
