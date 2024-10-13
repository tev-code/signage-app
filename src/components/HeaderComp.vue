<!-- @format -->

<template>
  <header class="header animate__animated animate__bounceInDown">
    <div class="header-content">
      <div class="text-container animate__animated animate__fadeInLeft">
        <h1>MONKAE</h1>
        <h2>Interactive Mall Directories</h2>
        <p>Connecting People with Places – Your Guide to What's Next.</p>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
  };
</script>

<style scoped>
  /* Consider moving this to a global stylesheet if used in multiple components */

  .header {
    background: url("../assets/background.jpg") no-repeat center center;
    background-size: cover;
    position: relative;
    height: 700px;
    font-family: "Poppins", sans-serif;
  }

  .header-content {
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

  /* Text Styling */
  h1 {
    color: white;
    font-size: 2.5rem;

    margin: 0; /* Ensure no default margins */
  }

  p {
    margin: 0; /* Ensure no default margins */
    font-size: 1.1rem; /* Slightly increase font size for better readability */
  }

  /* Responsive Font Size for Smaller Screens */
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    .text-container {
      width: 90%; /* Use percentage width for better responsiveness */
    }
  }
</style>
