<template>
  <div id="app">
    <AppNavbar />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
    AppFooter,
  },
};
</script>

<style>

:root {
  --cor0: #EAFFC9;
  --cor1: #CDFF83;
  --cor2: #2EFF56;
  --cor3: #ADFF2F;
  --cor4: #243509;
  --cor5: #40E0D0;
  --cor6: #afdbd8;
  --cor7: #0E322E;


}

body {
  overflow-x: hidden;
}

</style>
