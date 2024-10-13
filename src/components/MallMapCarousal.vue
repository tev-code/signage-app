<!-- @format -->

<template>
  <div class="mall-map-carousal animate__animated animate__fadeInLeft">
    <div v-for="(map, index) in maps" :key="index" class="carousel-card">
      <div class="map-card" v-for="floor in map" :key="floor.name">
        <div class="image-container" @click="openModal(floor.image)">
          <img
            :src="floor.image"
            alt="Mall Floor Map"
            class="map-image"
            @click="openModal(floor.image)"
          />
          <div class="tap-overlay">Tap to View</div>
        </div>
      </div>
    </div>

    <div v-if="isModalOpen" class="modal" @click="closeModal">
      <button class="close-button" @click="closeModal">✖</button>
      <img :src="modalImage" alt="Zoomed Image" class="modal-image" />
    </div>
  </div>
</template>

<script>
  import mallMapGroundFloor from "../assets/mallMap1.png";
  import mallMapTopFloor from "../assets/mallMap2.png";

  export default {
    name: "MallMapCarousal",
    data() {
      return {
        isModalOpen: false,
        modalImage: "",
        maps: [
          [
            { name: "Ground Floor", image: mallMapGroundFloor },
            { name: "Top Floor", image: mallMapTopFloor },
          ],
        ],
      };
    },
    methods: {
      openModal(image) {
        this.modalImage = image;
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
        this.modalImage = "";
      },
    },
  };
</script>

<style scoped>
  .mall-map-carousal {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    padding: 3rem;
    overflow-x: auto;
  }

  .carousel-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 300px;
    border-radius: 8px;
    padding: 10px;
    background-color: #1d1d1d;
    color: #ccc;
    cursor: pointer;
  }

  .map-card {
    margin-bottom: 10px;
    text-align: center;
  }

  .map-image {
    width: 100%;
    max-width: 800px; /* Set a max width for carousel images */
    max-height: 600px; /* Set a max height to limit image size */
    object-fit: cover; /* Ensures the image maintains aspect ratio */
    border-radius: 8px;
    padding-top: 10px;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-image {
    max-width: 90%;
    max-height: 90%;
    border-radius: 8px;
  }

  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    z-index: 1001;
  }

  .close-button:hover {
    opacity: 0.7;
  }

  .image-container {
    position: relative;
    cursor: pointer;
  }

  .tap-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    visibility: hidden;
  }

  .image-container:hover .tap-overlay,
  .image-container:focus-within .tap-overlay {
    visibility: visible;
  }
</style>
