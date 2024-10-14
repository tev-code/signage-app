<!-- @format -->

<template>
  <div>
    <Navbar />
    <Header />
    <div class="event-section">
      <div class="h2-container">
        <h2>Ads and Events</h2>
      </div>
      <EventCarousal :events="events" />
    </div>
    <div class="h2-container">
      <h2>Shops</h2>
    </div>
    <div class="card-container">
      <Card
        v-for="category in categories"
        :key="category.name"
        :category="category.name"
        :images="category.images"
        :businessLink="getBusinessLink(category.name)"
      />
    </div>
    <MallMapCarousal />
  </div>
</template>

<script>
  import ScrollReveal from "scrollreveal";
  import Navbar from "../components/NavbarComp.vue";
  import Header from "../components/HeaderComp.vue";
  import Card from "../components/CardComp.vue";
  import EventCarousal from "../components/EventCarousal.vue";
  import MallMapCarousal from "../components/MallMapCarousal.vue";

  import mall1 from "../assets/mall1.jpg";
  import mall2 from "../assets/mall2.jpg";
  import fashion1 from "../assets/fashion1.jpg";
  import fashion2 from "../assets/fashion2.jpg";

  import beauty1 from "../assets/beauty1.jpg";
  import beauty2 from "../assets/beauty2.jpg";
  import dining1 from "../assets/dining1.jpg";
  import dining2 from "../assets/dining2.jpg";
  import event1 from "../assets/event1.jpg";
  import event2 from "../assets/event2.jpg";
  import entertainment1 from "../assets/entertainment1.jpg";
  import entertainment2 from "../assets/entertainment2.jpg";
  import service1 from "../assets/service1.jpg";
  import service2 from "../assets/service2.jpg";
  import optics1 from "../assets/optics1.jpg";
  import optics2 from "../assets/optics2.jpg";
  import optics3 from "../assets/optics3.jpg";

  import pet1 from "../assets/pet1.jpg";
  import pet2 from "../assets/pet2.jpg";
  import speciality1 from "../assets/speciality1.jpg";
  import speciality2 from "../assets/speciality2.jpg";
  import speciality from "../assets/speciality3.jpg";
  import supermarket2 from "../assets/supermarket2.jpg";
  import supermarket3 from "../assets/supermarket3.jpg";
  import supply1 from "../assets/supply1.jpg";
  import supply2 from "../assets/supply2.jpg";
  import supply3 from "../assets/supply3.jpg";
  import audio1 from "../assets/audio1.jpg";
  import audio2 from "../assets/audio2.jpg";
  import bank1 from "../assets/bank1.jpg";
  import bank2 from "../assets/bank2.jpg";
  import vid from "../assets/vid.mp4";
  import activity1 from "../assets/activity1.jpg";
  import activity2 from "../assets/activity2.jpg";
  import interior1 from "../assets/interior1.jpg";
  import interior2 from "../assets/interior2.jpg";
  import jewellery1 from "../assets/jewellery1.jpg";
  import jewellery2 from "../assets/jewellery2.jpg";
  import liquor from "../assets/liquor.jpg";
  import toy1 from "../assets/toy1.jpg";
  import toy2 from "../assets/toy2.jpg";
  import pharmacy1 from "../assets/pharmacy1.jpg";
  import pharmacy2 from "../assets//pharmacy2.jpg";

  export default {
    name: "Home",
    components: { Navbar, Header, Card, EventCarousal, MallMapCarousal },
    data() {
      return {
        events: [
          { type: "video", media: vid },
          { type: "image", media: mall1 },
          { type: "image", media: event2 },
          { type: "video", media: vid },
          { type: "image", media: mall2 },
          { type: "image", media: event1 },
        ],
        categories: [
          {
            name: "Activities",
            images: [activity1, activity2], // Add actual image filenames
          },
          { name: "Care", images: [beauty1, beauty2] },
          {
            name: "Dining",
            images: [dining1, dining2], // Add actual image filenames
          },

          { name: "Electronics", images: [audio1, audio2] },
          { name: "Entertainment", images: [entertainment1, entertainment2] },
          {
            name: "Fashion",
            images: [fashion1, fashion2], // Add actual image filenames
          },
          { name: "Finance", images: [bank1, bank2] },
          {
            name: "Interiors",
            images: [interior1, interior2], // Add actual image filenames
          },
          {
            name: "Jewellery",
            images: [jewellery1, jewellery2], // Add actual image filenames
          },
          { name: "Liquor", images: [liquor] },
          { name: "Optics", images: [optics1, optics2, optics3] },
          { name: "Pharmacy", images: [pharmacy1, pharmacy2] },
          {
            name: "Pets",
            images: [pet1, pet2], // Add actual image filenames
          },
          {
            name: "Service",
            images: [service1, service2], // Add actual image filenames
          },
          {
            name: "Specialities",
            images: [speciality1, speciality2], // Add actual image filenames
          },
          { name: "Supplies", images: [supply1, supply2, supply3] },

          {
            name: "Supermarkets",
            images: [supermarket2, supermarket3], // Add actual image filenames
          },

          {
            name: "Toys",
            images: [toy1, toy2], // Add actual image filenames
          },
        ],
      };
    },
    methods: {
      getBusinessLink(categoryName) {
        return `/category/${categoryName}`;
      },
    },
    mounted() {
      ScrollReveal().reveal(".event-section", {
        duration: 1000,
        distance: "50px",
        origin: "bottom",
        easing: "ease-in-out",
        interval: 100,
      });
      ScrollReveal().reveal(".card-container > *", {
        duration: 1000,
        distance: "50px",
        origin: "bottom",
        easing: "ease-in-out",
        interval: 100,
      });
    },
  };
</script>

<style scoped>
  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 1rem;
  }

  .h2-container {
    text-align: center; /* Center the container */
    margin-top: 20px; /* Adjust if needed */
  }

  h2 {
    color: #fff; /* Change to your desired color */
    border-bottom: 2px solid #949494; /* Underline */
    padding-bottom: 5px; /* Space between text and underline */
    display: inline-block; /* Makes the underline only as wide as the text */
  }
</style>
