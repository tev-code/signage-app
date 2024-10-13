<!-- @format -->

<template>
  <div
    class="card animate__animated animate__fadeInLeft"
    @click="handleClick"
    loading="lazy"
  >
    <carousel
      :itemsToShow="1"
      :autoplay="4000"
      :autoplayTimeout="4000"
      :transition="1500"
      wrap-around
      :snap-align="'start'"
      :direction="'ltr'"
      class="carousal"
    >
      <slide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Carousel Image" loading="lazy" />
      </slide>
    </carousel>
    <div class="card-content">
      <h3>{{ category }}</h3>
      <p v-if="location">{{ location }}</p>
      <p v-if="hours">{{ hours }}</p>
    </div>

    <div v-if="showIframe" class="iframe-container">
      <iframe src="businessLink" frameborder="0" loading="lazy"></iframe>
      <button @click="closeIframe">Close</button>
    </div>
  </div>
</template>

<script>
  import { Carousel, Slide } from "vue3-carousel";
  import "vue3-carousel/dist/carousel.css";

  export default {
    name: "Card",
    components: {
      Carousel,
      Slide,
    },
    props: {
      category: {
        type: String,
        required: true,
      },
      images: {
        type: Array,
        required: true,
        validator(value) {
          // Check if each item in the array is a valid URL
          return value.every(
            (url) => typeof url === "string" && url.startsWith("http")
          );
        },
      },
      businessLink: {
        type: String,
        required: true,
        validator(value) {
          // Check if the link is a valid URL or a route
          return /^https?:\/\/[^\s]+$/.test(value) || /^\/[^\s]+$/.test(value);
        },
      },
      hours: {
        // New prop for hours
        type: String,
        default: "", // Optional
      },
      location: {
        // New prop for location
        type: String,
        default: "", // Optional
      },
    },
    methods: {
      handleClick() {
        const urlPattern = /^(https?:\/\/)/;
        if (urlPattern.test(this.businessLink)) {
          window.location.href = this.businessLink;
        } else {
          this.$router.push(this.businessLink);
        }
      },
    },
  };
</script>

<style scoped>
  .card {
    height: 800px;
    display: flex;
    flex-direction: column;
    border: 1px solid #1d1d1d;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  .carousal {
    flex-grow: 1;
    height: 100%;
  }
  .card-content {
    padding: 1rem;
    color: #fff;
    background-color: #1d1d1d;
    height: 200px;
  }
  .carousel {
    flex: 1;
  }
  img {
    width: 100%;
    height: 670px;
    object-fit: cover;
  }
</style>
