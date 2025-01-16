<template>
  <div class="container mt-4">
    <div class="input-content">
      <h3>Selecione os Exames</h3>
      <!-- Campo de busca de exames -->
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="examSearch"
          v-model="searchQuery"
          @input="filterExams"
          placeholder="Digite o nome do exame"
          @focus="showSuggestions = true"
          @blur="hideSuggestions"
        />
      </div>
      <!-- Lista de sugestões de exames -->
      <ul class="list-group mb-3" v-if="showSuggestions">
        <li
          v-for="exam in filteredExams"
          :key="exam.id"
          class="list-group-item d-flex justify-content-between align-items-center"
          @click="toggleExamSelection(exam)"
          :class="{ 'bg-success text-white': selectedExams.includes(exam) }"
          style="cursor: pointer"
        >
          {{ exam.name }}
          <span
            v-if="selectedExams.includes(exam)"
            class="badge bg-light text-dark"
            >Selecionado</span
          >
        </li>
      </ul>
    </div>

    <div class="select-exams">
      <!-- Exames selecionados -->
      <div v-if="selectedExams.length > 0">
        <h5>Exames Selecionados</h5>
        <ul class="list-group mb-3">
          <li
            v-for="exam in selectedExams"
            :key="exam.id"
            class="list-group-item"
          >
            {{ exam.name }}
          </li>
        </ul>
      </div>
      <!-- Botão para continuar -->
      <button
        class="btn"
        @click="continueScheduling"
        :disabled="selectedExams.length === 0"
      >
        Continuar Agendamento
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepSelectExms",
  data() {
    return {
      searchQuery: "",
      exams: [
        { id: 1, name: "Exame de Sangue" },
        { id: 2, name: "Ultrassonografia" },
        { id: 3, name: "Ressonância Magnética" },
        { id: 4, name: "Eletrocardiograma" },
      ],
      filteredExams: [],
      selectedExams: [],
      showSuggestions: false,
    };
  },
  methods: {
    // Filtra os exames conforme a pesquisa
    filterExams() {
      const query = this.searchQuery.toLowerCase();
      this.filteredExams = this.exams.filter((exam) =>
        exam.name.toLowerCase().includes(query)
      );
    },
    // Alterna a seleção de um exame
    toggleExamSelection(exam) {
      const index = this.selectedExams.indexOf(exam);
      if (index > -1) {
        this.selectedExams.splice(index, 1); // Remove o exame
      } else {
        this.selectedExams.push(exam); // Adiciona o exame
      }
    },
    // Função para continuar com o agendamento (pode redirecionar ou processar dados)
    continueScheduling() {
      if (this.selectedExams) {
        this.$emit("validate", true);
      } else {
        this.$emit("validate", false);
      }
    },
  },
  mounted() {
    this.filteredExams = this.exams; // Inicializa com todos os exames
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-evenly;
  align-items: center;
}

.input-content,
.select-exams {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.list-group-item {
  cursor: pointer;
}

.bg-success {
  background-color: #28a745 !important;
}

.text-white {
  color: white !important;
}

.badge {
  font-size: 0.75rem;
}

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

button:disabled {
  cursor: not-allowed;
}
</style>
