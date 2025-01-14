<template>
  <div>
    <h4>Local</h4>
    <div class="form-group">
      <label for="searchLocation">Digite o local mais próximo:</label>
      <input
        type="text"
        class="form-control"
        id="searchLocation"
        placeholder="Ex.: Estado ou Unidade"
        v-model="location"
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
  name: "StepLocation",
  data() {
    return {
      location: "",
      suggestions: ["Bahia", "Ceará", "Paraíba"],
    };
  },
  watch: {
    location() {
      this.validate();
    },
  },
  methods: {
    validate() {
      const isValid = this.location;
      this.$emit("validate", isValid);
    },
    selectSuggestion(suggestion) {
      this.location = suggestion;
    }
  }
};
</script>