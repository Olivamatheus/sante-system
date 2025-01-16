<template>
  <div class="div-sche">
    <div class="stepbar-container">
      <!-- Stepbar -->
      <div class="stepbar d-flex align-items-center justify-content-between">
        <!-- Left Arrow -->
        <button
          class="step-btn arrow-btn"
          @click="previousStep"
          :disabled="currentStep === 1"
        >
          <i class="bi bi-arrow-left"></i>
        </button>
        <!-- Steps -->
        <div v-for="(step, index) in steps" :key="index" class="step">
          <div
            class="step-circle"
            :class="{ active: currentStep === index + 1 }"
            @click="goToStep(index + 1)"
          >
            {{ index + 1 }}
          </div>
          <div class="step-label">{{ step.label }}</div>
        </div>
        <!-- Right Arrow -->
        <button
          class="step-btn arrow-btn"
          @click="nextStep"
          :disabled="currentStep === steps.length"
        >
          <i class="bi bi-arrow-right"></i>
        </button>
      </div>

      <!-- Dynamic Content -->
      <div class="step-content mt-4">
        <component :is="currentStepComponent" @validate="validateStep" />
      </div>
    </div>
  </div>
</template>
<script>
import StepSelectExms from "./steps/StepSelectExms.vue";
import StepLocation from "./steps/StepLocation.vue";
import StepPatient from "./steps/StepPatient.vue";
import StepPayment from "./steps/StepPayment.vue";
import StepPatientData from "./steps/StepPatientData.vue";
export default {
  name: "MainScheExms",
  data() {
    return {
      currentStep: 1,
      steps: [
        { label: "Exame / Procedimento", component: StepSelectExms },
        { label: "Local", component: StepLocation },
        { label: "Paciente", component: StepPatient },
        { label: "Pagamento", component: StepPayment },
        { label: "Agende sua consulta", component: StepPatientData },
      ],
      stepValidation: [false, false, false, false, false],
    };
  },
  computed: {
    currentStepComponent() {
      const step = this.steps[this.currentStep - 1];
      return step?.component || null;
    },
  },
  methods: {
    nextStep() {
      if (this.stepValidation[this.currentStep - 1]) {
        this.currentStep++;
      } else {
        alert("Por favor, preencha os campos obrigatórios.");
      }
    },
    previousStep() {
      if (this.currentStep > 1) {
        this.currtentStep--;
      }
    },
    goToStep(step) {
      if (this.stepValidation.slice(0, step - 1).every(Boolean)) {
        this.currentStep = step;
      } else {
        alert("Complete as etapas anteriores.");
      }
    },
    validateStep(isValid) {
      this.stepValidation[this.currentStep - 1] = isValid;
      if (isValid) {
        this.nextStep();
      }
    },
  },
};
</script>
<style scoped>
.div-sche {
  width: 100vw;
  height: 85vh;
  padding: 1rem;
}

.stepbar-container {
  max-width: 900px;
  margin: 70px auto;
}

.stepbar {
  display: flex;
  gap: 1rem;
  margin: 20px 0;
  position: relative;
}

.step-btn {
  background-color: transparent;
  border: none;
  color: var(--cor2);
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.arrow-btn:disabled {
  color: var(--cor4);
  cursor: not-allowed;
}

.step {
  text-align: center;
  flex: 1;
}

.step-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--cor0);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.step-circle.active {
  background-color: var(--cor2);
  color: white;
}

.step-label {
  height: 45px;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--cor4);
}
</style>