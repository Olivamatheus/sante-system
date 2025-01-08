<template>
  <div class="container my-5">
    <div class="row">
      <!-- Card de Resultados de Exames -->
      <div class="col-md-6">
        <div class="card h-100 shadow-sm">
          <div class="card-body d-flex flex-column align-items-center text-center">
            <h5 class="card-title">Resultados de Exames</h5>
            <p class="card-text">
              Consulte seus resultados de exames online de forma rápida e segura. 
            </p>
            <a href="#" class="btn btn-primary mt-auto">
              Consultar Resultados
            </a>
          </div>
        </div>
      </div>

      <!-- Card de Planos de Saúde -->
      <div class="col-md-6">
        <div class="card h-100 shadow-sm">
          <div class="card-body d-flex flex-column align-items-center text-center">
            <h5 class="card-title">Planos de Saúde</h5>
            <p class="card-text">
              Verifique a cobertura do seu plano de saúde e obtenha informações detalhadas.
            </p>
            <a href="#" class="btn btn-success mt-auto">
              Verificar Cobertura
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCards",
};
</script>

<style scoped>
.card {
  border-radius: 15px;
}

.card-title {
  font-weight: bold;
  font-size: 1.5rem;
}

.card-text {
  font-size: 1rem;
  color: #555;
}
</style>
