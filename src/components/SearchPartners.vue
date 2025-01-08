<template>
  <div class="container my-5">
    <div class="text-center">
      <h2>Encontre uma unidade Santé</h2>
      <h4>Onde será mais perto para você?</h4>
    </div>
    <div class="row justify-content-center mt-4">
      <div class="col-md-6">
        <div class="input-group">
          <input 
            type="text" 
            class="form-control" 
            placeholder="Digite o nome da cidade ou unidade" 
            aria-label="Pesquisar unidade" 
          />
          <button class="btn btn-primary" type="button">
            Buscar
          </button>
        </div>
        <div class="text-center mt-3">
          <button class="btn btn-outline-secondary btn-sm" type="button">
            Usar minha localização
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPartners",
};
</script>

<style scoped>
h2 {
  font-weight: bold;
}

h4 {
  font-weight: 400;
  color: #555;
}
</style>
