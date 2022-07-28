<template>
  <footer class="mt-auto">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-5 text-center" id="left_column">
          <img
            id="main_logo"
            src="@/assets/navbar_brand.svg"
            alt="aesthetique trend footer logo"
          />
          <div class="d-flex justify-content-center p-2">
            <img
              class="mx-2"
              id="telephone_logo"
              src="@/components/icons/telephone-inbound-fill.svg"
              alt="inbound calling icon"
              width="2.5%"
              height="2.5%"
            />
            <h6>087 852 375</h6>
          </div>
        </div>

        <div class="col-md-5 text-center" id="right_column"></div>
      </div>
    </div>

    <div class="container-fluid p-3" id="bottom_header">
      <h8>
        <center>© 2022 Phuykong Meng. All rights reserved.</center>
      </h8>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--light-main-color);
}

#left_column img#main_logo {
  padding: 0.5rem;
  width: 20%;
}

h6 {
    font-size: 100%;
}

#bottom_header {
  background-color: var(--dark-main-color);
}
</style>

<script setup lang="ts"></script>
