<template lang="pug">
  #app(ref="app")
    img.logo(src="./assets/logo.white.png")
    CreateOrder    
</template>

<script>
import { CreateOrder } from "./components/";
import { APIService } from "./services/APIService";

const apiService = new APIService();

export default {
  name: "App",
  data() {
    return {
      order: {}
    };
  },
  components: {
    CreateOrder
  },
  methods: {
    createOrder(order) {
      apiService
        .createOrder(order.name, order.phone, order.address, order.price)
        .then(data => {
          this.order = data.data;
          alert("Pedido cadastrado!");
        });
    }
  }
};
</script>

<style src="./app.sass" lang="sass"></style>
