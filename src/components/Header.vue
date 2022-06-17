<template>
  <header>
    <navbar class="navbar navbar-expand-sm navbar-dark pt-0 pb-0 ps-4">
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
            <a class="nav-link active">
              <RouterLink to="/">Shop</RouterLink>
            </a>
            <a class="nav-link">
              <RouterLink to="/about">Contact</RouterLink>
            </a>
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
}

.navbar-brand img {
  padding: 0.5rem;
  width: 60%;
}

.nav-link a {
  color: white;
  text-decoration: none;
  font-family: "Signika", sans-serif;
}
</style>

<script setup lang="ts"></script>
