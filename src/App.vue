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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap");

:root {
  --cor0: #eaffc9;
  --cor1: #cdff83;
  --cor2: #2eff56;
  --cor3: #adff2f;
  --cor4: #243509;
  --cor5: #00ffe5;
  --cor6: #40e0d0;
  --cor7: #afdbd8;
  --cor8: #00665c;
  --cor9: #0e322e;
}

body {
  overflow-x: hidden;
}

* {
  font-family: "Montserrat", serif;
  -webkit-tap-highlight-color: transparent;
  tap-highlight-color: transparent;
}
</style>
