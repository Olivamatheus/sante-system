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
        name="agePatient"
        class="form-control"
        v-model="agePatient"
      />
    </div>

    <!-- Sexo Biológico -->
    <div class="form-group mb-4">
      <label for="genderPat" class="form-label">
        Selecione o sexo biológico do paciente
      </label>
      <select id="genderPat" class="form-select" v-model="genderPat">
        <option value="" disabled selected>SEXO BIOLÓGICO</option>
        <option value="1">MASCULINO</option>
        <option value="2">FEMININO</option>
      </select>
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
  name: "StepPatient",
  data() {
    return {
      agePatient: "",
      genderPat: "",
    };
  },
  computed: {
    isFormValid() {
      return this.agePatient && this.genderPat;
    },
  },
  methods: {
    onProceed() {
      if (this.isFormValid) {
        this.$emit("validate", true);
      } else {
        this.$emit("validate", false);
      }
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