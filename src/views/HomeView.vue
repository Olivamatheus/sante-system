<template>
  <div>
    <!-- Header Section -->
    <section id="header" class="header-container">
      <HeaderPart />
    </section>
    <!-- Main I -->
    <section id="mainI" class="mainI-container">
      <MainIPart />
    </section>
    <!-- Main II -->
    <section id="mainII" class="mainII-container">
      <MainIIPart />
    </section>
  </div>
</template>

<script>
import HeaderPart from "@/components/home/HeaderPart.vue";
import MainIPart from "@/components/home/MainIPart.vue";
import MainIIPart from "@/components/home/MainIIPart.vue";

export default {
  components: {
    HeaderPart,
    MainIPart,
    MainIIPart,
  },
};
</script>
