<template>
  <div>
    <h4>Especialidade / Médico</h4>
    <div class="form-group mb-3">
      <label>Selecione o tipo de atendimento:</label>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          id="presencial"
          name="consultType"
          value="Presencial"
          v-model="consultType"
        />
        <label class="form-check-label" for="presencial">Presencial</label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          id="teleconsulta"
          name="consultType"
          value="Teleconsulta"
          v-model="consultType"
        />
        <label class="form-check-label" for="teleconsulta">Teleconsulta</label>
      </div>
    </div>
    <div class="form-group">
      <label for="searchSpecialty"
        >Digite o nome do médico ou especialidade:</label
      >
      <input
        type="text"
        id="searchSpecialty"
        class="form-control"
        placeholder="Ex.: Cardiologista ou Dr. Cláudio Frota"
        v-model="specialty"
      />
      <ul class="list-group mt-2" v-if="suggestions.length">
        <li
          class="list-group-item"
          v-for="suggestion in suggestions"
          :key="suggestion"
          @click="selectSuggestion(suggestion)"
        >
          {{ suggestion }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "StepSpecialty",
  data() {
    return {
      consultType: "",
      specialty: "",
      suggestions: ["Cardiologista", "Pediatra", "Neurologista"],
    };
  },
  watch: {
    consultType() {
      this.validate();
    },
    specialty() {
      this.validate();
    },
  },
  methods: {
    validate() {
      const isValid = this.consultType && this.specialty;
      this.$emit("validate", isValid);
    },
    selectSuggestion(suggestion) {
      this.specialty = suggestion;
    }
  }
};
</script>