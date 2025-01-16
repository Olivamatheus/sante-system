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
        @focus="showSuggestions = true"
        @blur="hideSuggestions"
      />
      <ul class="list-group mt-2" v-if="showSuggestions">
        <li
          class="list-group-item"
          v-for="suggestion in filteredSuggestions"
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
      showSuggestions: false,
    };
  },
  computed: {
    filteredSuggestions() {
      if (!this.location) return this.suggestions;
      return this.suggestions.filter((s) =>
        s.toLowerCase().includes(this.location.toLowerCase())
      );
    },
  },
  watch: {
    location() {
      this.validate();
    },
  },
  methods: {
    validate() {
      if (this.location) {
        this.$emit("validate", true);
      }
    },
    selectSuggestion(suggestion) {
      this.location = suggestion;
      this.showSuggestions = false;
      this.validate();
    },
    hideSuggestions() {
      setTimeout(() => (this.showSuggestions = false), 200);
    },
  },
};
</script>