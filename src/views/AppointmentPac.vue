<template>
  <div>
    <!-- Scheduling Appointment Section -->
    <section id="main" class="main-container">
      <MainScheAppo />
    </section>
  </div>
</template>

<script>
import MainScheAppo from "@/components/scheduling/MainScheAppo.vue";

export default {
  components: {
    MainScheAppo,
  },
};
</script>
