<!-- @format -->

<template>
  <nav class="navbar animate__animated animate__backInDown">
    <div class="navbar-content animate__animated animate__backInDown">
      <div class="logo">
        <a href="/">
          <img src="../assets/logo.png" alt="MyApp Logo" class="logo-img" />
        </a>
      </div>

      <button
        class="toggle-btn"
        @click="toggleMenu"
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      <ul :class="{ active: isMenuOpen }" class="nav-links" role="navigation">
        <li>
          <router-link to="/" exact-active-class="active-link">
            Home
          </router-link>
        </li>
        <li>
          <router-link
            to="/category/Activities"
            exact-active-class="active-link"
          >
            Activities
          </router-link>
        </li>
        <li>
          <router-link to="/category/Care" exact-active-class="active-link">
            Care
          </router-link>
        </li>
        <li>
          <router-link to="/category/Dining" exact-active-class="active-link">
            Dining
          </router-link>
        </li>

        <li>
          <router-link
            to="/category/Electronics"
            exact-active-class="active-link"
          >
            Electronics
          </router-link>
        </li>
        <li>
          <router-link
            to="/category/Entertainment"
            exact-active-class="active-link"
          >
            Entertainment
          </router-link>
        </li>
        <li>
          <router-link to="/category/Fashion" exact-active-class="active-link">
            Fashion
          </router-link>
        </li>
        <li>
          <router-link to="/category/Finance" exact-active-class="active-link">
            Finance
          </router-link>
        </li>
        <li>
          <router-link
            to="/category/Interiors"
            exact-active-class="active-link"
          >
            Interiors
          </router-link>
        </li>
        <li>
          <router-link
            to="/category/Jewellery"
            exact-active-class="active-link"
          >
            Jewellery
          </router-link>
        </li>
        <li>
          <router-link to="/category/Liquor" exact-active-class="active-link">
            Liquor
          </router-link>
        </li>
        <li>
          <router-link to="/category/Optics" exact-active-class="active-link">
            Optics
          </router-link>
        </li>
        <li>
          <router-link to="/category/Pharmacy" exact-active-class="active-link">
            Pharmacy
          </router-link>
        </li>
        <li>
          <router-link to="/category/Pets" exact-active-class="active-link">
            Pets
          </router-link>
        </li>
        <li>
          <router-link to="/category/Service" exact-active-class="active-link">
            Services
          </router-link>
        </li>
        <li>
          <router-link
            to="/category/Specialities"
            exact-active-class="active-link"
          >
            Specialities
          </router-link>
        </li>
        <li>
          <router-link to="/category/Supplies" exact-active-class="active-link">
            Supplies
          </router-link>
        </li>
        <li>
          <router-link
            to="/category/Supermarkets"
            exact-active-class="active-link"
          >
            Supermarkets
          </router-link>
        </li>

        <li>
          <router-link to="/category/Toys" exact-active-class="active-link">
            Toys
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
  import { ref } from "vue";

  const isMenuOpen = ref(false);

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
  }
</script>

<style scoped>
  /* Import Poppins font from Google Fonts */
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

  /* Navbar Container */
  /* Navbar Container */
  .navbar {
    background: #000000; /* Metal black background */
    color: white;
    padding: 0.5rem 1rem;
    font-family: "Poppins", sans-serif;
    position: relative;
    z-index: 10;
  }

  .navbar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  /* Logo Image */
  .logo-img {
    height: 80px;
    /* Adjust height based on your preference */
    width: auto;
  }

  /* Toggle Button for Desktop & Mobile */
  .toggle-btn {
    display: block; /* Always visible */
    font-size: 2.5rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }

  /* Nav Links */
  .nav-links {
    flex-direction: column; /* Stack links vertically */
    position: absolute;
    text-align: center;
    top: 100%;
    left: 0;
    right: 0;
    background: linear-gradient(
        rgba(0, 0, 0, 0.8),
        /* Gradient Color (Black with 80% opacity) */ rgba(0, 0, 0, 0.8)
      ),
      url("../assets/background.jpg"); /* Background Image */
    background-size: cover; /* Cover the whole dropdown area */
    background-position: center;
    padding: 1rem;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.3s ease;
  }

  /* Show Menu when Active */
  .nav-links.active {
    visibility: visible;
    opacity: 1;
  }

  /* Style for Nav Links */
  .nav-links a {
    color: white;
    text-decoration: none;
    padding: 1rem;
    border-bottom: 1px solid #555;
    text-align: center;
    font-weight: 600;
  }

  li {
    list-style: none;
  }

  /* Style for Nav Links */
  .nav-links li {
    margin: 2rem 0; /* Add vertical space between each list item */
  }

  /* Remove Bottom Border from Last Link */
  .nav-links a:last-child {
    border-bottom: none;
  }

  /* Hover Effect for Links */
  .nav-links a:hover {
    background-color: #555;
  }

  /* Style for Active Link */
  .active-link {
    background-color: #555;
  }
</style>
