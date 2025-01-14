<template>
  <div>
    <h4 class="mb-4">Dados do Paciente</h4>

    <!-- Data de Nascimento -->
    <div class="form-group mb-3">
      <label for="date-age" class="form-label">
        Informe a data de nascimento
      </label>
      <input
        type="date"
        id="date-age"
        name="agepatient"
        class="form-control"
      />
    </div>

    <!-- Sexo Biológico -->
    <div class="form-group mb-4">
      <label for="gender-pat" class="form-label">
        Selecione o sexo biológico do paciente
      </label>
      <select id="gender-pat" class="form-select">
        <option value="" disabled selected>SEXO BIOLÓGICO</option>
        <option value="1">MASCULINO</option>
        <option value="2">FEMININO</option>
      </select>
    </div>

    <!-- Botão de Prosseguir -->
    <button
      class="btn btn-primary btn-sm"
      type="button"
      @click="onProceed"
    >
      Prosseguir
    </button>
  </div>
</template>

<script>
export default {
  name: "StepPatient",
  methods: {
    onProceed() {
      // Função para lidar com o clique no botão Prosseguir
      console.log("Prosseguir clicado!");
    },
  },
};
</script>
