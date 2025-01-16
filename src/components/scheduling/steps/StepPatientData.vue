<template>
  <div>
    <h4 class="mb-4">Dados do Paciente:</h4>
    <!-- CPF -->
    <div class="form-group mb-3">
      <input
        type="text"
        id="cpfPat"
        name="cpf"
        class="form-control"
        placeholder="CPF"
        v-model="cpf"
        v-mask="'###.###.###-##'"
      />
    </div>
    <!-- Nome Completo -->
    <div class="form-group mb-3">
      <input
        type="text"
        id="namePat"
        name="namePat"
        class="form-control"
        placeholder="Nome do Paciente"
        v-model="namePat"
      />
    </div>
    <!-- Email -->
    <div class="form-group mb-3">
      <input
        type="email"
        id="emailPat"
        name="email"
        class="form-control"
        placeholder="Email para contato"
        v-model="email"
        @blur="validateEmail(email)"
      />
      <small v-if="emailError" class="text-danger">{{ emailError }}</small>
    </div>
    <!-- Confirmação do Email -->
    <div class="form-group mb-3">
      <input
        type="email"
        id="emailConf"
        name="emailConf"
        class="form-control"
        placeholder="Confirmação do email"
        v-model="emailConf"
      />
    </div>
    <!-- Telefone / Celular -->
    <div class="form-group mb-3">
      <input
        type="text"
        id="phone"
        name="phone"
        class="form-control"
        placeholder="Telefone para contato"
        v-model="phone"
        v-mask="'(##) #####-####'"
      />
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
  name: "StepPatientData",
  data() {
    return {
      cpf: "",
      namePat: "",
      email: "",
      emailConf: "",
      phone: "",
      emailError: "",
    };
  },
  computed: {
    isFormValid() {
      const isEmailValid =
        this.email === this.emailConf && this.validateEmail(this.email);
      return this.cpf && this.namePat && this.phone && isEmailValid;
    },
  },
  methods: {
    validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        this.emailError = "Por favor, insira um email válido.";
        return false;
      }
      this.emailError = "";
      return true;
    },
    onProceed() {
      if (this.isFormValid) {
        alert("Formulário válido!");
        this.$emit("validate", true);
      } else {
        alert("Por favor, preencha todos os campos corretamente.");
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