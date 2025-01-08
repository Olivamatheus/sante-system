<template>
  <div>
    <!-- Header Section -->
    <section id="header" class="header-container">
      <HeaderPart />
    </section>
    <SearchPartners />
    <HomeCards />
  </div>
</template>

<script>
import HeaderPart from "@/components/parts/HeaderPart.vue";
import SearchPartners from "@/components/SearchPartners.vue";
import HomeCards from "@/components/HomeCards.vue";

export default {
  components: {
    HeaderPart,
    SearchPartners,
    HomeCards,
  },
};
</script>

<style>

body {
  overflow-x: hidden;
}

</style>