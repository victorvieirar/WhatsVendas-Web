<template lang="pug">
  #app(ref="app")
    img.logo(src="./assets/logo.white.png")
    CreateOrder    
</template>

<script>
import { CreateOrder } from "./components/";
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
    CreateOrder
  },
  methods: {
    createOrder(order) {
      apiService
        .createOrder(order.name, order.phone, order.address, order.price)
        .then(data => {
          this.order = data.data;
          this.order.price = `R$ ${this.order.price}`;
          alert("Pedido cadastrado!");
          this.generatePDF();
        });
    },
    generatePDF() {
      let doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [80, 80]
      });
      doc.setFontSize(4);
      doc.text(this.order.name, 4, 7);
      doc.text(this.order.phone, 4, 10);
      doc.text(this.order.address, 4, 13);
      doc.text(this.order.price, 4, 16);

      doc.save(`${this.order.name}_Compra.pdf`);
    }
  }
};
</script>

<style src="./app.sass" lang="sass"></style>
