<template>
  <div>
    <!-- Scheduling Exams Section -->
    <section id="main" class="main-container">
      <MainScheExms />
    </section>
  </div>
</template>

<script>
import MainScheExms from "@/components/scheduling/MainScheExms.vue";

export default {
  components: {
    MainScheExms,
  },
};
</script>
