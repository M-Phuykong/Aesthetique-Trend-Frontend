<template>
  <div>
    <h1>{{ data._name }}</h1>
    <h2>{{ data._price }}</h2>
    <h4>{{ data._stock }} remaining</h4>
    <img v-for="(img, ind) in data._images" :src="img" :key="`${ind}`" />
  </div>

  {{ data }}
</template>

<style scoped>
img {
  max-height: 50vh;
  max-width: 50vh;
}
</style>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductDetail",
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.validate(this.id);
  },
  methods: {
    validate: function (id: any) {
      axios("http://localhost:5000/api/products/" + id)
        .then((response) => {
          if (response.status == 200) {
            this.data = response.data;
          }
        })
        .catch((err) => {
          this.$router.push("/error");
        });
    },
  },
});
</script>
