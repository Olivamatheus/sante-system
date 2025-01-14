<template>
  <div>
    <h4 class="mb-4">Forma de Pagamento</h4>

    <!-- Forma de Pagamento -->
    <div class="form-group mb-4">
      <label for="payment" class="form-label">
        Selecione a forma de pagamento:
      </label>
      <select id="payment" class="form-select">
        <option value="" disabled selected>FORMA DE PAGAMENTO</option>
        <option value="1">CONVÊNIO</option>
        <option value="2">PARTICULAR</option>
      </select>
    </div>

    <!-- Convênio -->
    <div class="form-group mb-3">
      <label for="health-plan" class="form-label"> Nome do Convênio </label>
      <input
        type="text"
        id="health-plan"
        name="plan-pat"
        class="form-control"
        placeholder="Nome do Convênio"
      />
    </div>

    <!-- Plano -->
    <div class="form-group mb-3">
      <label for="type-plan" class="form-label"> Nome do Plano </label>
      <input
        type="text"
        id="type-plan"
        name="plan-pat"
        class="form-control"
        placeholder="Nome do Plano"
      />
    </div>

    <!-- Botão de Prosseguir -->
    <button class="btn btn-primary btn-sm" type="button" @click="onProceed">
      Prosseguir
    </button>
  </div>
</template>

<script>
export default {
  name: "StepPayment",
  methods: {
    onProceed() {
      // Função para lidar com o clique no botão Prosseguir
      console.log("Prosseguir clicado!");
    },
  },
};
</script>
