<!-- @format -->

<!-- src/components/PrivacyPolicy.vue -->
<template>
  <Navbar />

  <div class="legal-content">
    <div class="legal-container">
      <div class="text-container">
        <h2>Privacy Policy</h2>
        <p>
          Welcome to Monkae. We are committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you visit our website.
        </p>
        <h2>Information Collection</h2>
        <p>
          We do not collect personal information directly. However, we may
          collect non-personal data through cookies and analytics services.
        </p>
        <h2>Use of Information</h2>
        <p>
          The information we collect is used to improve user experience and
          analyze website traffic.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Navbar from "../components/NavbarComp.vue";
</script>

<style scoped>
  /* Add styles for your privacy policy page */
  .legal-content {
    padding: 1rem;
  }
  .legal-content h1,
  .legal-content h2 {
    color: #fff;
  }

  .legal-content p {
    line-height: 1.6;
    color: #fff;
  }
  .legal-container {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    );
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 50px;
  }

  .text-container {
    background-color: rgba(
      0,
      0,
      0,
      0.8
    ); /* Use rgba for better control over transparency */
    padding: 1.5rem 2rem;
    border-radius: 10px;
  }
</style>
