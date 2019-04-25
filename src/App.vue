<template lang="pug">
  #app(ref="app")
    img.logo(src="./assets/logo.white.png")
    CreateOrder    
    OrderView(ref="view")
</template>

<script>
import { CreateOrder, OrderView } from "./components/";
import { APIService } from "./services/APIService";

import jsPDF from "jspdf";

const apiService = new APIService();

export default {
  name: "App",
  data() {
    return {
      order: {}
    };
  },
  components: {
    CreateOrder,
    OrderView
  },
  methods: {
    createOrder(order) {
      apiService
        .createOrder(order.name, order.phone, order.address, order.price)
        .then(data => {
          this.order = data.data;
          this.$refs.view.order = this.order;
          alert("Pedido cadastrado!");
          this.generateFromHTML();
        });
    },
    generateFromHTML() {
      const el = this.$refs.view;
      let doc = new jsPDF();
      doc.fromHTML(
        el, // HTML string or DOM elem ref.
        10, // x coord
        10
      );
      doc.save(`${this.order.name}_compra.pdf`);
    }
  }
};
</script>

<style src="./app.sass" lang="sass"></style>
