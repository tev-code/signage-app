<!-- @format -->

<template>
  <div class="event-carousel animate__animated animate__fadeInLeft">
    <div
      v-for="(event, index) in eventPairs"
      :key="index"
      class="carousel-card"
    >
      <div class="event-card" v-for="item in event" :key="item.media">
        <div class="media-container" @click="openModal(item)">
          <template v-if="item.type === 'video'">
            <video
              :src="item.media"
              class="event-video"
              muted
              autoplay
              loop
              playsinline
            ></video>
          </template>
          <template v-else>
            <img :src="item.media" alt="Event Image" class="event-image" />
          </template>
          <div class="tap-overlay">Tap to View</div>
        </div>
      </div>
    </div>

    <div v-if="isModalOpen" class="modal" @click="closeModal">
      <button class="close-button" @click="closeModal">✖</button>
      <template v-if="modalMedia.type === 'video'">
        <video
          :src="modalMedia.media"
          class="modal-video"
          muted
          autoplay
          loop
          playsinline
        ></video>
      </template>
      <template v-else>
        <img :src="modalMedia.media" alt="Zoomed Image" class="modal-image" />
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: "EventCarousel",
    props: {
      events: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        isModalOpen: false,
        modalMedia: {},
      };
    },
    computed: {
      eventPairs() {
        // Split events into pairs of two
        let pairs = [];
        for (let i = 0; i < this.events.length; i += 2) {
          pairs.push(this.events.slice(i, i + 2));
        }
        return pairs;
      },
    },
    methods: {
      openModal(item) {
        this.modalMedia = item;
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
        this.modalMedia = {};
        this.$nextTick(() => {
          const video = this.$refs.modalVideo;
          if (video) {
            video.pause();
          }
        });
      },
      handlePause() {
        console.log("Video paused");
      },
    },
  };
</script>
<style scoped>
  .event-carousel {
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

  .event-card {
    margin-bottom: 10px;
    text-align: center;
  }

  .event-image,
  .event-video {
    width: 100%;
    min-height: 600px;
    object-fit: cover;
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

  .modal-video {
    max-width: 100%;
    max-height: 100%;
    border-radius: 8px;
  }

  .modal-image {
    max-width: 100%;
    max-height: 100%;
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
    z-index: 1001; /* Ensure the button is above the modal */
  }

  .close-button:hover {
    opacity: 0.7; /* Optional hover effect */
  }

  .media-container {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    height: 600px;
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
    visibility: hidden; /* Hide initially */
  }

  .media-container:hover .tap-overlay,
  .media-container:focus-within .tap-overlay {
    visibility: visible; /* Show on hover or focus */
  }
</style>
