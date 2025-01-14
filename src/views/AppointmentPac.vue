<template>
  <div>
    <!-- Scheduling Appointment Section -->
    <section id="header" class="header-container">
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
