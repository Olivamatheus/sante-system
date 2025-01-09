<template>
  <div>
    <!-- Header Section -->
    <section id="header" class="header-container">
      <HeaderPart />
    </section>

    <section id="mainI" class="mainI-container">
      <MainIPart />
    </section>
  </div>
</template>

<script>
import HeaderPart from "@/components/parts/HeaderPart.vue";
import MainIPart from "@/components/parts/MainIPart.vue";

export default {
  components: {
    HeaderPart,
    MainIPart,
  },
};
</script>
