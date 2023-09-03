<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"><strong>Weather App</strong></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" @click="handleLinkClick(35.682839, 139.759455, 'Tokyo', '東京')" href="#">Tokyo</a>
          </li>
  
          <li class="nav-item">
            <a class="nav-link" @click="handleLinkClick(35.4437, 139.6380, 'Yokohama', '横浜')" href="#">Yokohama</a>
          </li>
  
          <li class="nav-item">
            <a class="nav-link" @click="handleLinkClick(35.0116, 135.7681, 'Kyoto', '京都')" href="#">Kyoto</a>
          </li>
  
          <li class="nav-item">
            <a class="nav-link" @click="handleLinkClick(34.6937, 135.5023, 'Osaka', '大阪')" href="#">Osaka</a>
          </li>
  
          <li class="nav-item">
            <a class="nav-link" @click="handleLinkClick(43.0621, 141.3544, 'Sapporo', '札幌')" href="#">Sapporo</a>
          </li>
  
          <li class="nav-item">
            <a class="nav-link" @click="handleLinkClick(35.1815, 136.9066, 'Nagoya', '名古屋')" href="#">Nagoya</a>
          </li>
        </ul>
      </div>
    </nav>
  </template>  

<script>

export default {
  methods: {
    handleLinkClick(lat, lon, city, japaneseCity) {
      this.$emit('city-selected', { lat, lon, city, japaneseCity });
    },
  },
};
</script>





