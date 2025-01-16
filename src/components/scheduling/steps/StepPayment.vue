<template>
  <div>
    <h4 class="mb-4">Forma de Pagamento</h4>

    <!-- Forma de Pagamento -->
    <div class="form-group mb-4">
      <label for="payment" class="form-label">
        Selecione a forma de pagamento:
      </label>
      <select id="payment" class="form-select" name="payment" v-model="payment">
        <option value="" disabled selected>FORMA DE PAGAMENTO</option>
        <option value="1">CONVÊNIO</option>
        <option value="2">PARTICULAR</option>
      </select>
    </div>

    <!-- Convênio -->
    <div v-if="payment === '1'">
      <div class="form-group mb-3">
        <label for="health-plan" class="form-label"> Nome do Convênio </label>
        <input
          type="text"
          id="health-plan"
          name="plan-pat"
          class="form-control"
          placeholder="Nome do Convênio"
          v-model="healthPlan"
        />
      </div>
    </div>

    <!-- Plano -->
    <div v-if="payment === '1'">
      <div class="form-group mb-3">
        <label for="type-plan" class="form-label"> Nome do Plano </label>
        <input
          type="text"
          id="type-plan"
          name="plan-pat"
          class="form-control"
          placeholder="Nome do Plano"
          v-model="typePlan"
        />
      </div>
    </div>

    <!-- Botão de Prosseguir -->
    <button
      class="btn"
      type="button"
      @click="onProceed"
      :disabled="!isFormValid"
    >
      Prosseguir
    </button>
  </div>
</template>

<script>
export default {
  name: "StepPayment",
  data() {
    return {
      payment: "",
      healthPlan: "",
      typePlan: "",
    };
  },
  computed: {
    isFormValid() {
      if (this.payment === "1") {
        return this.healthPlan && this.typePlan;
      }
      if (this.payment === "2") {
        return this.payment;
      }
      return false;
    },
  },
  methods: {
    onProceed() {
      if (this.payment === "1") {
        console.log("Convênio:", this.healthPlan, "Plano:", this.typePlan);
      }
      this.$emit("validate", true);
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  border: 1px solid var(--cor9);
  border-radius: 20px;
  background-color: var(--cor9);
  color: var(--cor5);
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

button:hover {
  background-color: var(--cor5);
  color: var(--cor9);
  border: 1px solid var(--cor5);
  box-shadow: 1px 1px 10px var(--cor5);
}
</style>