<!-- @format -->

<!-- src/components/PrivacyPolicy.vue -->
<template>
  <Navbar />

  <div class="legal-content">
    <div class="legal-container">
      <div class="text-container">
        <h2>Terms of Service</h2>
        <p>
          These Terms of Service govern your use of our website. By accessing or
          using Monkae, you agree to comply with these terms.
        </p>
        <h2>Acceptance of Terms</h2>
        <p>
          By using this website, you agree to these Terms of Service. If you do
          not agree with any part of these terms, you must not use our website.
        </p>
        <h2>Modifications</h2>
        <p>
          We may modify these terms at any time. Your continued use of the
          website following changes signifies your acceptance of the revised
          terms.
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
