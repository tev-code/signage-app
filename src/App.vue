<!-- @format -->

<!-- src/App.vue -->
<template>
  <div>
    <!-- The router-view component will display the matched component for the current route -->
    <router-view :key="$route.fullPath" />
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2025 Monkae. All rights reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a>
          |
          <a href="/terms-of-service">Terms of Service</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
  import "./assets/reset.css";
  // Import the Footer component

  // Import components here if needed, but generally, this file does not need explicit imports for routed components
</script>

<style scoped>
  /* Add any global styles or reset styles here if needed */
  .footer {
    background-color: #0e0e0e;
    color: #fff;
    text-align: center;
    padding: 1rem;
    position: relative;
    bottom: 0;
    width: 100%;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer a {
    color: #fff;
    text-decoration: none;
    margin: 0 0.5rem;
  }

  .footer a:hover {
    color: rgb(100, 100, 100);
  }
</style>
