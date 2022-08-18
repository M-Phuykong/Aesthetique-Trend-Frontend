<template>
  <header>
    <!-- "navbar navbar-expand-sm navbar-dark pt-0 pb-0 ps-sm-4 pe-sm-4" -->
    <navbar
      class="navbar navbar-expand-sm navbar-dark pt-0 pb-0"
    >
      <div class="container-fluid">
        <a href="/" class="navbar-brand">
          <img
            src="@/assets/navbar_brand.svg"
            alt="Aesthetique Trend Navigation Bar Logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsLink"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse text-center" id="navbarsLink">
          <div class="navbar-nav ms-auto">
            <h5 class="nav-link active">
              <RouterLink to="/">Shop</RouterLink>
            </h5>
            <h5 class="nav-link">
              <RouterLink to="/about">Contact</RouterLink>
            </h5>
          </div>
        </div>
      </div>
    </navbar>
  </header>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Signika&display=swap");

navbar {
  background-color: var(--light-main-color);
  padding-left: 20vh;
  padding-right: 20vh;
}
.navbar-brand img {
  padding: 0.5rem;
  width: 75%;
}

.nav-link a {
  color: white;
  text-decoration: none;
  font-family: "Signika", sans-serif;
}

/* Small Screen - Portrait Mode */
@media only screen and (max-device-width: 478px) and (orientation: portrait) {

  navbar {
      padding-left: 0;
      padding-right: 0;
  }
  navbar .container-fluid a {
    width: 70%;
  }
}
</style>

<script setup lang="ts"></script>
