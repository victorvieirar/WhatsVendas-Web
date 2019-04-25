import { TheMask } from "vue-the-mask";
import { Money } from "v-money";

export default {
  name: "CreateOrder",
  components: {
    TheMask,
    Money
  },
  data() {
    return {
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        precision: 2,
        masked: false
      },
      order: {
        name: "",
        phone: "",
        value: null,
        address: ""
      }
    };
  },
  methods: {
    create() {
      this.$parent.createOrder(this.order);
    }
  }
};
